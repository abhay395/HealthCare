const express = require('express');
require('dotenv').config()
const cors = require('cors');
const connectDb = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/doctor', require('./routes/Doctor.routes'));
app.use('/api/patient', require('./routes/Pateint.routes'));
app.use('/api/appointment', require('./routes/Appoinment.routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
connectDb();