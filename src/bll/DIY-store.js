import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 3, post: "Я достиг 10 уровня в Тюряге"},
                {id: 2, post: "Я достиг 5 уровня в Тюряге"},
                {id: 1, post: "Приглашаю всех поиграть в Тюрягу!"},
                {id: 0, post: "Здорова, мужики!"}
            ],
            newPostText: ""
        },
        dialogPage: {
            newMessageText: "",//для отслеживания вводимого текста
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
            ]
        }
    },
    _callSubscriber() {

    }, // пустая функция, которая принимает renderAll()
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, // передает renderAll() в _callSubscriber
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;