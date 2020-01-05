import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = () => {
    return <div className={s.content}>
        <div className={s.item_holder}><Post name="Post1" cont="Hi Vovchik" ava="ava1.jpg"/></div>
        <div className={s.item_holder}><Post name="Post2" cont="Hi Lilisa" ava="ava2.png"/></div>
        <div className={s.item_holder}> <Post name="Post3" cont="Hi everybody"/></div>
    </div>
};
export default MyPosts;
