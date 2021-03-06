const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({id}, cb);}
);

passport.use(new LocalStrategy({
  usernameField: "username",
  passwordField: "password",
}, (username, password, cb) => {
  //Vérifie que le nom d'utilisateur existe
  User.findOne({username:username}, (err, user) => {
    if(err) {
       return cb(err);
    }
    if(!user) {
      console.log("username not found");
       return cb(null, null, {message: "Username not found"});
    }
    //Vérifie que le mot de passe est bien celui de l'utilisateur
    bcrypt.compare(password, user.password, (err, res) => {
       if(err) {
          return cb(err);
       }
       if(!res) {
             console.log("password not found");
          return cb(null, null, {message: "Invalid password"});
       }
       return cb(null, user, {message: "Login succesful"});
    })
  })
}));
