const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter your session id",
MONGODB: process.env.MONGODB || "mongodb://mongo:kxiwsnJulgvyrBCSUritiDjlpJLLPDYf@junction.proxy.rlwy.net:45045"
};


