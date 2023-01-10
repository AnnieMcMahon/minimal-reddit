import React from 'react';
import './PostList.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "./postSlice";
import { selectSearchParam } from "../Search/searchSlice";

export const PostList = () => {
  const searchParam = useSelector(selectSearchParam);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(searchParam))
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  return (
    <ul className="PostList">
      {
        posts.map((post => (
          <div className="post" key={post.id}>
            <div className="postCategory">
              <p>{post.subreddit_name_prefixed}</p>
            </div>
            <div className="postTitle">
              <h2>{post.title}</h2>
            </div>
            <div className="postMedia">
              {(post.url.includes('i.redd.it')) ?
                <img className='postImage' src={post.url} alt='' /> : null}
              {(post.is_video) ?
                <video className='postVideo' preload="auto" controls>
                  <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                </video> : null}
            </div>
            <div className="footerContainer">
              <div className="footerElement">
                <p>&#128077;</p>
                <p>{post.ups}</p>
              </div>
              <div className="footerElement">
                <p>&#128338;</p>
                <p>Posted {Math.round(((new Date().getTime() / 1000) - post.created_utc) / 3600)} hours ago</p>
              </div>
              <div className="footerElement">
                <p><a href={`https://www.reddit.com/${post.subreddit_name_prefixed}/comments/${post.id}/${post.title}/`} target='_blank' rel="noreferrer">Go to Reddit </a></p>
              </div>
            </div>
          </div>)))
      }
    </ul>
  )
}
