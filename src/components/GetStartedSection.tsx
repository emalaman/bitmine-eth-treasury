import { Video, TrendingUp, BarChart3 } from "lucide-react"; 


export const GetStartedSection = () => {
  return (
    <section id="get-started" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary text-glow">The Alchemy of 5%</span>
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            Discover BitMine's visionary strategy to transform Ethereum into the cornerstone of institutional finance.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow" />
        </div>

        {/* Vision Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Bold Vision</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At BitMine Immersion Technologies, we've pioneered the "Alchemy of 5%" – an audacious strategy to acquire and hold 5% of the total Ethereum (ETH) supply. This isn't just accumulation; it's alchemy: turning disciplined capital deployment into exponential value creation for our shareholders.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Led by Chairman Thomas "Tom" Lee, with over 30 years of Wall Street expertise, our approach leverages the power law dynamics of cryptocurrency networks. As Ethereum evolves into the financial backbone of the AI era – powering decentralized finance, smart contracts, and institutional-grade infrastructure – large-scale holders like BitMine will capture outsized benefits from network effects and adoption.
            </p>
            <ul className="space-y-2 text-foreground/70 mt-6">
              <li className="flex items-center">
                • <span className="ml-2">Target: 5% of ETH's ~120M circulating supply (~6M ETH)</span>
              </li>
              <li className="flex items-center">
                • <span className="ml-2">Current Holdings: Over 2.65M ETH, valued at $11.6B+ in crypto, cash, and moonshots</span>
              </li>
              <li className="flex items-center">
                • <span className="ml-2">Strategy: Strategic purchases, $365M capital raise, and $913M in warrants</span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#investor"
                className="inline-flex items-center px-6 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-all border-2 border-primary hover:border-glow"
              >
                Explore Investor Relations
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Video Embed */}
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/WCoVxOVKav4?rel=0"
                title="BitMine Chairman's Message: The Alchemy of 5%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-sm text-foreground/60 mt-4 text-center">
              Watch Tom Lee explain the Alchemy of 5% (Recorded August 31, 2025)
            </p>
          </div>
        </div>

        {/* Key Pillars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">The Pillars of Our Alchemy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-primary/30 rounded-2xl p-6 text-center hover:border-primary/50 transition-all animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Institutional Adoption</h3>
              <p className="text-foreground/70">
                Ethereum's role in DeFi, NFTs, and AI will drive exponential growth. We're positioning BitMine at the forefront.
              </p>
            </div>
            <div className="bg-card border border-primary/30 rounded-2xl p-6 text-center hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <TrendingUp className="w-8 h-8 text-primary" /> {/* Assume import if needed */}
              </div>
              <h3 className="text-xl font-bold mb-3">Power Law Benefits</h3>
              <p className="text-foreground/70">
                Large holders capture disproportionate rewards from network effects. Our 5% stake ensures long-term alpha.
              </p>
            </div>
            <div className="bg-card border border-primary/30 rounded-2xl p-6 text-center hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <BarChart3 className="w-8 h-8 text-primary" /> {/* Assume import if needed */}
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
              <p className="text-foreground/70">
                Through disciplined ETH accumulation and native protocol participation, we're building a resilient treasury platform.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Join the Alchemy?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Become part of the Ethereum revolution. Invest in the future of digital assets with BitMine.
          </p>
          <div className="space-x-4">
            <a
              href="#investor"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-all border-2 border-primary hover:border-glow inline-block"
            >
              Get Started with BMNR
            </a>
            <a
              href="mailto:ir@bitminetech.io"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all inline-block"
            >
              Contact IR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};