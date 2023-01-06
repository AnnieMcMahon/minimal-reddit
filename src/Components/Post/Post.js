import React from 'react';
import './Post.css';
export class Post extends React.Component {
    render() {
        return (
            <div className="Post">
                <div className="Post-information">
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.content}</p>
                    <p>{this.props.post.comments}</p>
                </div>
            </div>
        )
    }
};
