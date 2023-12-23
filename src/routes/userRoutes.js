const express=require("express")
const router=express.Router()

const UserController=require("../controller/userController")

router.post("/signUp",UserController.userSignUp)
router.post("/SignIn",UserController.UserSignIn)

module.exports=router