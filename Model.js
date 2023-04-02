const mongoose = require("./db/connection");

const PlaylistSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  image: String,
  year: Number,
  link: String
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;