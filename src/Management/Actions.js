import homeConnect from './HomeConnect';

const _getPosts = () => ({
    type: 'GET_POSTS',
    posts
});

//gets all topics for now for teaching
export const getPosts = () => {
    return (dispatch) => {
        return homeConnect.get('posts').then(response => {
            console.log(response.data);
            //dispatch(_getTopics(response.data));
        }).catch(function(error) {
            console.log(error.response.data);
         });
    };
};