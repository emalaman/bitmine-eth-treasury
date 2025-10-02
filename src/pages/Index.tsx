import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EthereumSection } from "@/components/EthereumSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <EthereumSection />
    </div>
  );
};

export default Index;
