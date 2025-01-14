const mongoose = require("mongoose");
require('dotenv').config()
const dbURI = process.env.MONGODB_URI;

connectDb = () =>
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = connectDb;