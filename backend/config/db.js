const mongoose = require('mongoose')

async function connectDB(){
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Successfullty connected to mongo db dude");
    }
    catch{
        console.log(err)
    }
}

module.exports = connectDB