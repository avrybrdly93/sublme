var localStrategy = require("passport-local").Strategy;
var db = require("../models");

module.exports = function (passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
       
    passport.deserializeUser(function(id, done) {
        db.User.findById(id, function(err, user) {
          done(err, user);
        });
    });

    passport.use('local-signup', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        process.nextTick(function () {

            db.User.findOne({ 
                "username": username 
            }).then(function (err,user) {
                if (err) {
                    console.log("err", err)
                    return done(err);
                }
                if (user) {
                    console.log('signupMessage', 'That email is already taken.');
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                }
                else {
                    db.User.create({
                        "firstName": req.body.firstName,
                        "lastName": req.body.lastName,
                        "gender": req.body.gender,
                        "birthday": req.body.birthday,
                        "userType": req.body.userType,
                        "email": req.body.email,
                        "username": req.body.username,
                        "password": db.User.schema.methods.generateHash(password)
                    }).then(function(dbUser){
                        //console.log("SIGN UP RESULT: "+result);
                        return done(null, dbUser);
                    });
                }
                    
            }).catch(function (err) { console.log(err); });
        });
    }));

    passport.use('local-login', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        db.User.findOne({
            username: req.body.username
        }).then(function (user, err) {
            //(!user.validPassword(req.body.password));
            if (!user) {
                console.log("No User Found");
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }
            if (user && !user.validPassword(req.body.password)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
            }
            
            return done(null, user);
        });
    }));
}