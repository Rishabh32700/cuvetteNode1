const mongoose = require("mongoose");

async function dbConnaction(){
    return mongoose
    .connect("mongodb://127.0.0.1:27017/cuvetteNodeDB")
}

module.exports={
    dbConnaction
}

