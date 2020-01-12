import React from 'react';
// import logo from './pngfuel.png';
import s from './Post.module.css';

const Post = (props) => {
   let curr_ava = 'https://i.pinimg.com/236x/82/c3/1f/82c31f7800be28fa3d7b773e22bde09c.jpg';
   if(props.ava !== undefined)
      curr_ava = `http://localhost:3000/img/` + props.ava ;
   let names_class = s.h33 + ' ' + s.post_head;

   return (
      <div className={s.post}>
         <div className={names_class}>{props.postName}</div>
         <div className={s.ava}> <img src={curr_ava} alt="avatar" /> </div>
         <div className={s.message}> {props.content} </div>
         <div className={s.message}> Likes {props.likesCount} </div>
      </div>
   )
};
export default Post;