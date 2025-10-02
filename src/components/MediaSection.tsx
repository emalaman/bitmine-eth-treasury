import { Newspaper, Radio, Video, FileText } from "lucide-react";

const mediaItems = [
  {
    type: "Press Release",
    icon: FileText,
    title: "BitMine Announces Q1 Treasury Expansion",
    date: "March 2025",
    excerpt: "Strategic acquisition of 10,000 ETH strengthens position as premier Ethereum treasury.",
  },
  {
    type: "Interview",
    icon: Radio,
    title: "Chairman Discusses Ethereum Strategy",
    date: "February 2025",
    excerpt: "In-depth conversation about long-term vision and the Alchemy of 5% approach.",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "Industry Leaders Recognize BitMine Innovation",
    date: "January 2025",
    excerpt: "Leading blockchain publications highlight BitMine's unique treasury management model.",
  },
  {
    type: "Video",
    icon: Video,
    title: "Understanding BitMine's Investment Thesis",
    date: "December 2024",
    excerpt: "Comprehensive overview of our Ethereum-first strategy and shareholder value creation.",
  },
];

const pressContacts = [
  {
    title: "Media Inquiries",
    email: "press@bitmine.com",
    description: "For press releases and media coverage requests",
  },
  {
    title: "Partnership Opportunities",
    email: "partnerships@bitmine.com",
    description: "For strategic partnerships and collaborations",
  },
];

export const MediaSection = () => {
  return (
    <section id="media" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Media <span className="text-primary text-glow">&amp; Press</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Stay informed with the latest news, announcements, and media coverage about BitMine.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 cursor-pointer group animate-fade-in hover:border-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10 group-hover:border-glow transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-primary font-bold">{item.type}</span>
                    <p className="text-xs text-foreground/60 mt-1">{item.date}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{item.excerpt}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-background border border-primary/30 rounded-2xl p-12 border-glow">
          <h3 className="text-3xl font-bold mb-8 text-center">Press Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressContacts.map((contact, index) => (
              <div
                key={contact.title}
                className="text-center p-6 bg-card rounded-xl border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-bold mb-3 text-foreground">{contact.title}</h4>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary font-bold text-lg hover:underline"
                >
                  {contact.email}
                </a>
                <p className="text-foreground/60 text-sm mt-3">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
