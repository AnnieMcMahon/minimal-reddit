import React from 'react';
import './Post.css';
export const Post = ({post}) => {
  return (
    <div className="Post">
      <div className="Post-information">
        <h3>{post.title}</h3>
        <a href={post.url} target="_blank" rel="noreferrer">link</a>
      </div>
    </div>
  )
}


