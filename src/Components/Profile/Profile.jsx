import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
console.log('Profile.jsx props = ', props);
   return <div className={s.content}>
       <ProfileInfo
           addPost = {props.addPost}
           newPostText = { props.profilePage.newPostText }
           updateNewPostText = {props.updateNewPostText}/>
       <MyPosts
           postsArr = { props.profilePage.postsArr }
           addPost = {props.addPost}/>
   </div>
};
export default Profile;