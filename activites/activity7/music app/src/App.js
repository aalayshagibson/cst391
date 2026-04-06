import React, { useState } from 'react';
import AlbumList from './AlbumList';
import OneAlbum from './OneAlbum';
import NewAlbum from './NewAlbum';
import EditAlbum from './EditAlbum';

function App() {
  const [albumList, setAlbumList] = useState([
    {
      id: 1,
      title: '4',
      artist: 'Beyonce',
      year: '2011',
      image: 'https://via.placeholder.com/200',
      tracks: [
        {
          id: 1,
          title: 'Love on Top',
          lyrics: 'Bring the beat in...',
          video: 'https://www.youtube.com/embed/Ob7vObnFUJc'
        },
        {
          id: 2,
          title: 'Countdown',
          lyrics: 'Boy, oh, killing me softly...',
          video: 'https://www.youtube.com/embed/2XY3AvVgDns'
        }
      ]
    },
    {
      id: 2,
      title: 'Reasonable Doubt',
      artist: 'Jay-Z',
      year: '1996',
      image: 'https://via.placeholder.com/200',
      tracks: [
        {
          id: 1,
          title: 'Can’t Knock the Hustle',
          lyrics: 'I’m making short-term goals...',
          video: 'https://www.youtube.com/embed/ix1fPQQplD0'
        },
        {
          id: 2,
          title: 'Dead Presidents II',
          lyrics: 'I’m out for presidents to represent me...',
          video: 'https://www.youtube.com/embed/gUhRKVIjJtw'
        }
      ]
    }
  ]);

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [view, setView] = useState('list');

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    setView('show');
  };

  const handleShowNewAlbum = () => {
    setView('new');
  };

  const handleShowEditAlbum = (album) => {
    setSelectedAlbum(album);
    setView('edit');
  };

  const handleAddAlbum = (newAlbum) => {
    const albumToAdd = {
      ...newAlbum,
      id: albumList.length + 1,
      tracks: []
    };
    setAlbumList([...albumList, albumToAdd]);
    setView('list');
  };

  const handleUpdateAlbum = (updatedAlbum) => {
    const updatedList = albumList.map((album) =>
      album.id === updatedAlbum.id ? updatedAlbum : album
    );
    setAlbumList(updatedList);
    setSelectedAlbum(updatedAlbum);
    setView('list');
  };

  const handleDeleteAlbum = (id) => {
    const updatedList = albumList.filter((album) => album.id !== id);
    setAlbumList(updatedList);
    setSelectedAlbum(null);
    setView('list');
  };

  return (
    <div className="container">
      <h1>Music App</h1>

      <nav>
        <button onClick={() => setView('list')}>Home</button>
        <button onClick={handleShowNewAlbum}>New Album</button>
      </nav>

      {view === 'list' && (
        <AlbumList
          albumList={albumList}
          onSelectAlbum={handleSelectAlbum}
          onEditAlbum={handleShowEditAlbum}
          onDeleteAlbum={handleDeleteAlbum}
        />
      )}

      {view === 'show' && selectedAlbum && (
        <OneAlbum album={selectedAlbum} />
      )}

      {view === 'new' && (
        <NewAlbum onAddAlbum={handleAddAlbum} />
      )}

      {view === 'edit' && selectedAlbum && (
        <EditAlbum
          album={selectedAlbum}
          onUpdateAlbum={handleUpdateAlbum}
        />
      )}
    </div>
  );
}

export default App;