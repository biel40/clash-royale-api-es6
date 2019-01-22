// import {Card} from './../models/player.js';

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjliMWU2NDY3LWJhMGMtNDhiNC04NmViLWVhMzcxYjFiYWNjMyIsImlhdCI6MTU0NjM4OTU3NCwic3ViIjoiZGV2ZWxvcGVyLzIwNWUxMjc5LTc5ZDEtM2EzYy0yYjNhLTM4ZjQ5NDA2ZjQzZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.odQwAhsh5wxzKsxnDHIvGSCD5LcG50-fRZl3qQgBjzHQw31WM1rX_f9slSwcOmxCjeuFZ4MgKAt0MK93LQh3yw";

export async function getAllCards() {

    let objGetAllCards = {
        MethodName: 'sendAPI',
        params: {
            url: "https://api.clashroyale.com/v1/cards",
            token: token
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        body: JSON.stringify(objGetAllCards),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });

    let finalResponseJson = await response.json();
    
    return finalResponseJson.items;
}