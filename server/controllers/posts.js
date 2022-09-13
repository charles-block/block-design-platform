//create all handlers for our routes
//extract function from routes
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        //retrieve all posts in database
        //async function; finding data in database takes time
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    //with POST requests, you have access to request.body
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//once you make a request, the request is going to be /posts/{id}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params; //extract id from req.params; we can also rename properties with object destructuring
    const post = req.body; //pass the whole updated post from the front end

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true} ); //receive the data for the updates from req.body

    res.json(updatedPost);
}

export const deletePost = async(req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE')
    
    res.json({ message: 'Post deleted successfully.'});

}