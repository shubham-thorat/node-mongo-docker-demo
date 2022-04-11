import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        fullName: {
            type: String,
            required: true
        },
        about: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Post = mongoose.model('post', postSchema)
export default Post