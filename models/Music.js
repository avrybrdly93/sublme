var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  titleLower: {
    type: String,
    trim: true
  },
  artistName: {
    type: String,
    trim: true
  },
  musicSrc: {
    type: String,
    trim: true,
    required: true
  },
  genre: {
    type: String,
    trim: true,
    default: "Other"
  },
  artistID: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  producer: {
    type: String
  },
  subArtists: [],
  comments: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Comment model
      ref: "Comment"
    }
  ],
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
