import { execute } from "../services/mysql.connector";
import { Album } from "./albums.model.js";

export const AlbumDao = {
  readAlbums: async (): Promise<Album[]> => {
    return execute<Album[]>("SELECT * FROM album");
  },

  readAlbumsByAlbumId: async (id: number): Promise<Album[]> => {
    return execute<Album[]>("SELECT * FROM album WHERE albumId = ?", [id]);
  }
};