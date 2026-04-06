import React from 'react';

function TrackList({ tracks, onSelectTrack }) {
  return (
    <div>
      <h3>Tracks</h3>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <button onClick={() => onSelectTrack(track)}>
              {track.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;