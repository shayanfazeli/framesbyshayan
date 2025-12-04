import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { getPhotoById, getPhotosByAlbumId } from "@/data/portfolio";
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const PhotoDetail = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const navigate = useNavigate();
  
  const photo = photoId ? getPhotoById(photoId) : null;
  const albumPhotos = photo ? getPhotosByAlbumId(photo.albumId) : [];
  
  const currentIndex = albumPhotos.findIndex(p => p.id === photoId);
  const prevPhoto = currentIndex > 0 ? albumPhotos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < albumPhotos.length - 1 ? albumPhotos[currentIndex + 1] : null;

  if (!photo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-condensed mb-4">Photo not found</h1>
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
          to={`/album/${photo.albumId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to album
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full rounded-sm"
            />
            
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => prevPhoto && navigate(`/photo/${prevPhoto.id}`)}
                disabled={!prevPhoto}
                className="hover:bg-muted"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {albumPhotos.length}
              </span>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => nextPhoto && navigate(`/photo/${nextPhoto.id}`)}
                disabled={!nextPhoto}
                className="hover:bg-muted"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="lg:sticky lg:top-32">
            <h1 className="text-3xl md:text-4xl font-condensed uppercase tracking-wider mb-6">
              {photo.title}
            </h1>
            
            <div className="flex items-center gap-2 mb-6 text-accent">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">
                {format(photo.date, "MMMM d, yyyy")}
              </span>
            </div>
            
            {photo.description && (
              <p className="text-muted-foreground leading-relaxed">
                {photo.description}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhotoDetail;
