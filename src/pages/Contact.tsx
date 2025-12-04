import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-condensed uppercase tracking-wider mb-8">
            Get in Touch
          </h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              To contact me, please use the email below:
            </p>
            
            <div className="space-y-4 pt-6">
              <div>
                <h2 className="text-foreground font-medium mb-2">Email</h2>
                <a href="mailto:shayan.fl94@gmail.com" className="text-accent hover:underline">
                  shayan.fl94@gmail.com
                </a>
              </div>
              
              <div>
                <h2 className="text-foreground font-medium mb-2">Social</h2>
                <div className="flex gap-4">
                  <a href="https://instagram.com/framesbyshayan" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
