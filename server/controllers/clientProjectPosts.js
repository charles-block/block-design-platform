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