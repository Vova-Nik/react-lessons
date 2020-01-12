import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let dialogsElements = props.dialogsArr.map(dialog => {
        let path = "/dialogs/" + dialog.id;
        return (
            <div key={dialog.id} className={s.dialog}>
                <NavLink to={path}> {dialog.name} </NavLink>
            </div>
        )
    });

    return <div className={s.dialogsItems}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
    </div>
};

export default DialogItem;