require("dotenv").config();
const db = require("../models");
const AWS = require("aws-sdk");
const passport = require("passport");

// configure the keys for accessing AWS
AWS.config.update({
  region: "us-west-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const S3_BUCKET = process.env.S3_BUCKET;

module.exports = {
  signUpUser: function (req, res, next) {
    const s3 = new AWS.S3();
    const imgOneName = req.body.imageOneName;
    const imgOneType = req.body.imageOneType;
    const imgTwoName = req.body.imageTwoName;
    const imgTwoType = req.body.imageTwoType;

    if (imgOneType === "png" || imgOneType === "jpeg" || imgOneType === "jpg") {
      if ( imgTwoType === "png" || imgTwoType === "jpeg" || imgTwoType === "jpg") {
        const s3ParamsOne = {
          Bucket: S3_BUCKET,
          Key: imgOneName,
          Expires: 500,
          ContentType: imgOneType,
          ACL: "public-read"
        };

        const s3ParamsTwo = {
          Bucket: S3_BUCKET,
          Key: imgTwoName,
          Expires: 500,
          ContentType: imgTwoType,
          ACL: "public-read"
        };

        s3.getSignedUrl("putObject", s3ParamsOne, (errOne, dataOne) => {
          if (errOne) {
            console.log("SIGNED URL ERROR PROFILE PIC: " + errOne);
            res.json({
              success: false,
              errMsg: "Could Not Upload Profile Picture. Try Again"
            });
          }

          s3.getSignedUrl("putObject", s3ParamsTwo, (errTwo, dataTwo) => {
            if (errTwo) {
              console.log("SIGNED URL ERROR BG PIC: " + errTwo);
              res.json({
                success: false,
                errMsg: "Could Not Upload Background Picture. Try Again"
              });
            }

            const returnData = {
              signedRequestOne: dataOne,
              urlOne: `https://${S3_BUCKET}.s3.amazonaws.com/${imgOneName}`,
              signedRequestTwo: dataTwo,
              urlTwo: `https://${S3_BUCKET}.s3.amazonaws.com/${imgTwoName}`
            };

            passport.authenticate("local-signup", function (err, usr, info) {
              console.log("info", info);
              if (err) {
                console.log("Passport Error: " + err);
                return next(err);
              }
              if (!usr) {
                console.log("user error " + usr);
                return res.json({
                  success: false,
                  errMsg: "Authentication Failed"
                });
              }

              req.login(usr, loginErr => {
                if (loginErr) {
                  console.log("Login Error " + loginErr);
                  return next(loginErr);
                }
                console.log("redirecting....");
                res.cookie("username", usr.username);
                res.cookie("user_id", usr._id);
                res.status(200);
                res.json({ success: true, data: { returnData } });
              });
            })(req, res, next);
          });
        });
      } else {
        res.json({
          success: false,
          errMsg: "Image File One Type Not Supported!"
        });
      }
    } else {
      res.json({
        success: false,
        errMsg: "Image File One Type Not Supported!"
      });
    }
  },
  loginUser: function (req, res, next) {
    passport.authenticate("local-login", function (err, usr, info) {
      console.log("\n\n\n########userrrr", usr);
      if (err) {
        console.log("passport err", err);
        return next(err); // will generate a 500 error
      }
      if (!usr) {
        return res.send({ success: false, message: "Authentication Failed" });
      }
      req.login(usr, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginErr);
          return next(loginErr);
        }

        console.log("redirecting....");
        res.cookie("username", usr.username);
        res.cookie("user_id", usr._id);

        res.status(200);
        res.send("Go Ahead");
      });
    })(req, res, next);
  },
  likeSong: function (req, res) {
    db.Music.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { likedMusic: req.body.likedMusic } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserByID: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  logoutUser: function (req, res) {
    req.session.destroy(function (err) {
      req.logout();
      res.clearCookie('key');
      res.clearCookie('username');
      res.clearCookie('user_id');
    });
  },
  findLoggedInUser: function(req,res){
    db.User.findById(req.session.passport.user._id)
    .then(dbModel=>{
      console.log("USER FOUND: "+dbModel);
      res.json(dbModel)
    })
    .catch(err=>{
      console.log(err);
      res.status(422).json(err)
    });
  }
};
