var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    text: {
        type: String,
        trim: true,
    },
    //Owners of a Song,Album
    receivers: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the User model
            ref: "User"
        }
    ],
    sender: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the User model
            ref: "User"
        }
    ],
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model("Message", MessageSchema);

// Export the User model
module.exports = Message;