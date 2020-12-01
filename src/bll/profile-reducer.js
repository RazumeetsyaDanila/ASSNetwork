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
    //взрыв мозга:
    //делаем поверхностную копию объекта state,
    //затем глубокую копию тех подобъектов, которые будем менять и присваиваем им новые значения
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }

        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: state.posts[0].id + 1,
                    post: state.newPostText
                }, ...state.posts],
                newPostText: ""
            }

        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;