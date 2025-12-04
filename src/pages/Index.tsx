import Navigation from "@/components/Navigation";
import AlbumCard from "@/components/AlbumCard";
import { albums } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-condensed uppercase tracking-wider mb-4">
            Frames by Shayan
          </h2>
          <p className="text-muted-foreground">
            Moments captured through my lens as an aspiring photographer
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
