import { Quote } from "lucide-react";

export const ChairmanSection = () => {
  return (
    <section id="chairman" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Chairman's <span className="text-primary text-glow">Message</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow" />
          </div>

          <div className="bg-background border border-primary/30 rounded-2xl p-12 relative animate-fade-in border-glow">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/20" />
            <Quote className="absolute bottom-8 right-8 w-16 h-16 text-primary/20 rotate-180" />
            
            <div className="relative space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-2xl font-bold text-foreground mb-8">
                Dear Shareholders and Partners,
              </p>

              <p>
                The financial landscape is undergoing a fundamental transformation. Ethereum, 
                as the world's leading smart contract platform, represents not just technological 
                innovation, but a paradigm shift in how we conceive of value, ownership, and 
                economic coordination.
              </p>

              <p>
                At BitMine, we have positioned ourselves at the forefront of this revolution. 
                Our strategy goes beyond simple asset accumulation—we are active participants 
                in the Ethereum ecosystem, contributing to its security, governance, and growth 
                while maximizing returns for our shareholders.
              </p>

              <p>
                The "Alchemy of 5%" is more than a tagline—it represents our commitment to 
                disciplined, strategic growth. By focusing on native protocol participation 
                and sophisticated treasury management, we're building sustainable value that 
                compounds over time.
              </p>

              <p>
                As we look to the future, I am confident that our approach will continue to 
                deliver exceptional results. We remain committed to transparency, innovation, 
                and the long-term success of both BitMine and the broader Ethereum ecosystem.
              </p>

              <div className="pt-8 mt-8 border-t border-border">
                <p className="text-2xl font-bold text-primary">
                  Together, we are shaping the future of digital finance.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 border-2 border-primary rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">B</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">Chairman & CEO</p>
                  <p className="text-foreground/60">BitMine Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
