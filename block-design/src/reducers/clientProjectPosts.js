export default (clientProjectPosts = [], action) => {
    switch (action.type) {
        case 'UPDATE_CLIENT_PROJECT_POSTS':
            return clientProjectPosts.map((clientProjectPost) => clientProjectPost._id === action.payload._id ? action.payload : clientProjectPost);
        case 'FETCH_CLIENT_PROJECT_POSTS':
            return action.payload;
        case 'CREATE_CLIENT_PROJECT_POSTS':
            return [ ...clientProjectPosts, action.payload];
        default:
            return clientProjectPosts;
    }
}

