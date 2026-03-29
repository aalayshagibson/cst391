import React, { useState } from 'react';

function EditAlbum({ album, onUpdateAlbum }) {
  const [title, setTitle] = useState(album.title);
  const [artist, setArtist] = useState(album.artist);
  const [year, setYear] = useState(album.year);
  const [image, setImage] = useState(album.image);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedAlbum = {
      ...album,
      title,
      artist,
      year,
      image
    };

    onUpdateAlbum(updatedAlbum);
  };

  return (
    <div>
      <h2>Edit Album</h2>
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

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditAlbum;