import axios from 'axios'; //make API calls

const url = 'https://block-design-platform.herokuapp.com/posts'; //returns all posts we have in the database http://localhost:5000/posts

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

//Redux: all actions in backend are going to be used by Redux; dispatching function


const clientProjectUrl = 'https://block-design-platform.herokuapp.com/client-projects'; //http://localhost:5000/client-projects

export const fetchClientProjectPosts = () => axios.get(clientProjectUrl);

export const createClientProjectPosts = (newClientProjectPost) => axios.post(clientProjectUrl, newClientProjectPost);

export const updateClientProjectPosts = (id, updatedClientProjectPost) => axios.patch(`${clientProjectUrl}/${id}`, updatedClientProjectPost);