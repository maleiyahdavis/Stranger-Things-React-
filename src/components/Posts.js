import React from 'react';
import { getPosts } from '../api';

function Posts({allPosts}) {
 
  return (
    <div className= "post-main-container">{
        allPosts.map((post)=>{
            return(
                <div key= {post._id} className= "post-card">
                    <h3>{post.title}</h3>
                    <p>Description: {post.description}</p>
                    <p>Price: {post.price}</p>
                </div>
            )
        })}</div>
  )
}

export default Posts;