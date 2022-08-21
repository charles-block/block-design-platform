export default (clientProjectPosts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...clientProjectPosts, action.payload];
        default:
            return clientProjectPosts;
    }
}