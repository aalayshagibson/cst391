import express from "express";
import albumsRouter from "./albums/albums.routes.js";
import artistsRouter from "./artists/artists.routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use("/albums", albumsRouter);
app.use("/artists", artistsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});