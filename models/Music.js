var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
    musicName: {
        type: String,
        trim: true,
    },
    Genre: {
        type: String,
        trim: true,
        default: "Other"
    },
    //Owners of a Song,Album
    owners: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the User model
            ref: "User"
        }
    ],
    comments:[],
    likes: {
        type: Number,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }, 
    bgImg: {
        type: String
    }
    
});

// This creates our model from the above schema, using mongoose's model method
var Music = mongoose.model("Music", MusicSchema);

// Export the User model
module.exports = Music;