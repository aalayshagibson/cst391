import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from '../../models/artists.model';
import { Album } from '../../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private host = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(`${this.host}/artists`)
      .subscribe((data) => {
        callback(data);
      });
  }

  public getAlbums(artist: string, callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(`${this.host}/albums`)
      .subscribe((data) => {
        const filteredAlbums = data.filter(a => a.artist === artist);
        callback(filteredAlbums);
      });
  }

  public getAlbum(artist: string, id: number, callback: (album: Album | null) => void): void {
    this.http.get<Album[]>(`${this.host}/albums`)
      .subscribe((data) => {
        const foundAlbum = data.find(a => a.artist === artist && a.id === id) ?? null;
        callback(foundAlbum);
      });
  }

  public createAlbum(album: Album, callback: (result: number) => void): void {
    this.http.post<any>(`${this.host}/albums`, album)
      .subscribe({
        next: () => callback(album.id),
        error: () => callback(-1)
      });
  }

  public updateAlbum(album: Album, callback: (result: number) => void): void {
    this.http.put<any>(`${this.host}/albums/${album.id}`, album)
      .subscribe({
        next: () => callback(0),
        error: () => callback(-1)
      });
  }

  public deleteAlbum(id: number, callback: (result: number) => void): void {
    this.http.delete<any>(`${this.host}/albums/${id}`)
      .subscribe({
        next: () => callback(0),
        error: () => callback(-1)
      });
  }
}