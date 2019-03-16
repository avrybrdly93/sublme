require("dotenv").config();
const db = require("../models");
const AWS = require('aws-sdk');

// configure the keys for accessing AWS
AWS.config.update({
    region: "us-west-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const S3_BUCKET = process.env.S3_BUCKET;

module.exports = {
    findAll: function (req, res) {
        db.Music
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //Dont touch for now!
    create: function (req, res) {
        const s3 = new AWS.S3();
        const musicName = req.session.passport.user.username + Date.now().toString() + "-music";
        const musicType = req.body.musicType;
        const imgName = req.session.passport.user.username + Date.now().toString() + "-img";
        const imgType = req.body.imgType;

        // console.log("MUSIC EXTENSION: " + musicType);
        // console.log("Image EXTENSION: " + imgType);

        if (musicType === "mp3" || musicType === "wav") {
            if (imgType === "png" || imgType === "jpeg" || imgType === "jpg") {
                const s3ParamsOne = {
                    Bucket: S3_BUCKET,
                    Key: musicName,
                    Expires: 500,
                    ContentType: musicType,
                    ACL: 'public-read'
                };

                const s3ParamsTwo = {
                    Bucket: S3_BUCKET,
                    Key: imgName,
                    Expires: 500,
                    ContentType: imgType,
                    ACL: 'public-read'
                };

                s3.getSignedUrl('putObject', s3ParamsOne, (errOne, dataOne) => {
                    if (errOne) {
                        console.log(err);
                        res.json({ success: false, error: err });
                    }

                    s3.getSignedUrl('putObject', s3ParamsTwo, (errTwo, dataTwo) => {
                        if (errTwo) {
                            console.log(err);
                            res.json({ success: false, error: err });
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
                                fileLink: returnData.urlOne, 
                                genre: req.body.genre,
                                artist: req.session.passport.user._id, 
                                cover: returnData.urlTwo, 
                                artistName: req.session.passport.user.username
                            })
                            .then(dbModel => res.json({ success: true, data: { returnData } }))
                            .catch(err => res.status(422).json(err));
                    });
                });
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
    }
};