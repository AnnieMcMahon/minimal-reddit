import React from 'react';
import './Post.css';
export class Post extends React.Component {
    render() {
        return (
            <div className="Post">
                <div className="Post-information">
                    <h3>{this.props.post.title}</h3>
                    <a href={this.props.post.url} target="_blank" rel="noreferrer">link</a>
                </div>
            </div>
        )
    }
};
