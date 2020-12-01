import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../../bll/dialog-reducer";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageClick: () => dispatch(addMessageCreator()),
        onMessageChange: (inpText) => dispatch(updateNewMessageTextCreator(inpText)),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;