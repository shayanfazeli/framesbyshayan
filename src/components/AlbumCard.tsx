import { Link } from "react-router-dom";
import { Album, getPhotoCountForAlbum } from "@/data/portfolio";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  const photoCount = getPhotoCountForAlbum(album.id);
  
  return (
    <Link 
      to={`/album/${album.id}`}
      className="group block relative overflow-hidden bg-card aspect-[3/4]"
    >
      <img
        src={album.coverPhotoUrl}
        alt={album.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-condensed uppercase tracking-wider mb-2">
            {album.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
