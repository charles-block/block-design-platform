import axios from 'axios'; //make API calls

const url = 'http://localhost:5000/posts'; //returns all posts we have in the database

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

//Redux: all actions in backend are going to be used by Redux; dispatching function