// A reducer is a function that accepts state and action
// it implements different logics based on action type

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; //actual posts
        case 'CREATE':
            return [ ...posts, action.payload]; //spread the posts, and then add a new post eg. action.payload
        default:
            return posts;
    }
}

//testing changes
