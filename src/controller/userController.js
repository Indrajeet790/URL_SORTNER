const User=require("../models/userModel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")


module.exports.register=async(req,res)=>{
    try{
        const {username,email,password}=req.body;

        const exitingUser= await User.findOne(email);
        if(exitingUser){
            return res.status(400).json({
                message:"email is already exits"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10)

        const newUser=new User({
            username,
            email,
            password:hashedPassword
        })
        await newUser.save();
        return res.status(201).json({newUser})

    }catch(err){
        console.error(err);
        return res.status(500).json({message:"Internal server error"})
        
    }
}

module.exports.SignIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne(email)
        if(!user){
            return res.status(401).json({message:"Invalid credentials"})
        }

        const passwordMatch=await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(401).json({message:"Invalid credentials"})
        }
        const token =jwt.sign(user.toJSON(),mySecret,{expiresIn:"1d"})
        return res.status(200).json({
            message:"sign in Successful",
            data:{
                token:token
            }
        })

    }catch(err){
        console.error(err);
        return res.status(500).json({message:"Internal server error"})
    }

}