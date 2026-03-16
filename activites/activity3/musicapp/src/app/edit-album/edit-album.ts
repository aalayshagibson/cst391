import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MusicServiceService } from '../service/service/music-service';

@Component({
  selector: 'app-edit-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-album.html',
  styleUrl: './edit-album.css'
})
export class EditAlbum implements OnInit {

  album: any = null;
  albumId: number = 0;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicServiceService
  ) {}

  ngOnInit(): void {

    this.albumId = Number(this.route.snapshot.paramMap.get('albumId'));

    this.musicService.getAlbum(this.albumId, (album) => {
      this.album = album;
    });

  }

  saveAlbum(): void {

    this.musicService.updateAlbum(this.albumId, this.album, (response) => {

      this.message = 'Album updated successfully';
      console.log(response);

    });

  }

}
