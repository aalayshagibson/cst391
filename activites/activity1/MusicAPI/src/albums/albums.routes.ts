import express from "express";
import { AlbumsController } from "./albums.controller";

const router = express.Router();

router.get("/", AlbumsController.readAlbums);

export default router;