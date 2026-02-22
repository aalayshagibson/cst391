import { Request, Response } from "express";
import { AlbumDao } from "./albums.dao";

export const AlbumsController = {
  readAlbums: async (req: Request, res: Response) => {
    try {
      const albumId = parseInt(req.query.albumId as string);
      let albums;

      if (Number.isNaN(albumId)) {
        albums = await AlbumDao.readAlbums();
      } else {
        albums = await AlbumDao.readAlbumsByAlbumId(albumId);
      }

      res.json(albums);
    } catch (err) {
      res.status(500).json({ error: "Database error", details: err });
    }
  }
};