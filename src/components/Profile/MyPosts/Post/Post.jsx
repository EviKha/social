import React from 'react';
import post from './Post.module.css'
const Post = (props) => {
  return (
    <div className={post.post}>
      <img src='https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg' />
        {props.message}
    <div> <span>♡{props.likeCount}</span></div>
    </div>
  )
}
export default Post;