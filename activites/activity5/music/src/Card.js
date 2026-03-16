import React from "react";

function Card(props) {
  return (
    <div className="card">

      <img
        src={props.imgURL}
        alt={props.albumTitle}
        className="album-img"
      />

      <h3>{props.albumTitle}</h3>

      <p>{props.albumDescription}</p>

      <button>{props.buttonText}</button>

    </div>
  );
}

export default Card;