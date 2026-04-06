import React from 'react';

function Lyrics({ track }) {
  if (!track) {
    return <p>No track selected.</p>;
  }

  return (
    <div>
      <h3>Lyrics</h3>
      <p>{track.lyrics}</p>
    </div>
  );
}

export default Lyrics;