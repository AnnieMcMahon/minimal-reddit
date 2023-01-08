import React from 'react';
import './Post.css';
export function Post(props) {
        return (
            <div className="Post">
                <div className="Post-information">
                    <h3>{props.post.title}</h3>
                    <a href={props.post.url} target="_blank" rel="noreferrer">link</a>
                </div>
            </div>
        )
    }
