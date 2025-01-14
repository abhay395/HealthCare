const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.MONGODB_URI;

connectDb = () =>
  mongoose
    .connect(dbURI, {
      connectTimeoutMS: 60000, // Increase timeout to 60 seconds
      socketTimeoutMS: 60000, // Increase socket timeout to 60 seconds
      serverSelectionTimeoutMS: 60000, // Increase server selection timeout to 60 seconds
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = connectDb;
