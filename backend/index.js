const express = require('express')
const cors = require('cors')
require('dotenv').config
const connectDB = require('./config/db')
const router = require('./routes')
var cookieParser = require('cookie-parser')




const app = express()
app.use(cors({
    origin: "",
    credentials: true
}))
app.use(express.json())
app.use("/api", router)
app.use(cookieParser())


const port = process.env.PORT || 8080 

connectDB().then(()=>{

    app.listen(port, () => {
        console.log("connected to database")
        console.log(`Server running on port ${port}`)
        
    })
})
