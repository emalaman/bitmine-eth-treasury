import { Target, Zap, TrendingUp, Users } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import tomLeeImage from "@/assets/tom-lee.png";
import jonathanBatesImage from "@/assets/jonathan-bates.png";
import raymondMowImage from "@/assets/raymond-mow.png";

const teamMembers = [
  {
    name: 'Thomas "Tom" Lee',
    title: 'Chairman',
    image: tomLeeImage,
    xProfile: 'https://x.com/fundstrat', // Replace with actual X profile URL
    linkedinProfile: 'https://www.linkedin.com/in/thomas-tom-lee-98756b6/', // Replace with actual LinkedIn profile URL
    description:
      'Thomas Lee is a Managing Partner and the Head of Research at Fundstrat, Chief Investment Officer of Fundstrat Capital and the Chairman of the Board of BitMine. He is an accomplished Wall Street strategist with over 30 years of experience in equity research, and has been consistently top ranked by Institutional Investor since 1998. Prior to co-founding Fundstrat, he served most recently as J.P. Morgan’s Chief Equity Strategist from 2007 to 2014, and previously as Managing Director at Salomon Smith Barney. He is also a full-time contributor to CNBC.',
  },
  {
    name: 'Jonathan Bates',
    title: 'Chief Executive Officer',
    image: jonathanBatesImage,
    xProfile: 'https://x.com/JBatesBMNR', // Replace with actual X profile URL
    linkedinProfile: 'https://www.linkedin.com/in/jonathan-b-1b37b210a/', // Replace with actual LinkedIn profile URL
    description:
      'Jonathan, a former Managing Director at J.P. Morgan Securities, has over 30 years of financial industry experience. His expertise lies in analyzing market interrelations, institutional trading, and multiasset portfolios, which are vital to the organization’s operations. He graduated with a degree in Business Finance from the University of Texas at Austin.',
  },
  {
    name: 'Raymond Mow',
    title: 'Chief Financial Officer',
    image: raymondMowImage,
    xProfile: '', // Replace with actual X profile URL
    linkedinProfile: '', // Replace with actual LinkedIn profile URL
    description:
      'Raymond has over 28 years of financial industry experience, most recently as Managing Director of Fixed Income at First Foundation Advisers, managing $2.3 billion. He was also a Senior Portfolio Manager at Highmark Capital Management, overseeing $2 billion.',
  },
];

export const OurTeam = () => {
  return (
    <section id="ourteam" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary text-glow">OUR TEAM</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            BitMine is the leading Ethereum Treasury company in the world, implementing an innovative digital asset strategy for institutional investors and public market participants.
            We are committed to ETH as our primary treasury reserve asset, leveraging native protocol-level activities including staking and decentralized finance mechanisms. Our disciplined approach to increasing the ETH held per share creates a self-reinforcing cycle that contributes to Ethereum's economic security while positioning shareholders to benefit from the growing stablecoin market and tokenized asset ecosystem.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow" />
        </div>

        {/* Team Members Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-primary/30 rounded-2xl p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50 animate-fade-in" // ALTERAÇÃO: bg-gray-50 em light para cinza claro; dark:bg-card para dark mode
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={`Professional photo of ${member.name}`}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-md transform transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/128x128/6B7280/FFFFFF?text=No+Image'; // Fallback placeholder
                  }}
                />
                <h4 className="text-2xl font-semibold text-foreground">{member.name}</h4>
                <p className="text-lg text-primary mb-2">{member.title}</p>
                <div className="flex justify-center gap-4 mb-4">
                  <a
                    href={member.xProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`X profile of ${member.name}`}
                    className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
                  >
                    <BsTwitterX className="w-8 h-8 text-primary" />
                  </a>
                  <a
                    href={member.linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile of ${member.name}`}
                    className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
                  >
                    <FaLinkedin className="w-8 h-8 text-primary" />
                  </a>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
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