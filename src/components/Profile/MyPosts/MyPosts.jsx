import React from 'react';
import myposts from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          New posts
        </div>
        <Post message = 'Hi! You have!' likeCount = '100'/>
        <Post message = 'Turn it up!' likeCount = '10050505'/>
      </div>
    )
}
export default MyPosts;