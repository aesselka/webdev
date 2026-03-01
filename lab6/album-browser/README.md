# Album Browser — Lab 6

An Angular SPA for browsing photo albums from the JSONPlaceholder API.

## Features
- Browse 100 albums with delete support
- View album details and edit title (PUT)
- Photo grid with hover overlay
- Angular routing, HttpClient, standalone components

## Setup & Run

```bash
cd lab6/album-browser
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200)

## Build

```bash
npm run build
```

## Project Structure

```
src/app/
├── models/
│   ├── album.model.ts
│   └── photo.model.ts
├── services/
│   └── album.service.ts
└── components/
    ├── home/
    ├── about/
    ├── albums/
    ├── album-detail/
    └── album-photos/
```

## Routes

| Path | Component |
|---|---|
| `/` | → redirects to `/home` |
| `/home` | HomeComponent |
| `/about` | AboutComponent |
| `/albums` | AlbumsComponent |
| `/albums/:id` | AlbumDetailComponent |
| `/albums/:id/photos` | AlbumPhotosComponent |

## API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) — mutations are simulated (no persistence).
