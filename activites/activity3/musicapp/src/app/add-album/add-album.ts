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

    this.musicService.createAlbum(this.album, (response) => {

      this.message = 'Album added successfully!';
      console.log(response);

      this.album = {
        title: '',
        artist: '',
        year: '',
        tracks: []
      };

    });

  }

}