import React from 'react';
import './dialogs.css'
import {addMessageCreator, updateNewMessageTextCreator} from "../../../bll/dialog-reducer";

const Dialogs = (props) => {

    let dialogsDivArray = props.dialogs.map(d => <div className="dialog-names__name" key={d.id}> {d.dialog} </div>);
    let messagesDivArray = props.messages
        .map(m => <div className={"messages__message messages__message_position_" + m.pos}
                       key={m.id}> {m.message} </div>);

    let messageRef = React.createRef();

    let addMessageClick = () => {
        if (messageRef.current.value)
            props.dispatch(addMessageCreator());
    }

    let onMessageChange = () => {
        let inpText = messageRef.current.value;
        props.dispatch(updateNewMessageTextCreator(inpText));
    }

    return (
        <div className="dialogs">
            <div className="dialogs__dialog-names">
                {dialogsDivArray}
            </div>

            <div className="dialogs__messages">
                {messagesDivArray}
            </div>

            <div className="dialogs__input">
                <div><input ref={messageRef} type="text" className="input__textarea2" onChange={onMessageChange}
                            value={props.newMessageText} placeholder="Написать сообщение"/></div>
                <button className="input__button2" onClick={addMessageClick}> Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;