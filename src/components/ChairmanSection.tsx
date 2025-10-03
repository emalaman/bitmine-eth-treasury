import { Video } from "lucide-react"; // Optional icon for video thumbnails

const videos = [
  {
    id: "WCoVxOVKav4",
    title: "BitMine | The Chairman's Message from Tom Lee - August 2025 | Is Ethereum the trade of the decade?",
    description: "Tom Lee, Chairman of BitMine (NYSE: BMNR), shares his vision on Ethereum treasury strategy and the 'Alchemy of 5%'. Recorded August 31, 2025.",
    publishDate: "September 2, 2025",
    embedUrl: "https://www.youtube.com/embed/WCoVxOVKav4",
  },
  {
    id: "4cLN0kd8T8M",
    title: "BitMine | The Chairman's Message from Tom Lee - July 2025",
    description: "Tom Lee discusses BitMine's Ethereum-focused treasury management and native protocol participation. Recorded July 27, 2025.",
    publishDate: "July 28, 2025",
    embedUrl: "https://www.youtube.com/embed/4cLN0kd8T8M",
  },
  {
    id: "b-IyeN0cQaM",
    title: "Tom Lee Returns as Bitmine Chairman, The World's Largest Ethereum Treasury | Episode 1",
    description: "In-depth interview where Tom Lee explains his return as Chairman and BitMine's role in the Ethereum ecosystem.",
    publishDate: "September 13, 2025",
    embedUrl: "https://www.youtube.com/embed/b-IyeN0cQaM",
  },
  {
    id: "zTaLzK7mA54",
    title: "Fundstrat's Tom Lee on being named chairman of BitMine Immersion Technologies",
    description: "Tom Lee joins CNBC's 'Squawk Box' to discuss his new role as Chairman and BitMine's innovative digital asset strategy.",
    publishDate: "June 30, 2025",
    embedUrl: "https://www.youtube.com/embed/zTaLzK7mA54",
  },
  // Add more videos here as needed
];

// MUDANÇA AQUI: Nome do componente e exportação devem ser 'ChairmanSection'
export const ChairmanSection = () => {
  return (
    <section id="chairman" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary text-glow">CHAIRMAN'S MESSAGE</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            As Chairman of BitMine, Thomas "Tom" Lee brings over 30 years of Wall Street expertise to lead our pioneering Ethereum treasury strategy. 
            Through disciplined ETH accumulation and native protocol participation, we're building the world's premier digital asset platform. 
            Watch Tom's insights on market trends, Ethereum's potential, and our vision for sustainable growth.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-primary/30 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 animate-fade-in"
            >
              {/* Video Embed */}
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${video.embedUrl}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Video className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground line-clamp-1">{video.title}</h3>
                </div>
                <p className="text-foreground/70 text-sm mb-2 line-clamp-2">{video.description}</p>
                <p className="text-xs text-muted-foreground">{video.publishDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};