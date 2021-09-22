import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {


  let postItems = props.postData.map(p => <Post message={p.message} likeCount={p.likeCount} />)

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
       {postItems}
      </div>
    </div>
  )
}
export default MyPosts;