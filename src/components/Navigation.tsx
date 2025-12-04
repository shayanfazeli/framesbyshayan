import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link 
              to="/contact" 
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
          
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl font-condensed uppercase tracking-widest">
              Shayan Fazeli
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
