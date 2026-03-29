import React, { useState } from 'react';

function AddPost(props) {
  const [postText, setPostText] = useState('');

  const handleChange = (event) => {
    setPostText(event.target.value);
  };

  const handleClick = () => {
    props.onAddPost(postText);
    setPostText('');
  };

  return (
    <div style={{ width: '60%', margin: '20px auto' }}>
      <h2>Add a New Post</h2>
      <textarea
        rows="4"
        style={{ width: '100%', padding: '10px' }}
        value={postText}
        onChange={handleChange}
        placeholder="Write your new blog post here..."
      ></textarea>
      <br />
      <button
        onClick={handleClick}
        style={{
          marginTop: '10px',
          padding: '10px 16px',
          cursor: 'pointer'
        }}
      >
        Add Post
      </button>
    </div>
  );
}

export default AddPost;