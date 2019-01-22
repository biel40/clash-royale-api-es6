import {Player} from './../models/player.js';

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjliMWU2NDY3LWJhMGMtNDhiNC04NmViLWVhMzcxYjFiYWNjMyIsImlhdCI6MTU0NjM4OTU3NCwic3ViIjoiZGV2ZWxvcGVyLzIwNWUxMjc5LTc5ZDEtM2EzYy0yYjNhLTM4ZjQ5NDA2ZjQzZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.odQwAhsh5wxzKsxnDHIvGSCD5LcG50-fRZl3qQgBjzHQw31WM1rX_f9slSwcOmxCjeuFZ4MgKAt0MK93LQh3yw";

export async function getPlayerByTag(tag) {
   
    let objPlayerByTag = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/players/%23" + tag,
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objPlayerByTag),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let finalResponseJson = await response.json();

    let player = new Player(finalResponseJson.tag, finalResponseJson.name, finalResponseJson.wins, finalResponseJson.losses, finalResponseJson.cards);

    return player;

}

export async function getChestsByPlayerTag(tag) {


    let objChestsByTag = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/players/%23" + tag.replace('#', '') + "/upcomingchests",
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objChestsByTag),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let finalResponseJson = await response.json();

    return finalResponseJson;
}


export async function getPlayerBattleLog(tag) {

    let objPlayerBattleLog = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/players/%23" + tag.replace('#', '') + "/battlelog",
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objPlayerBattleLog),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let finalResponseJson = await response.json();

    return finalResponseJson;
}


export async function getPlayerRankingByLocation() {

    let objPlayerRankingByLocation = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/locations/57000218/rankings/players",
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objPlayerRankingByLocation),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let finalResponseJson = await response.json();

    let arrayPlayers = [];
    finalResponseJson.items.forEach(topPlayer => {
        arrayPlayers.push(new Player(topPlayer.tag, topPlayer.name, topPlayer.wins, topPlayer.losses, topPlayer.cards) );
    });

    return arrayPlayers;
}




