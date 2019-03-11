var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required",
        validate: [
            function (input) {
                return input.length >= 1;
            },
            "First Name should be longer."
        ]

    },
    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required",
        validate: [
            function (input) {
                return input.length >= 1;
            },
            "Last Name should be longer."
        ]
    },
    gender: {
        type: String,
        trim: true
    },
    birthday: {
        type: String,
        trim: true
    },
    userType: {
        type: String,
        trim: true
    },
    backgroundImage: {
        type: String,
        trim: true
    },
    profileImage: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        index: {
            unique: true
        }
    },
    username: {
        type: String,
        required: true,
        validate: [
            function (input) {
                return input.length >= 1;
            },
            "Username should be longer."
        ],
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    favoriteMusic: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Music model
            ref: "Music"
        }
    ],
    likedMusic: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Music model
            ref: "Music"
        }
    ],
    following: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the User model
            ref: "User"
        }
    ],
    bullhorns: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Bullhorn model
            ref: "Bullhorn"
        }
    ],
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;