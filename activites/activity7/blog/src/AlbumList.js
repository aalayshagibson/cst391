import React from 'react';
import AlbumCard from './AlbumCard';

function AlbumList({ albumList, onSelectAlbum, onEditAlbum, onDeleteAlbum }) {
  return (
    <div>
      <h2>Album List</h2>
      {albumList.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          onSelectAlbum={onSelectAlbum}
          onEditAlbum={onEditAlbum}
          onDeleteAlbum={onDeleteAlbum}
        />
      ))}
    </div>
  );
}

export default AlbumList;