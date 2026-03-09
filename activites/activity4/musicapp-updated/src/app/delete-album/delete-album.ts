import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MusicServiceService } from '../service/service/music-service';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-album.html',
  styleUrl: './delete-album.css'
})
export class DeleteAlbum implements OnInit {

  albumId: number = 0;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicServiceService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('albumId'));
  }

  deleteAlbum(): void {
    this.musicService.deleteAlbum(this.albumId, (result: number) => {

      if (result === 0) {
        this.message = 'Album deleted successfully';
      } else {
        this.message = 'Failed to delete album';
      }

      console.log(result);
    });
  }

}