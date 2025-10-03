import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EthereumSection } from "@/components/EthereumSection";
import { AboutSection } from "@/components/AboutSection";
import { OurTeam } from "@/components/OutTeam";
import { ChairmanSection } from "@/components/ChairmanSection";
import { MediaSection } from "@/components/MediaSection";
import { InvestorSection } from "@/components/InvestorSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <EthereumSection />
      <AboutSection />
      <OurTeam />
      <ChairmanSection />
      <MediaSection />
      <InvestorSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
