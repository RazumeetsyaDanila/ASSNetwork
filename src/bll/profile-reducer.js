const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"; // вызывается на каждый символ
const ADD_POST = "ADD-POST"; // вызывается при нажатии на кнопку отправить


const profileReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        case ADD_POST:
            let newPost = {
                id: state.posts[0].id + 1,
                post: state.newPostText
            }
            state.posts.unshift(newPost);
            state.newPostText = "";
            return state;

        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;