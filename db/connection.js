const mongoose = require('mongoose');

let mongooseURL = "";

if(process.env.NODE_ENV === 'production') {
    mongooseURL = process.env.DB_URL
} else {
    mongooseURL = "mongodb://127.0.0.1/medical_backend"
}

mongoose.connect(mongooseURL)

module.exports = mongoose