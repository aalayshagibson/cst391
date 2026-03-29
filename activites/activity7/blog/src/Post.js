import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <div className="post">
      <h2>Post #{props.postNumber}</h2>
      <p>{props.postText}</p>
      <button onClick={() => props.onDelete(props.postNumber)}>Delete</button>
    </div>
  );
}

export default Post;