export interface Track {
  title: string;
  length?: string;
}

export interface Album {
  id: number;
  artist: string;
  title: string;
  year?: string | number;
  tracks: Track[];
}