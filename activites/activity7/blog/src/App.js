import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
  {
    postNumber: 1,
    postText: 'Olaplex really saved my natural hair. My curls were dry, damaged, and breaking off. After using it, my hair feels soft and strong again.'
  },
  {
    postNumber: 2,
    postText: 'My curls finally have definition again. I went from dryness and no shape to shiny, healthy curls. Detangling is much easier now.'
  },
  {
    postNumber: 3,
    postText: 'If you have natural hair and are dealing with breakage, do not give up. Olaplex helped repair my hair and brought it back to life.'
  },
  {
    postNumber: 4,
    postText: 'Consistency is important. I stayed patient with my routine and now my hair is stronger, longer, and healthier with every wash day.'
  }
]);

  const [postId, setPostId] = useState(5);

  const handleDeletePost = (id) => {
    const updatedPostList = postList.filter((post) => post.postNumber !== id);
    setPostList(updatedPostList);
  };

  const handleAddPost = (text) => {
    if (text.trim() === '') {
      return;
    }

    const newPost = {
      postNumber: postId,
      postText: text
    };

    setPostList((currentList) => [...currentList, newPost]);
    setPostId(postId + 1);
  };

  const posts = postList.map((post) => (
    <Post
      key={post.postNumber}
      postNumber={post.postNumber}
      postText={post.postText}
      onDelete={handleDeletePost}
    />
  ));

  return (
    <div className="container">
      <h1>My Blog Posts</h1>
      {posts}
      <AddPost onAddPost={handleAddPost} />
    </div>
  );
}

export default App;