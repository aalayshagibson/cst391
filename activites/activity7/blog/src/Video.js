import React from 'react';

function Video({ track }) {
  if (!track) {
    return <p>No video selected.</p>;
  }

  return (
    <div>
      <h3>Video</h3>
      <iframe
        width="420"
        height="250"
        src={track.video}
        title={track.title}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;