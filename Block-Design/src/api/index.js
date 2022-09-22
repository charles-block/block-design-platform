import axios from 'axios'; //make API calls

const url = 'http://localhost:5000/posts'; //returns all posts we have in the database https://block-design-platform.herokuapp.com/posts

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

//Redux: all actions in backend are going to be used by Redux; dispatching function


const clientProjectUrl = 'http://localhost:5000/client-projects';  //https://block-design-platform.herokuapp.com/client-projects

export const fetchClientProjectPosts = () => axios.get(clientProjectUrl);

export const createClientProjectPosts = (newClientProjectPost) => axios.post(clientProjectUrl, newClientProjectPost);

export const updateClientProjectPosts = (id, updatedClientProjectPost) => axios.patch(`${clientProjectUrl}/${id}`, updatedClientProjectPost);

export const deleteClientProjectPosts = (id) => axios.delete(`${clientProjectUrl}/${id}`);