// A reducer is a function that accepts state and action
// it implements different logics based on action type
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload );
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); //action.payload is the updated post; you're essentiallu fetching the post with that ID
        case FETCH_ALL:
            return action.payload; //actual posts
        case CREATE:
            return [ ...posts, action.payload]; //spread the posts, and then add a new post eg. action.payload
        default:
            return posts;
    }
}