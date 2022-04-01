const mongoose = require('./../db/connection')
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    title: String,
    Date: {type:Date, default: Date.now},
    Notes: [{type:mongoose.Schema.Types.ObjectId, ref:'Note'}]

})


module.exports = mongoose.model('Journal', journalSchema);