var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  genre: {
    type: String,
    trim: true,
    default: "Other"
  },
  artist: {
    type: String,
    ref: "User"
  },
  producer: {
    type: String
  },
  subArtists: [],
  comments: [],
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
  },
  profilePic: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Music = mongoose.model("Music", MusicSchema);

async function createSong(title, producer, artist, cover, profilePic) {
  let newSong = new Music({
    title: title,
    producer: producer,
    artist: artist,
    cover: cover,
    profilePic: profilePic
  });
  const result = await newSong.save();
  console.log(result);
}

let titles = [
  "Temptation",
  "Ball w/o you",
  "Praise The Lord (Da Shine)",
  "Die Young",
  "Outstanding",
  "Red Room",
  "Pure Cocaine"
];
let artists = [
  "Future",
  "21 Savage",
  "A$AP Rocky",
  "Roddy Ricch",
  "Gunna",
  "Offset",
  "Lil Baby"
];
let producers = [
  "Tay Keith",
  "Tay Keith",
  "Tay Keith",
  "Tay Keith",
  "Tay Keith",
  "Tay Keith",
  "Tay Keith"
];
let coverLinks = [
  "/assets/images/covers/future-the-wizrd-cover.jpeg",
  "/assets/images/covers/21-savage-i-am-i-was.jpg",
  "/assets/images/covers/ASAP-Rocky-praise-the-lord.jpg",
  "/assets/images/covers/roddy-ricch-feed-tha-streets-2.jpg",
  "/assets/images/covers/gunna-drip-or-drown-2.jpg",
  "/assets/images/covers/offset-red-room.jpg",
  "/assets/images/covers/lil-baby-street-gossip.png"
];
let profilePics = [
  "/assets/images/profiles/future.jpg",
  "/assets/images/profiles/21-savage.jpg",
  "/assets/images/profiles/asap-rocky.jpg",
  "/assets/images/profiles/roddy-ricch.jpg",
  "/assets/images/profiles/gunna.png",
  "/assets/images/profiles/offset.jpg",
  "/assets/images/profiles/lil-baby.jpg"
];

for (let i = 0; i < titles.length; i++) {
  // createSong(
  //   titles[i],
  //   producers[i],
  //   artists[i],
  //   coverLinks[i],
  //   profilePics[i]
  // );
}

// Export the User model
module.exports = Music;
