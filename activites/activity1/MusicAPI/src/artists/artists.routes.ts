import express from "express";
import { ArtistsController } from "./artists.controller.js";

const router = express.Router();

router.get("/", ArtistsController.readArtists);

export default router;