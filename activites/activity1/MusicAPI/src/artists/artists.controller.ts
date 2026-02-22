import { Request, Response } from "express";
import { execute } from "../services/mysql.connector";

export const ArtistsController = {
  readArtists: async (req: Request, res: Response) => {
    try {
      const artists = await execute<any[]>("SELECT DISTINCT artist FROM album");
      res.json(artists);
    } catch (err) {
      res.status(500).json({ error: "Database error", details: err });
    }
  }
};