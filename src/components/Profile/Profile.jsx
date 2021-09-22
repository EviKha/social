import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
const Profile = (props) => {
  return (
    <div>
      <MyProfile />
      <MyPosts postData = {props.postData} />
    </div>
  )
}
export default Profile;