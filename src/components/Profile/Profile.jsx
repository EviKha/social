import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
const Profile = (props) => {
  return (
    <div>
      <MyProfile />
      <MyPosts posts = {props.profilePage.posts} addPost={props.addPost} newPostText = {props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}
export default Profile;