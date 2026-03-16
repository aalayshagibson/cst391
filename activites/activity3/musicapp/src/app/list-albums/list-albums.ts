import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicServiceService } from '../service/service/music-service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbumsComponent implements OnInit, OnChanges {

  @Input() artist: Artist | null = null;

  albums: Album[] = [];

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['artist']) {
      this.loadAlbums();
    }
  }

  loadAlbums(): void {

    if (this.artist && this.artist.artist) {

      console.log('Loading albums for:', this.artist.artist);

      this.service.getAlbums(this.artist.artist, (albums: Album[]) => {
        this.albums = albums;
      });

    } else {
      this.albums = [];
    }

  }

}