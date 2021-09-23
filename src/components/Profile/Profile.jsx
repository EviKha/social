import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
const Profile = (props) => {
  return (
    <div>
      <MyProfile />
      <MyPosts posts = {props.state.posts} addPost={props.addPost}/>
    </div>
  )
}
export default Profile;