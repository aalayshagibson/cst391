import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/service/music-service';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-album.html',
  styleUrl: './display-album.css'
})
export class DisplayAlbumComponent implements OnInit {

  @Input() artist: string = '';
  @Input() albumId: number = 0;

  album: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {

    if (this.artist && this.albumId) {

      this.service.getAlbum(this.artist, this.albumId, (album: Album | null) => {
        this.album = album;
      });

    }

  }

}