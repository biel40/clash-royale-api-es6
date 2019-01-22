import {
    getClanByName
} from './../serveis/clanService.js';

import {
    getAllLocations
} from '../serveis/locationService.js';

let clanToSearch;
let clans;
let button = document.getElementById("cerca");

button.addEventListener('click', async function () {

    let h2 = document.getElementById('loading');
    h2.textContent = 'Cercant els clans...';

    let input = document.getElementById('exampleInputClan1');
    clanToSearch = input.value;

    clans = await getClanByName(clanToSearch);
    pintarTaula(clans);

});



async function pintarTaula(arrayDeClans) {

    let table = '<table class="table table-light">';

    table += '<thead class="mt-2">';
    table += '<tr>';
    table += '<th class="pb-2" > Tag </th>';
    table += '<th class="pb-2" > Nom </th>';
    table += '<th> Localització ' +
        '<select class="custom-select col-1" id="select1" onclick=\"loadSelect()\">' + await fill() +
        '</select> ' + '</th>';
    table += '<th class="pb-2" > Membres </th>';
    table += '</tr>';
    table += '</thead>';

    arrayDeClans.forEach(function (clan) {
        table += '<tr>';
        table += '<td> <a href="clanDetails.html?tag=' + clan.tag.replace('#', '') + '">' + clan.tag +
            '</a> </td>';
        table += '<td> <a href="clanDetails.html?tag=' + clan.tag.replace('#', '') + '">' + clan.name +
            '</a> </td>';
        table += '<td>' + clan.location + '</td>';
        table += '<td>' + clan.members + '</td>';
        table += '</tr>'
    });

    document.getElementById("loading").innerText = "Resultats:";
    document.querySelector('#taula').innerHTML = table;
}



async function fill() {
    let locationsArray = await getAllLocations();
    let stringToPaint;

    stringToPaint += "<option value=\"\"> </option>";
    stringToPaint += "<option value=\"sensefiltre\"> Tots </option>";

    locationsArray.forEach(function (location) {
        stringToPaint += "<option value=\"" + location.name + "\"> " + location.name + "</option>";
    });

    return stringToPaint;

}


window.loadSelect = loadSelect;
function loadSelect(){
    let selectCountries = document.getElementById('select1');
    
    selectCountries.addEventListener('change', function() {
        let selectedOption = selectCountries.options[selectCountries.selectedIndex].text;
        
        if (selectedOption != 'Tots') {
            const clansFiltered = clans.filter(clan => clan.location == selectedOption);
            pintarTaula(clansFiltered);
        } else {
            pintarTaula(clans);
        }
    });

    
    

}