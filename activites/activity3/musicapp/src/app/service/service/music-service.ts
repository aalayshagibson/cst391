import { Injectable } from '@angular/core';

import exampledata from '../../../data/samplemusicdata.json';

import { Artist } from '../../models/artists.model';
import { Album } from '../../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  albums: Album[] = (exampledata as any) as Album[];

  public getArtists(): Artist[] {
    const seen = new Set<string>();
    const artists: Artist[] = [];

    for (const a of this.albums) {
      if (!seen.has(a.artist)) {
        seen.add(a.artist);
        artists.push(new Artist(a.artist));
      }
    }

    return artists.sort((x, y) => x.artist.localeCompare(y.artist));
  }

  public getAlbums(artist: string): Album[] {
    return this.albums.filter(a => a.artist === artist);
  }

  public getAlbum(artist: string, id: number): Album | null {
    return this.albums.find(a => a.artist === artist && a.id === id) ?? null;
  }

  public createAlbum(album: Album): number {
    try {
      this.albums.push(album);
      return album.id;
    } catch {
      return -1;
    }
  }

  public updateAlbum(album: Album): number {
    const index = this.albums.findIndex(a => a.id === album.id && a.artist === album.artist);
    if (index === -1) return -1;

    this.albums.splice(index, 1, album);
    return 0;
  }

  public deleteAlbum(id: number, artist: string): number {
    const index = this.albums.findIndex(a => a.id === id && a.artist === artist);
    if (index === -1) return -1;

    this.albums.splice(index, 1);
    return 0;
  }
}