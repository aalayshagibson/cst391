import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MusicServiceService } from '../service/service/music-service';
import { Artist } from '../models/artists.model';
import { ListAlbumsComponent } from '../list-albums/list-albums';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, ListAlbumsComponent],
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css'
})
export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.service.getArtists((artists: Artist[]) => {
        this.artists = artists;
      });
      this.selectedArtist = null;
    });
  }

  onSelectArtist(artist: Artist): void {
    this.selectedArtist = artist;
  }
}