// Portfolio data structure
export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  albumId: string;
  date: Date;
}

export interface Album {
  id: string;
  title: string;
  coverPhotoUrl: string;
}

// Sample data - replace with your actual photos
export const albums: Album[] = [
  {
    id: "urban-life",
    title: "A Slice of Urban Life",
    coverPhotoUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=1000&fit=crop",
  },
  {
    id: "portraits",
    title: "Portraits",
    coverPhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
  },
  {
    id: "architecture",
    title: "Architecture",
    coverPhotoUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=1000&fit=crop",
  },
  {
    id: "nature",
    title: "Nature",
    coverPhotoUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1000&fit=crop",
  }
];

// Generate sample photos for each album
// export const photos: Photo[] = albums.flatMap((album) => {
//   return Array.from({ length: album.photoCount }, (_, i) => {
//     // Generate dates spanning a few months before the album date
//     const albumDate = new Date(album.date);
//     const daysOffset = Math.floor(Math.random() * 90); // Random day within 3 months
//     const photoDate = new Date(albumDate);
//     photoDate.setDate(photoDate.getDate() - daysOffset);
    
//     return {
//       id: `${album.id}-${i + 1}`,
//       title: `${album.title} ${i + 1}`,
//       description: `A captivating photograph from the ${album.title} collection. This image captures a unique moment in time.`,
//       imageUrl: `${album.coverPhotoUrl}&sig=${i}`,
//       albumId: album.id,
//       date: photoDate,
//     };
//   });
// });


export const RAW_BASE_URL = "https://raw.githubusercontent.com/shayanfazeli/framesbyshayan/refs/heads/main/portfolio_data";

export const photos: Photo[] = [
  // ALBUM: a slice of urban life 
  {
    id: "goingToSproutsAtGoldenTime-20251009-183334",
    title: "Photo Title",
    description: "Saw a big flock of birds flying over the neighborhood, as we were finishing up our groceries at Sprouts. So, figured I'd pick up my camera and try to capture these rare moments.",
    imageUrl: `${RAW_BASE_URL}/a_slice_of_urban_life/goingToSproutsAtGoldenTime-20251009-183334.JPG?w=800&h=1000&fit=crop`,
    albumId: "urban-life", // must match album id
    date: new Date("2025-10-09"),
  },
  // ... more photos
];

export const getAlbumById = (id: string) => albums.find((a) => a.id === id);
export const getPhotosByAlbumId = (albumId: string) => photos.filter((p) => p.albumId === albumId);
export const getPhotoById = (id: string) => photos.find((p) => p.id === id);
export const getPhotoCountForAlbum = (albumId: string) => getPhotosByAlbumId(albumId).length;
