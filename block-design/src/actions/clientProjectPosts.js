import * as api from '../api';

//action creators: functions that returns an action

export const getClientProjectPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchClientProjectPosts();

        dispatch({ type: 'FETCH_CLIENT_PROJECT_POSTS', payload: data });

    } catch (error) {
        console.log(error.message)
    }

}

//payload is usually the data where we store all of our posts

export const createClientProjectPosts = (post) => async (dispatch) => {

    try {
        const { data } = await api.createClientProjectPosts(post);

        dispatch({ type: 'CREATE_CLIENT_PROJECT_POSTS', payload: data });

    } catch (error) {
        console.log(error)
    }

}

export const updateClientProjectPosts = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateClientProjectPosts(id, post);

        dispatch({ type: 'UPDATE_CLIENT_PROJECT_POSTS', payload: data });

    } catch (error) {
        console.log(error)
    }
}


export const deleteClientProjectPosts = (id) => async (dispatch) => {
    try {
        await api.deleteClientProjectPosts(id);

        dispatch( {type: 'DELETE_CLIENT_PROJECT_POSTS', payload: id});
    } catch (error) {
        console.log(error)
    }
}