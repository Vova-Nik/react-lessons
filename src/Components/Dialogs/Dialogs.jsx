import React from 'react';
import s from './Dialogs.module.css';
//import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import Controls from "./Controls/Controls";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogItem dialogsArr = {props.state.dialogsArr} />
            <Message messagesBody = {props.state.messagesArr} />
            <Controls />
        </div>
    )
};

export default Dialogs;