const mongoosh = require("mongoose");

async function connectMongoDb(url){
     mongoosh.connect(url);
}

module.exports= {
    connectMongoDb,
};