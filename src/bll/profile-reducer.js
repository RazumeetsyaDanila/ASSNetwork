const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"; // вызывается на каждый символ
const ADD_POST = "ADD-POST"; // вызывается при нажатии на кнопку отправить


let initializeState = {
    posts: [
        {id: 3, post: "Я достиг 10 уровня в Тюряге"},
        {id: 2, post: "Я достиг 5 уровня в Тюряге"},
        {id: 1, post: "Приглашаю всех поиграть в Тюрягу!"},
        {id: 0, post: "Здорова, мужики!"}
    ],
    newPostText: ""
}

const profileReducer = (state = initializeState, action) => {
    switch (action.type) {
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