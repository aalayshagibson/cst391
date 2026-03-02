import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicServiceService } from '../service/service/music-service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { DisplayAlbumComponent } from '../display-album/display-album';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, DisplayAlbumComponent],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbumsComponent implements OnInit {
  @Input() artist!: Artist;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.albums = this.service.getAlbums(this.artist.artist);
    this.selectedAlbum = null;
  }

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}
