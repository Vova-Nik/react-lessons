import React from 'react';
import s from './../Dialogs.module.css';
// import {NavLink} from "react-router-dom";

const Message = (props) => {

    let messagesBodies = props.messagesBody.map(body => {
        const mess = body.message;
        return <div key={body.id} className={s.message}> {mess} </div>
    });

    return  <div className={s.messages}>
            {messagesBodies}
           </div>
};

export default Message;