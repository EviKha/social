import React from 'react';
import st from './MyProfile.module.css'
const MyProfile = () => {
    return (
      <div className={st.content}>
      <div>
        <img src='https://go-pokemon.ru/uploads/posts/2019-06/1561752214_anniversaryposter2019.jpg' />
      </div>
      <div className={st.descriptionBlock}>
        ava + desc
      </div>
    </div>
    )
}
export default MyProfile;