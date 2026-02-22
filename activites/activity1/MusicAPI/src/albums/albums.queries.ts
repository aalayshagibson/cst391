export const AlbumsQueries = {

  readAll: `
    SELECT albumId, title, artist, releaseDate
    FROM album
    ORDER BY albumId;
  `,

 
  readById: `
    SELECT albumId, title, artist, releaseDate
    FROM album
    WHERE albumId = ?;
  `,

 
  createAlbum: `
    INSERT INTO album (title, artist, releaseDate)
    VALUES (?, ?, ?);
  `,

  
  updateAlbum: `
    UPDATE album
    SET title = ?, artist = ?, releaseDate = ?
    WHERE albumId = ?;
  `,

 
  deleteAlbum: `
    DELETE FROM album
    WHERE albumId = ?;
  `
};