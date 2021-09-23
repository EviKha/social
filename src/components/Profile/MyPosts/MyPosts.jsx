import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {


  let postItems = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} img={p.img} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost();
    props.updateNewPostText('');
  }
  let postOnChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div className={st.postBlock}>
      <h3> My posts</h3>
      <div>
        <textarea ref={newPostElement} onChange = {postOnChange} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add</button>
      </div>
      < div className={st.posts}>
        {postItems}
      </div>
    </div>
  )
}
export default MyPosts;