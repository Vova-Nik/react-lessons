import React from 'react';
// import logo from './pngfuel.png';
import s from './profileInfo.module.css';
import logoContent from './Tarifa.jpg';

const ProfileInfo = (props) => {
    console.log(props);
    let addPostBtn = () => {
        //let text = newPostElement.current.value;
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //console.log(text);
        props.updateNewPostText(text);
    };

    return <div className={s.content}>
        <div className={s.imgArea}><img src={logoContent} alt="Tarifa"/></div>
        <div className={s.descriptionBlock}> +++ description</div>
        <div className={s.textareaWrapper}>
            <textarea ref={newPostElement} className={s.textarea} value={props.newPostText} onChange = {onPostChange}/>
        </div>
        <div className={s.buttonWrapper}>
            <div onClick={ addPostBtn } className={s.button}>Add post</div>
        </div>
    </div>
};
export default ProfileInfo;

let newPostElement = React.createRef();

