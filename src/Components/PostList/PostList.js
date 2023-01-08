import React from 'react';
import './PostList.css';
import { Post } from '../Post/Post';
export class PostList extends React.Component {
  render() {
    return (
      <div className="PostList">
        {
          this.props.posts.map(post => {
            return <Post post={post} key={post.id}/>
          })
        }
      </div>
    )
  }
};
