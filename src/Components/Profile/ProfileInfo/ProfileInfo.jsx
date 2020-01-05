import React from 'react';
// import logo from './pngfuel.png';
import s from './profileInfo.module.css';
import logoContent from './Tarifa.jpg';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.imgArea}><img src={logoContent} alt="Tarifa"/></div>
            <div className={s.descriptionBlock}> +++ description</div>
            <div className={s.buttonArea}> <div className={s.button}>Add post </div></div>
        </div>

    )
};
export default ProfileInfo;