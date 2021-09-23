import React from 'react';
import post from './Post.module.css'
const Post = (props) => {
  return (
    <div className={post.post}>
      <img src= {props.img} />
        {props.message}
    <div> <span>♡{props.likeCount}</span></div>
    </div>
  )
}
export default Post;