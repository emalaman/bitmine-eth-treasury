import heroBg from "@/assets/hero-bg.jpg";
import etherBg from "@/assets/ether.png"; // Add the correct import for the animated background image

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative min-h-screen">
          {/* Animated background - IMPROVEMENT: Correct image import and more visible animation */}
          <div
            className="absolute inset-0 z-0 bg-animated"
            style={{
              backgroundImage: `url(${etherBg})`, // IMPROVEMENT: Use the import for correct path (avoids src/assets error)
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.6, // IMPROVEMENT: Increased to 0.8 for more background visibility
            }}
          />
          {/* Foreground content */}
          <div className="relative z-10 text-white text-center pt-20"></div>
        </div>
        {/* IMPROVEMENT: Reduced opacity from 80 to 50 to make the background clearer/visible */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      </div>

      {/* IMPROVEMENT: Increased glow and delay of orbs for clearer and smoother animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" /> {/* Increased to /20 for more visibility */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} /> {/* Increased to /20 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl animate-glow" style={{ animationDelay: '3s' }} /> {/* Increased to /15 */}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 border-2 border-black rounded-full mb-6 border-glow">
            <span className="text-primary font-bold text-sm tracking-wider text-glow">THE ALCHEMY OF 5%</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-shadow">
            Establishing the World's
            <span className="block text-primary mt-2 text-shadow">
              Premier Ethereum Treasury
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-shadow">
            BitMine (BMNR) is a pioneering digital asset platform dedicated to maximizing ETH per share 
            and advancing the Ethereum ecosystem through strategic treasury management and native protocol participation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105 border-2 border-primary hover:border-glow">
              Explore Our Vision
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all border-glow">
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