const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "n2YRmArR#_d7mbaqemSvJtcN71o_YvDeZ6CAO1OsrvuUsaS-sllA",
MONGODB: process.env.MONGODB || "mongodb://mongo:kxiwsnJulgvyrBCSUritiDjlpJLLPDYf@junction.proxy.rlwy.net:45045"
};


