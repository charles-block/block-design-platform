import mongoose from 'mongoose';

//Specify what a post consists of
const postSchema = mongoose.Schema({
    key: String,
    title: String,
    name: String,
    content: String,
    link: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;