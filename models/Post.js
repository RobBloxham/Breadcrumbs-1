const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: String,
        createdBy: String,
        song: String,
        caption: String,
        picture: String,
        starred: Boolean
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model('Post', postSchema)