import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.loading = false;
      }
    });
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: () => alert('Failed to delete album.')
    });
  }
}
