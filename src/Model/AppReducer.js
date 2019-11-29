

const initialState = {
    
  };

const appReducer=(state=initialState, action) => {
    switch (action.type) {
        //get posts into the store
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.posts
              };
        default:
            return state;
    }
};

export default appReducer;