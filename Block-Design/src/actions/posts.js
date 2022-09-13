import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators: functions that return actions (type & payload)
// payload: data where we store all our posts
// redux thunk allows us to specify an additional arrow function; async

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();

        //pass or dispatch data from the backend
        dispatch({ type: FETCH_ALL, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
}

