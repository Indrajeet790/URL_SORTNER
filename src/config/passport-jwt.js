const passport =require('passport');
const JWT =require('passport-jwt');
const User =require('../models/userModel')
const JWTStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt; 

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true
}

passport.use(new JWTStrategy(opts, async function(req, JWTPayload, done) {
    try {
        const user = await User.findById(JWTPayload._id);
        
        if (user) {
            req.user = user;
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.log("Error in finding user from JWT:", err);
        return done(err, false);
    }
}));

module.exports=passport;