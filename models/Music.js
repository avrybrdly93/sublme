var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    artistName: {
        type: String,
        trim: true
    },
    fileLink: {
        type: String,
        trim: true,
        required: true,
    },
    genre: {
        type: String,
        trim: true,
        default: "Other"
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    producer: {
        type: String
    },
    subArtists: [],
    comments:[],
    likes: {
        type: Number,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }, 
    cover: {
        type: String
    }
    
});

// This creates our model from the above schema, using mongoose's model method
var Music = mongoose.model("Music", MusicSchema);

// Export the User model
module.exports = Music;
