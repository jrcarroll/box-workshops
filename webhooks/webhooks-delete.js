'use strict';

// Initialize packages
const util = require('util');            // Deep inspection of objects
const boxSDK = require('box-node-sdk');  // Box SDK
const fs = require('fs');                // File system for config

// Fetch config file for instantiating SDK instance
// SAVE YOUR OWN APP CONFIG FILE TO config.json 
const configJSON = JSON.parse(fs.readFileSync('config.json'));

// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);

// Create service account client
const client = sdk.getAppAuthClient('enterprise');

/****************************************************************
* Delete Webhook
****************************************************************/
const webhookId = '66401437';
client.webhooks.delete(webhookId).then(() => {
  console.log('Webhook deleted');
});