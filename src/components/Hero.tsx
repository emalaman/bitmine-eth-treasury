import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Establishing the World's
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Premier Ethereum Treasury
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BitMine (BMNR) is a pioneering digital asset platform dedicated to maximizing ETH per share 
            and advancing the Ethereum ecosystem through strategic treasury management and native protocol participation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Explore Our Vision
            </button>
            <button className="px-8 py-4 border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all">
              View Investor Relations
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
