var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BullhornSchema = new Schema({
    text: {
        type: String,
        trim: true,
    },
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
    }
});

// This creates our model from the above schema, using mongoose's model method
var Bullhorn = mongoose.model("Bullhorn", BullhornSchema);

// Export the User model
module.exports = Bullhorn;