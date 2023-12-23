require("dotenv").config();
const express=require("express")
const app=express();
const passport=require("passport")
const db = require("./config/dbConnection")


// middleware
app.use(passport.initialize());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// routes
app.use("/",require("./routes/index"))


app.listen(process.env.PORT || 8000,(err)=>{
    if(err){
        console.log("Server is not running",err)
    }else{
        console.log(`server is running on ${process.env.PORT}`)

    }
})