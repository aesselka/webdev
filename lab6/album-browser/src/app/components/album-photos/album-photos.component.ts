import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
