import React from 'react';
import post from './Post.module.css'
const Post = (props) => {
  return (
    <div className={post.post}>
      <img src= {props.img} alt='ava'/>
        {props.message}
    <div> <span>♡{props.likeCount}</span></div>
    </div>
  )
}
export default Post;