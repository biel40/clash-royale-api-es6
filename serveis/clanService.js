import {Clan} from './../models/clan.js';

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjliMWU2NDY3LWJhMGMtNDhiNC04NmViLWVhMzcxYjFiYWNjMyIsImlhdCI6MTU0NjM4OTU3NCwic3ViIjoiZGV2ZWxvcGVyLzIwNWUxMjc5LTc5ZDEtM2EzYy0yYjNhLTM4ZjQ5NDA2ZjQzZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.odQwAhsh5wxzKsxnDHIvGSCD5LcG50-fRZl3qQgBjzHQw31WM1rX_f9slSwcOmxCjeuFZ4MgKAt0MK93LQh3yw";

export async function getClanByName(nom) {


    let nomFiltered = nom.replace(' ', '%2520');
    
    let objClanByName = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/clans?name=" + nomFiltered,
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objClanByName),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let finalResponseJson = await response.json();

    let clans = finalResponseJson.items.map(function (clan) {
        return new Clan(clan.tag, clan.name, null, clan.location.name,  clan.members);
    });

    return clans;

}


export async function getClanByTag(tag) {

    let nomFiltered = tag.replace(' ', '%2520');
    
    let objClanByTag = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/clans/%23" + nomFiltered,
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objClanByTag),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let clan = await response.json();
    console.log(clan);

    let finalClan = new Clan(clan.tag, clan.name, clan.description, clan.location.name, clan.members, clan.memberList);

    console.log(finalClan);
    return finalClan;

}