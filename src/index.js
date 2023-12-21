require("dotenv").config();
const express=require("express")
const app=express();
const db = require("./config/dbConnection")

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("Server is not running",err)
    }else{
        console.log(`server is running on ${process.env.PORT}`)

    }
})