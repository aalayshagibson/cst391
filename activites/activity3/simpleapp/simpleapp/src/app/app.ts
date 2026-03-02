import { Component } from '@angular/core';
import { ShopComponent } from './shop/shop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}