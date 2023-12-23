const express=require("express")
const router=express.Router()

router.use("/users",require("./userRoutes"))
router.use("/url",require("./urlRoutes"))


module.exports=router