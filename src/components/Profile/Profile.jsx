import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyProfile from './MyProfile/MyProfile'
const Profile = (props) => {
  debugger;
  return (
    <div>
      <MyProfile />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  )
}
export default Profile;