const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postCommentSchema = new Schema({
    text: String,
    user: String,
    creator: String
}, {
    timestamps: true
})

const postSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    description: String,
    creator: String,
    postComments: [postCommentSchema],
}, { 
    timestamps: true 
})

module.exports = mongoose.model('Post', postSchema)