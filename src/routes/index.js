const express=require("express")
const router=express.Router()

router.use("/users",require("./registerRoutes"))
router.use("/users",require("./userSignIn"))

module.exports=router