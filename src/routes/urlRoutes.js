const express =require('express');
const router = express.Router();
const urlController =require('../controller/urlController.js');
const passport =require('passport');
const passportConfig=require("../config/passport-jwt.js");


router.post("/shorten", passport.authenticate('jwt', { session: false }),  urlController.shortUrl);
router.get("/:url", passport.authenticate('jwt', { session: false }), urlController.OriginalUrl);


module.exports=router