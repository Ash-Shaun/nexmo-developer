'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_PRIVATE_KEY = __dirname +"/../"+ process.env.NEXMO_PRIVATE_KEY;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_PRIVATE_KEY
}, {debug: true});

nexmo.calls.update(CALL_UUID, { action: 'mute' }, (err, res) => {
  if(err) { console.error(err); }
  else {
      console.log(res);
  }
});

function unmute (){
    nexmo.calls.update(CALL_UUID, { action: 'unmute' }, (err, res) => {
        if(err) { console.error(err); }
        else {
            console.log(res);
        }
    });
}

setTimeout(unmute, 5000); // delay 5 seconds



