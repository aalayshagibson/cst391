import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MusicServiceService } from '../service/service/music-service';

@Component({
  selector: 'app-add-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-album.html',
  styleUrl: './add-album.css'
})
export class AddAlbum {

  album: any = {
    title: '',
    artist: '',
    year: '',
    tracks: []
  };

  message: string = '';

  constructor(private musicService: MusicServiceService) {}

  addAlbum(): void {
    this.musicService.createAlbum(this.album, (result: number) => {
      if (result !== -1) {
        this.message = 'Album added successfully!';

        this.album = {
          title: '',
          artist: '',
          year: '',
          tracks: []
        };
      } else {
        this.message = 'Failed to add album.';
      }

      console.log(result);
    });
  }
}