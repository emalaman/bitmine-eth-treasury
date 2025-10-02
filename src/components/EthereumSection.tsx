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
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Ethereum Ecosystem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
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
                className="group relative bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
