const mongoose=require("mongoose")

const urlSchema=new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})
const URL=mongoose.model("URL",urlSchema)

module.exports=URL