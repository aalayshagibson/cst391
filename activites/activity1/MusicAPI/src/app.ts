import express from "express";
import albumsRouter from "./albums/albums.routes";
import artistsRouter from "./artists/artists.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use("/albums", albumsRouter);
app.use("/artists", artistsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});