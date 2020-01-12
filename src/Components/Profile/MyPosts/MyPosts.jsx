import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
let  posts = props.postsArr.map(post => {
       return <div key={post.id} className={s.item_holder}> <Post postName = {post.postName} ava = {post.ava} content = {post.content} likesCount = {post.likesCount}/></div>
    });
    return <div className={s.content}>
        {posts}
    </div>
};
export default MyPosts;
