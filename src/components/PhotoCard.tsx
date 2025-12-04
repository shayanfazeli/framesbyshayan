import { Link } from "react-router-dom";
import { Photo } from "@/data/portfolio";
import { format } from "date-fns";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Link 
      to={`/photo/${photo.id}`}
      className="group block relative overflow-hidden bg-card aspect-square"
    >
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <h3 className="text-lg font-medium mb-1">
            {photo.title}
          </h3>
          <p className="text-xs text-accent">
            {format(photo.date, "MMM d, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
