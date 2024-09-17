const mongoose = require('mongoose')
const mongourl = "mongodb://localhost:27017/Ecom"

async function connectDB(){
    try{
        await mongoose.connect(mongourl)
        console.log('Connect to database successfully!')
    }   catch(err){
        console.log('Error connecting to database')
    }
}

module.exports = connectDB;