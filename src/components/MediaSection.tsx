import { Newspaper, Video, FileText } from "lucide-react";
// Using native <a> for links, no Next.js dependency

const mediaItems = [
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "Bitmine Immersion Technologies (BMNR): Evaluating Valuation After 33% Monthly Gain",
    date: "October 3, 2025",
    excerpt: "Bitmine Immersion Technologies (BMNR) shares have drawn attention after logging a 33% gain over the past month, despite a volatile market.",
    url: "https://simplywall.st/stocks/us/software/nysemkt-bmnr/bitmine-immersion-technologies/news/bitmine-immersion-technologies-bmnr-evaluating-valuation-aft-1",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "Tom Lee's BitMine Approaches 50% of Goal to Hold 5% Ethereum Supply",
    date: "October 3, 2025",
    excerpt: "Tom Lee's BitMine is nearing 50% of their target to own 5% of Ethereum's total supply as part of a bold institutional strategy.",
    url: "https://cryptobriefing.com/tom-lee-bmnr-ethereum-treasury-strategy/",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "BitMine Boosts Ethereum Holdings: Major Market Impact?",
    date: "October 2, 2025",
    excerpt: "On Thursday, October 02, 2025, BitMine Immersion Technologies Inc. stock [NYSE American: BMNR] is trending up by 5.5%, highlighting the impact of its aggressive Ethereum accumulation strategy.",
    url: "https://stockstotrade.com/news/bitmine-immersion-technologies-inc-bmnr-news-2025_10_02/",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "BitMine Immersion Technologies Soars Amidst Aggressive Ethereum Accumulation",
    date: "October 2, 2025",
    excerpt: "BMNR stock surged after the company announced plans to issue an additional $20 billion in new stock to purchase Ethereum.",
    url: "https://markets.financialcontent.com/wral/article/marketminute-2025-10-2-bitmine-immersion-technologies-soars-amidst-aggressive-ethereum-accumulation",
  },
  {
    type: "Video",
    icon: Video,
    title: "$BMNR DROPPING… But 2025 END of YEAR RALLY",
    date: "October 1, 2025",
    excerpt: "Analysis on BMNR stock drop and potential end-of-year rally in 2025.",
    url: "https://www.youtube.com/watch?v=jFL4p5yv5lw",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "Why Bitmine Immersion Technologies, Inc.'s (BMNR) Stock Is Down 4.6%",
    date: "October 1, 2025",
    excerpt: "As of October 1, 2025, Bitmine Immersion Technologies, Inc.'s stock price is $52.688, which is up 1.46% from its previous closing price.",
    url: "https://www.aaii.com/investingideas/article/313719-why-bitmine-immersion-technologies-inc8217s-bmnr-stock-is-down-4616",
  },
  {
    type: "Press Release",
    icon: FileText,
    title: "BitMine Stock Climbs as Tom Lee's Firm Boosts Ethereum Holdings",
    date: "September 29, 2025",
    excerpt: "BMNR is on the rise as BitMine adds nearly $1 billion in Ethereum, further cementing its status as the top ETH treasury firm.",
    url: "https://finance.yahoo.com/news/bitmine-stock-climbs-tom-lees-141425554.html",
  },
  {
    type: "Press Release",
    icon: FileText,
    title: "BitMine Immersion (BMNR) Announces ETH Holdings Exceeding 2.65 Million Tokens",
    date: "September 29, 2025",
    excerpt: "BitMine crypto + cash + 'moonshots' holdings totalling $11.6 billion. BitMine now owns greater than 2% of the ETH token supply.",
    url: "https://www.wjhl.com/business/press-releases/cision/20250929NY85194/bitmine-immersion-bmnr-announces-eth-holdings-exceeding-2-65-million-tokens-and-total-crypto-and-cash-holdings-of-11-6-billion",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "What's Going On With BitMine Immersion Technologies (BMNR) Stock Wednesday",
    date: "September 30, 2025",
    excerpt: "Investor confidence in 2025 has been growing around BitMine's strategic pivot to becoming a major Ethereum treasury.",
    url: "https://www.benzinga.com/trading-ideas/movers/25/10/47972024/whats-going-on-with-bitmine-immersion-technologies-bmnr-stock-wednesday",
  },
  {
    type: "News Coverage",
    icon: Newspaper,
    title: "BitMine Immersion Technologies (BMNR): The Ethereum Treasury Titan",
    date: "September 30, 2025",
    excerpt: "The next earnings report for Q3 2025 is anticipated around October 29, 2025. Revenue Growth: Last Twelve Months (TTM) ending May 30, 2025.",
    url: "https://markets.financialcontent.com/stocks/article/predictstreet-2025-9-30-bitmine-immersion-technologies-bmnr-the-ethereum-treasury-titan-navigating-cryptos-supercycle",
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
  // Sort the media items by date in descending order (most recent first)
  const sortedMediaItems = [...mediaItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
          {sortedMediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block" // To make the entire card clickable
              >
                <div
                  className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 hover:border-primary transition-all duration-300 group animate-fade-in hover:border-glow"
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
              </a>
            );
          })}
        </div>

        <div className="bg-background border border-primary/30 rounded-2xl p-12 border-glow">
          <h3 className="text-3xl font-bold mb-8 text-center">Press Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressContacts.map((contact, index) => (
              <div
                key={contact.title}
                className="text-center p-6 bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-bold mb-3 text-foreground">{contact.title}</h4>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary font-bold text-lg hover:underline"
                  target="_blank" // Added for consistency, although mailto doesn't use tab
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