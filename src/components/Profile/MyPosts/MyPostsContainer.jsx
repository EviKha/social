import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState();
  let addPostContainer = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let postOnChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  return (
    <MyPosts
      updateNewPost={postOnChange}
      addPost={addPostContainer}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText} />
  )
}
export default MyPostsContainer;