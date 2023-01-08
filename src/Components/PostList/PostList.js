import React from 'react';
import './PostList.css';
import { Post } from '../Post/Post';
export function PostList(props) {
    return (
      <div className="PostList">
        {
          props.posts.map(post => {
            return <Post post={post} key={post.id}/>
          })
        }
      </div>
    )
  }
