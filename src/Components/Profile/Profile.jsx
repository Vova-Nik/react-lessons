import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = () => {
   return <div className={s.content}>
       <ProfileInfo/>
       <MyPosts/>
   </div>
};
export default Profile;