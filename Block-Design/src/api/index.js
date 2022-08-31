import axios from 'axios'; //make API calls

const url = 'http://localhost:5000/posts'; //returns all posts we have in the database

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

//Redux: all actions in backend are going to be used by Redux; dispatching function


const clientProjectUrl = 'http://localhost:5000/client-projects';

export const fetchClientProjectPosts = () => axios.get(clientProjectUrl);

export const createClientProjectPosts = (newClientProjectPost) => axios.post(clientProjectUrl, newClientProjectPost);

