require("dotenv").config();
const db = require("../models");
const AWS = require("aws-sdk");

// configure the keys for accessing AWS
AWS.config.update({
  region: "us-west-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const S3_BUCKET = process.env.S3_BUCKET;

module.exports = {
  findAll: function (req, res) {
    db.Music.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findComments: function (req, res) {
    db.Music.findById(req.params.id)
      .sort({ date: -1 })
      .then(dbModel => {
        //console.log("MUSIC FOUND: "+dbModel);
        db.Comment.find({
          "_id": { "$in": dbModel.comments }
        }).then(response =>{
            //console.log("COMMENTS FOUND: "+response);
            res.json(response)
        })
        .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  postComment: function (req, res) {
    db.Comment.create({
      text: req.body.comments,
      writerID: req.session.passport.user._id,
      writerName: req.session.passport.user.username,
      writerPic: req.session.passport.user.profileImage
    }).then( responseOne => {
      //console.log(responseOne);
      db.Music.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: responseOne._id } }
      )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }).catch(error=>{
      console.log(error);
    });
  },
  create: function (req, res) {
    const s3 = new AWS.S3();
    const musicName =
      req.session.passport.user.username + Date.now().toString() + "-music";
    const musicType = req.body.musicType;
    const imgName =
      req.session.passport.user.username + Date.now().toString() + "-cover";
    const imgType = req.body.imgType;
    const imgSize = req.body.imgSize; 

    console.log("Music Cover Art Size: "+imgSize+" MB");
    // console.log("MUSIC EXTENSION: " + musicType);
    // console.log("Image EXTENSION: " + imgType);

    if (musicType === "mp3" || musicType === "wav") {
      if (imgType === "png" || imgType === "jpeg" || imgType === "jpg") {
        if(imgSize<=1.5){
          const s3ParamsOne = {
            Bucket: S3_BUCKET,
            Key: musicName,
            Expires: 500,
            ContentType: musicType,
            ACL: "public-read"
          };
  
          const s3ParamsTwo = {
            Bucket: S3_BUCKET,
            Key: imgName,
            Expires: 500,
            ContentType: imgType,
            ACL: "public-read"
          };
  
          s3.getSignedUrl("putObject", s3ParamsOne, (errOne, dataOne) => {
            if (errOne) {
              console.log("SIGNED URL ERROR MUSIC FILE: " + errOne);
              res.json({
                success: false,
                errMsg: "Could Not Upload Music File. Try Again"
              });
            }
  
            s3.getSignedUrl('putObject', s3ParamsTwo, (errTwo, dataTwo) => {
              if (errTwo) {
                console.log("SIGNED URL ERRO MUSIC PIC: " + errTwo);
                res.json({ success: false, errMsg: "Could Not Upload Music Art. Try Again" });
              }
  
              const returnData = {
                signedRequestOne: dataOne,
                urlOne: `https://${S3_BUCKET}.s3.amazonaws.com/${musicName}`,
                signedRequestTwo: dataTwo,
                urlTwo: `https://${S3_BUCKET}.s3.amazonaws.com/${imgName}`
              };
  
              db.Music
                .create({
                  title: req.body.musicTitle,
                  titleLower: req.body.musicTitle.toLowerCase(),
                  fileLink: returnData.urlOne,
                  genre: req.body.genre,
                  artistID: req.session.passport.user._id,
                  cover: returnData.urlTwo,
                  artistName: req.session.passport.user.username
                })
                .then(dbModel => res.json({ success: true, data: { returnData } }))
                .catch(err => res.status(422).json(err));
            });
          });
        }
        else{
          res.json({ success: false, errMsg: "Image File Size Too Big (1.5 MB Or Less)!" });
        }
      }
      else {
        res.json({ success: false, errMsg: "Image File Type Not Supported!" });
      }
    }
    else {
      res.json({ success: false, errMsg: "Music File Type Not Supported!" });
    }

  },
  update: function (req, res) {
    db.Music
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Music
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByArtistId: function (req, res) {
    db.Music
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOwnMusic: function (req, res) {
    db.Music.find({ owners: { $in: [req.session.passport.user._id] } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByGenre: function (req, res) {
    db.Music.find({ genre: req.params.genre })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySearch: function (req, res) {
    var expression = new RegExp("^" + req.params.term);
    db.Music.find({ titleLower: expression }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

//Dont touch for now!
