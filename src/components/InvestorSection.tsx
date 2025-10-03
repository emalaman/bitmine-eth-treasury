import { BarChart3, FileText, TrendingUp, Calendar } from "lucide-react";

const resources = [
  {
    icon: BarChart3,
    title: "Financial Reports",
    description: "Quarterly and annual financial statements",
    link: "https://www.nasdaq.com/market-activity/stocks/bmnr/financials",
  },
  {
    icon: FileText,
    title: "SEC Filings",
    description: "Access all regulatory documents",
    link: "https://www.nasdaq.com/market-activity/stocks/bmnr/sec-filings",
  },
  {
    icon: TrendingUp,
    title: "Stock Information",
    description: "Real-time BMNR stock data and analysis",
    link: "https://finance.yahoo.com/quote/BMNR/",
  },
  {
    icon: Calendar,
    title: "Events Calendar",
    description: "Upcoming earnings calls and presentations",
    link: "https://marketchameleon.com/Overview/BMNR/Earnings/Earnings-Dates/",
  },
];

const metrics = [
  {
    label: "ETH Treasury",
    value: "2.66M",
    subtext: "Ethereum holdings",
  },
  {
    label: "ETH per 1k Share",
    value: "8.63",
    subtext: "Calculated based on latest holdings",
  },
  {
    label: "Market Cap",
    value: "$10.10B",
    subtext: "USD equivalent",
  },
  {
    label: "YTD Growth",
    value: "+629%",
    subtext: "Year to date",
  },
];

export const InvestorSection = () => {
  return (
    <section id="investor" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Investor <span className="text-primary text-glow">Relations</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Transparent communication and comprehensive resources for our valued shareholders.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-gray-50 dark:bg-background border border-gray-200 dark:border-primary/30 rounded-xl p-6 text-center animate-fade-in border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</p>
              <p className="text-sm font-bold text-foreground mb-1">{metric.label}</p>
              <p className="text-xs text-foreground/60">{metric.subtext}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 hover:border-primary transition-all duration-300 cursor-pointer group animate-fade-in hover:border-glow text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 border-2 border-primary rounded-lg flex items-center justify-center mx-auto mb-4 bg-primary/10 group-hover:border-glow transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-foreground/70">{resource.description}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-gray-50 dark:bg-background border border-gray-200 dark:border-primary/30 rounded-2xl p-12 text-center border-glow">
          <h3 className="text-3xl font-bold mb-6">Next Earnings Call</h3>
          <p className="text-xl text-foreground/80 mb-8">
            Q3 2025 Financial Results
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-lg">
              <span className="text-primary font-bold">Date:</span> October 29, 2025
            </p>
            <p className="text-lg">
              <span className="text-primary font-bold">Time:</span> 4:00 PM EST
            </p>
          </div>
          <a
            href="https://marketchameleon.com/Overview/BMNR/Earnings/Earnings-Dates/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-all border-2 border-primary hover:border-glow inline-block"
          >
            Register for Webcast
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">For investor inquiries, please contact:</p>
          <a
            href="mailto:ir@bitmine.com"
            className="text-2xl font-bold text-primary hover:underline"
          >
            ir@bitmine.com
          </a>
        </div>
      </div>
    </section>
  );
};