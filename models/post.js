const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    description: String,
    creator: String,
}, { 
    timestamps: true 
})

module.exports = mongoose.model('Post', postSchema)