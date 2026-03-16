import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

// import images
import ettajames from "./ettajames.png";
import ninasimone from "./ninasimone.png";
import littlerichie from "./littlerichie.png";

function App() {

  const [albumList] = useState([
    {
      albumTitle: "Etta James - All I Could Do Was Cry",
      albumDescription: "A soulful classic song by Etta James.",
      buttonText: "Play Album",
      imgURL: ettajames
    },
    {
      albumTitle: "Nina Simone - Blackbird",
      albumDescription: "A powerful and emotional performance by Nina Simone.",
      buttonText: "Play Album",
      imgURL: ninasimone
    },
    {
      albumTitle: "Little Richard - Tutti Frutti",
      albumDescription: "An energetic rock and roll hit from Little Richard.",
      buttonText: "Play Album",
      imgURL: littlerichie
    }
  ]);

  function renderedList() {
    return albumList.map((album, index) => (
      <Card
        key={index}
        albumTitle={album.albumTitle}
        albumDescription={album.albumDescription}
        buttonText={album.buttonText}
        imgURL={album.imgURL}
      />
    ));
  }

  return (
    <div className="App">
      <h1>Music Album Collection</h1>

      <div className="container">
        {renderedList()}
      </div>

    </div>
  );
}

export default App;