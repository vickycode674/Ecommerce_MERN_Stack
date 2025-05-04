const express  = require('express')
const cors = require('cors')
const connectDB = require('../backend/config/db')
require('dotenv').config()
const router = require('./routes/index')
const cookieParser = require('cookie-parser')



const app = express()  //calling  express all modulietries

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,   // or use '*' for all origins (not recommended in production)
  }));

  app.use(cookieParser())

app.use(express.json())  //this line will make it more viable to get teh json data from teh request dude
app.use("/api",router)




const PORT = 8080 || process.env.PORT 

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connecting to mongo db")
        console.log("Server is running",PORT)
        })
})

