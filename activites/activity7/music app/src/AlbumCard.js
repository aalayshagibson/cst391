import React from 'react';

function AlbumCard({ album, onSelectAlbum, onEditAlbum, onDeleteAlbum }) {
  return (
    <div className="card">
      <img src={album.image} alt={album.title} width="200" />
      <h3>{album.title}</h3>
      <p>{album.artist}</p>
      <p>{album.year}</p>

      <button onClick={() => onSelectAlbum(album)}>View</button>
      <button onClick={() => onEditAlbum(album)}>Edit</button>
      <button onClick={() => onDeleteAlbum(album.id)}>Delete</button>
    </div>
  );
}

export default AlbumCard;