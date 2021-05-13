'use strict';

global.fetch = require('node-fetch');

const token = '1000.5d181c848ed80fce3daef7a00deb043c.0aead58fd98dd599f383f8ef90501cab';
const baseURL = 'https://desk.zoho.com/api/v1/articles?orgId=689580021&permission=ALL&status=Published&limit=50&from=1';
let tokenUse = 0;

console.log('start program');

function useToken() {
    fetch(baseURL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(`data length: ${data.data.length}`);
            tokenUse++;
            console.log(`token has been used ${tokenUse} times`)
        })
        .catch((err) => {
            done(err);
        });

}

for(let i = 0; i<1000; i++) {
    useToken();
};





