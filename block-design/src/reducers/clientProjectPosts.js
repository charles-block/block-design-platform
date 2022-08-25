export default (clientProjectPosts = [], action) => {
    switch (action.type) {
        case 'FETCH_CLIENT_PROJECT_POSTS':
            return action.payload;
        case 'CREATE_CLIENT_PROJECT_POSTS':
            return [ ...clientProjectPosts, action.payload];
        default:
            return clientProjectPosts;
    }
}