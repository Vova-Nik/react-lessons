import React from 'react';
import s from './../Dialogs.module.css';
// import {NavLink} from "react-router-dom";

const Controls = (props) => {
    console.log(props);
    return <div className={s.dialogControls}>
        <textarea ref = {textArea} className={s.textArea}>Add Your message</textarea>
        <div className={s.btnAdd} onClick = { btnPressed } >Add message</div>
    </div>
};
let textArea = React.createRef();

let btnPressed = () => {alert( textArea.current.value )};
export default Controls;