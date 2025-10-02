import { Shield, TrendingUp, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "Reinforcing the resilience of the global Ethereum network through strategic participation",
  },
  {
    icon: TrendingUp,
    title: "Shareholder Value",
    description: "Maximizing ETH per share through sophisticated treasury management strategies",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Contributing to the security and growth of the worldwide Ethereum ecosystem",
  },
  {
    icon: Lock,
    title: "Long-term Vision",
    description: "Strategic approach focused on sustainable growth and ecosystem advancement",
  },
];

export const EthereumSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Securing the Global
            <span className="block text-primary text-glow mt-2">
              Ethereum Ecosystem
            </span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Our strategic treasury management enhances shareholder value over the long term 
            while also reinforcing the security and resilience of the global Ethereum network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card backdrop-blur-sm rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105 animate-fade-in hover:border-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 border-2 border-primary rounded-lg flex items-center justify-center mb-6 group-hover:border-glow transition-all duration-300 bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
