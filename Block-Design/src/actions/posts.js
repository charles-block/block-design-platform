import * as api from '../api';

// Action Creators: functions that return actions (type & payload)
// payload: data where we store all our posts
// redux thunk allows us to specify an additional arrow function; async

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();

        //pass or dispatch data from the backend
        dispatch({ type: 'FETCH_ALL', payload: data })
        
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });

    } catch (error) {
        console.log(error);
    }
}

