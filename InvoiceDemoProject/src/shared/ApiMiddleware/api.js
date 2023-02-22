/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import {accessToken, languagee} from '../../shared/Constant/Constant';

var base_url = 'https://jsonplaceholder.typicode.com/todos/1';

let header = {
  Authorization: 'Token  a82a8fc4a1a4af42751b310441e26dd6c4a91895', // Get token from GMS Authentication api hardcoded
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

export var SearchPlaces = data => {
  let url = base_url + 'v1/places/' + data;
  // console.log('API -=====> ', url);
  // console.log("accessToken -=====> ", accessToken);
  // console.log('data -=====> ', JSON.stringify(data));

  return new Promise(function (resolve, reject) {
    try {
      body = JSON.stringify(data);
      let requestConfig = {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${accessToken?.access_token ? accessToken?.access_token : accessToken}`,
        },
        // body: body,
      };
      fetch(url, requestConfig)
        .then(r => {
          //console.log('SuccessfullResult=>', r);
          r.json()
            .then(res => {
              resolve(res);
            })
            .catch(e => {
              console.log('Incorrect JSON');
            });
        })
        .catch(e => {
          console.log('Incorrect JSON', e);
          // reject(e);
        });
    } catch (e) {
      console.log(e);
    }
  });
};
