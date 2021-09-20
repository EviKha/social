import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div className={st.postBlock}>
      <h3> My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add</button>
      </div>
      < div className={st.posts}>
        <Post message='Hi! You have!' likeCount='100' />
        <Post message='Turn it up!' likeCount='10050505' />
      </div>
    </div>
  )
}
export default MyPosts;