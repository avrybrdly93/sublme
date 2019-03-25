var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: {
    type: String,
    trim: true
  },
  writerID: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  writerName: {
    type: String
  },
  writerPic: {
    type: String
  },
  replies: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the User model
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
  }
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the User model
module.exports = Comment;
