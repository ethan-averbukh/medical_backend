const mongoose = require('./../db/connection');
const Schema = mongoose.Schema

const NotesSchema = new Schema({
    Date: String,
    Symptom: String,
    Severity: Number,
    Medications: String,
    Foods: String,

})

module.exports = mongoose.model('Note', NotesSchema);