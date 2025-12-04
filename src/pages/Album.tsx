import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PhotoCard from "@/components/PhotoCard";
import Pagination from "@/components/Pagination";
import { getAlbumById, getPhotosByAlbumId } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";

const PHOTOS_PER_PAGE = 25;

const Album = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  const album = albumId ? getAlbumById(albumId) : null;
  const allPhotos = albumId ? getPhotosByAlbumId(albumId) : [];
  
  const totalPages = Math.ceil(allPhotos.length / PHOTOS_PER_PAGE);
  const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const displayedPhotos = allPhotos.slice(startIndex, startIndex + PHOTOS_PER_PAGE);

  if (!album) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-condensed mb-4">Album not found</h1>
          <Link to="/" className="text-accent hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to albums
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-condensed uppercase tracking-wider mb-4">
            {album.title}
          </h1>
          <p className="text-muted-foreground">
            {allPhotos.length} {allPhotos.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
};

export default Album;
