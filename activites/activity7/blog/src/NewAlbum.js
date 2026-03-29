import React, { useState } from 'react';

function NewAlbum({ onAddAlbum }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAlbum = {
      title,
      artist,
      year,
      image
    };

    onAddAlbum(newAlbum);

    setTitle('');
    setArtist('');
    setYear('');
    setImage('');
  };

  return (
    <div>
      <h2>Create New Album</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Album Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Artist:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Year:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit">Add Album</button>
      </form>
    </div>
  );
}

export default NewAlbum;