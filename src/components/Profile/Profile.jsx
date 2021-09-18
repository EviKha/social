import React from 'react';
import contents from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
const Profile = () => {
    return (
      <div className={contents.content}>
      <div>
        <img src='https://go-pokemon.ru/uploads/posts/2019-06/1561752214_anniversaryposter2019.jpg' />
      </div>
      <div>
        ava + desc
      </div>
    <MyPosts />
    </div>
    )
}
export default Profile;