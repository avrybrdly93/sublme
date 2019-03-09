const db = require("../models");
const passport = require("passport");

module.exports={
    signUpUser: function (req, res, next) {
        passport.authenticate('local-signup', function (err, usr, info) {
            console.log("info", info);
            if (err) {
                console.log("Passport Error: " + err);
                return next(err);
            }
            if (!usr) {
                console.log("user error " + usr);
                return res.send({ success: false, message: 'Authentication Failed' });
            }

            req.login(usr, loginErr => {
                if (loginErr) {
                    console.log("Login Error " + loginErr);
                    return next(loginErr);
                }
                console.log('redirecting....');
                res.cookie('first_name', usr.firstName);
                res.cookie('user_id', usr._id);
                res.status(200);
                res.send("Go Ahead");
            });
        })(req, res, next);
    },
    loginUser: function (req, res, next) {
        passport.authenticate('local-login', function (err, usr, info) {
          console.log("\n\n\n########userrrr", usr)
          if (err) {
            console.log("passport err", err);
            return next(err); // will generate a 500 error
          }
          if (!usr) {
      
            return res.send({ success: false, message: 'Authentication Failed' });
          }
          req.login(usr, loginErr => {
            if (loginErr) {
              console.log("loginerr", loginErr);
              return next(loginErr);
            }
      
            console.log('redirecting....');
            res.cookie('first_name', usr.firstName);
            res.cookie('user_id', usr._id);
      
            res.status(200);
            res.send("Go Ahead");
          });
        })(req, res, next);
      
      }
};