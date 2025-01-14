const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.MONGODB_URI;

connectDb = () =>
  mongoose
    .connect(dbURI, {
      connectTimeoutMS: 30000, // Increase timeout to 30 seconds
      socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = connectDb;
