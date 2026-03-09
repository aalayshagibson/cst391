import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Musicapp-updated';

  constructor(private router: Router) {}

  displayArtistList(): void {
    this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
  }

  displayVersion(): void {
    alert(
      "Hello! This is my About Me page. My name is Aalaysha Gibson. I will be a software developer and I love GCU!"
    );
  }
}