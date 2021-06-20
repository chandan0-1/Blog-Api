const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;


const User = require('../model/user');
const Admin = require('../model/admin')

let opts = {
  jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "blogapitest",
}

// setting Passport jwt authentication for Normal User
passport.use(new JWTStrategy(opts, function(jwtPayload, done){
  User.findById(jwtPayload._id, function(err, user){
    if (err) {console.log("Error in finding the User from JWT"); return;}

    if (user){
      return done(null, user);
    }
    else{
      return done(null, false);
    }
  })
}));


// setting Passport jwt authentication for Admin
// passport.use(
//   new JWTStrategy(opts, function (jwtPayload, done) {
//     Admin.findById(jwtPayload._id, function (err, admin) {
//       if (err) {
//         console.log("Error in finding the admin from JWT");
//         return;
//       }

//       if (admin) {
//         return done(null, admin);
//       } else {
//         return done(null, false);
//       }
//     });
//   })
// );

module.exports = passport;