import * as api from '../api';

//action creators: functions that returns an action

export const getClientProjectPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchClientProjectPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message)
    }

}

//payload is usually the data where we store all of our posts

export const createClientProjectPosts = (post) => async (dispatch) => {

    try {
        const { data } = await api.createClientProjectPosts(post);

        dispatch({ type: 'CREATE', payload: data });

    } catch (error) {
        console.log(error)
    }

}