const mongoose = require("mongoose");

// connect to the database
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));


db.once("open", function () {
  console.log("successfully connected to the database");
});
module.exports = db;