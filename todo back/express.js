const express= require("express")
const connectDB = require("./database")
const cors= require("cors")
require("dotenv").config()
const router = require("./router")


const app=express()
connectDB()

app.use(express.json())
app.use(cors())
app.use('/',router)

app.get("/",(req,res)=>{
    res.send("<h1>server running</h1>")
   
})
const PORT=3000
app.listen(PORT,()=>console.log(`running ${PORT}`))