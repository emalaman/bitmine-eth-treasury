import { Target, Zap, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To establish the world's premier Ethereum treasury while maximizing long-term value for our shareholders through strategic asset management.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pioneering new approaches to digital asset treasury management and blockchain ecosystem participation.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Focused on sustainable growth through strategic Ethereum accumulation and native protocol engagement.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building trust with our investors and contributing positively to the global Ethereum community.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary text-glow">BitMine</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            BitMine (BMNR) represents a new paradigm in digital asset management. We are committed to 
            building the most robust Ethereum treasury in the world, combining institutional-grade 
            financial expertise with deep blockchain protocol understanding.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 animate-fade-in hover:border-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-primary/30 rounded-2xl p-12 text-center border-glow">
          <h3 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h3>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            We believe in transparency, strategic innovation, and long-term value creation. 
            By participating directly in Ethereum's native protocols and maintaining a disciplined 
            treasury strategy, we're positioned to deliver sustained growth while strengthening 
            the entire Ethereum ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};
