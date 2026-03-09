import { Routes } from '@angular/router';

import { CreateAlbum } from './create-album/create-album';
import { AddAlbum } from './add-album/add-album';
import { ListArtistsComponent } from './list-artists/list-artists';
import { ListAlbumsComponent } from './list-albums/list-albums';
import { DisplayAlbumComponent } from './display-album/display-album';
import { EditAlbum } from './edit-album/edit-album';
import { DeleteAlbum } from './delete-album/delete-album';

export const routes: Routes = [
  { path: '', redirectTo: 'list-artists', pathMatch: 'full' },

  { path: 'list-artists', component: ListArtistsComponent },
  { path: 'list-albums', component: ListAlbumsComponent },

  { path: 'create', component: CreateAlbum },
  { path: 'add-album', component: AddAlbum },

  { path: 'display/:id', component: DisplayAlbumComponent },

  { path: 'edit/:artist/:id', component: EditAlbum },
  { path: 'edit-album/:albumId', component: EditAlbum },

  { path: 'delete/:artist/:id', component: DeleteAlbum },
  { path: 'delete-album/:albumId', component: DeleteAlbum },

  { path: '**', redirectTo: 'list-artists' }
];