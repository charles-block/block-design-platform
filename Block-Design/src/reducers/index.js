import { combineReducers } from "redux";

import posts from './posts';
import clientProjectPosts from './clientProjectPosts';

export default combineReducers({
    //add all reducers 
    // posts: posts,
    posts,
    clientProjectPosts
})