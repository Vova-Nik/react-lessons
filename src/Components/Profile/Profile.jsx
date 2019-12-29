import React from 'react';
// import logo from './pngfuel.png';
import s from './profile.module.css';
import logoContent from './Tarifa.jpg';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
   return <div className={s.content}>
    <img src={logoContent} alt="Tarifa" width="100%" heigh="96px"></img>
    <div className={s.ava}> ava +++  description</div>
    <MyPosts />
  </div>
}
export default Profile;