import mongoose from 'mongoose';
import ClientProjectPostsMessage from "../models/clientProjectPostsMessage.js";

export const getClientProjectPosts = async (req, res) => {
    try {
        const clientProjectPostsMessages = await ClientProjectPostsMessage.find();

        res.status(200).json(clientProjectPostsMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createClientProjectPosts = async (req, res) => {
    const clientProjectPost = req.body;

    const newClientProjectPost = new ClientProjectPostsMessage(clientProjectPost);
    
    try {
        await newClientProjectPost.save();

        res.status(201).json(newClientProjectPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updateClientProjectPosts = async (req, res) => {
    const { id: _id } = req.params; //extract id from req.params; we can also rename properties with object destructuring
    const post = req.body; 

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedClientProjectPost = await ClientProjectPostsMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true} ); //receive the data for the updates from req.body

    res.json(updatedClientProjectPost);

}

export const deleteClientProjectPosts = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await ClientProjectPostsMessage.findByIdAndRemove(id); 

    res.json({ message: 'Post deleted successfully' });
}