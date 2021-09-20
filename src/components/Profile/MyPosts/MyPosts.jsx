import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {

  let postData = [
    { message: 'Hi! You have!', likeCount: '1000' },
    { message: 'Turn it up!', likeCount: '333' },
  ]
  let postItems = postData.map(p => <Post message={p.message} likeCount={p.likeCount} />)

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