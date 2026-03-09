import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MusicServiceService } from '../service/service/music-service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { DisplayAlbumComponent } from '../display-album/display-album';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, DisplayAlbumComponent],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbumsComponent implements OnInit, OnChanges {
  @Input() artist!: Artist;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.loadAlbums();
    this.selectedAlbum = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['artist']) {
      this.loadAlbums();
      this.selectedAlbum = null;
    }
  }

  loadAlbums(): void {
    if (this.artist && this.artist.artist) {
      this.service.getAlbums(this.artist.artist, (albums: Album[]) => {
        this.albums = albums;
      });
    } else {
      this.albums = [];
    }
  }

  onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}