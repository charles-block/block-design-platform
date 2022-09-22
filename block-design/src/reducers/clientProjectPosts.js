export default (clientProjectPosts = [], action) => {
    switch (action.type) {
        case 'DELETE_CLIENT_PROJECT_POSTS' :
            return clientProjectPosts.filter((clientProjectPost) => clientProjectPost._id !== action.payload); //keep all the post except the one
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

