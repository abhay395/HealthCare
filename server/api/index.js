const express = require('express');
require('dotenv').config()
const cors = require('cors');
const connectDb = require('../config/db');
const app = express();
const session = require("express-session");
// const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(
    session({
      secret: process.env.SESSION_SECRET || "secret", // Use a secure secret in production
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL, // MongoDB connection string
        ttl: 14 * 24 * 60 * 60, // Sessions expire after 14 days
      }),
      cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000, // Cookie expiration time
        secure: process.env.NODE_ENV === "production", // Set this to true if using HTTPS
        httpOnly: true,
      },
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello world"));
app.use('/api/doctor', require('../routes/Doctor.routes'));
app.use('/api/patient', require('../routes/Pateint.routes'));
app.use('/api/appointment', require('../routes/Appoinment.routes'));

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
module.exports = app
module.exports.handler = serverless(app);
connectDb();