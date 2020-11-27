const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"; // вызывается на каждый символ
const ADD_MESSAGE = "ADD-MESSAGE"; // вызывается при нажатии на кнопку отправить


let initializeState = {
    dialogs: [
        {id: 0, dialog: "Степан"},
        {id: 1, dialog: "Валера"},
        {id: 2, dialog: "Виктор"},
        {id: 3, dialog: "Иван"},
        {id: 4, dialog: "Николай"}
    ],
    messages: [
        {id: 0, message: "Привет, мужик!", pos: "right"},
        {id: 1, message: "Здарова, мужик!", pos: "left"},
        {id: 2, message: "Какие движухи?", pos: "left"},
        {id: 3, message: "Все в порядке! Как сам?", pos: "right"},
        {id: 4, message: "Стабильно", pos: "left"},
        {id: 5, message: "Ну тогда, связь!", pos: "right"},
        {id: 6, message: "Связь!", pos: "left"}
    ],
    newMessageText: ""//для отслеживания вводимого текста
}

const dialogReducer = (state = initializeState, action) => {
    switch (action.type) {
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