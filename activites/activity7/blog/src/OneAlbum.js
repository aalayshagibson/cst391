import React, { useState } from 'react';
import TrackList from './TrackList';
import Lyrics from './Lyrics';
import Video from './Video';

function OneAlbum({ album }) {
  const [selectedTrack, setSelectedTrack] = useState(
    album.tracks.length > 0 ? album.tracks[0] : null
  );

  return (
    <div>
      <h2>{album.title}</h2>
      <p><strong>Artist:</strong> {album.artist}</p>
      <p><strong>Year:</strong> {album.year}</p>
      <img src={album.image} alt={album.title} width="250" />

      <TrackList tracks={album.tracks} onSelectTrack={setSelectedTrack} />
      <Lyrics track={selectedTrack} />
      <Video track={selectedTrack} />
    </div>
  );
}

export default OneAlbum;