import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
const Profile = (props) => {
  return (
    <div>
      <MyProfile />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
    </div>
  )
}
export default Profile;