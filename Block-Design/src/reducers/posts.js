// A reducer is a function that accepts state and action
// it implements different logics based on action type

export default (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); //action.payload is the updated post; you're essentiallu fetching the post with that ID
        case 'FETCH_ALL':
            return action.payload; //actual posts
        case 'CREATE':
            return [ ...posts, action.payload]; //spread the posts, and then add a new post eg. action.payload
        default:
            return posts;
    }
}