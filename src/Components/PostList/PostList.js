import React from 'react';
import './PostList.css';
import { Post } from '../Post/Post';
export const PostList = ({posts}) => {
  return (
    <div className="PostList">
      {
        posts.map(post => {
          return <Post post={post} key={post.id} />
        })
      }
    </div>
  )
}
