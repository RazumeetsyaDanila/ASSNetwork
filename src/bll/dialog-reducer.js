const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"; // вызывается на каждый символ
const ADD_MESSAGE = "ADD-MESSAGE"; // вызывается при нажатии на кнопку отправить


const dialogReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: state.newMessageText,
                pos: "right"
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;

        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default dialogReducer;