import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import bitminelogo from "@/assets/bitmine-logo.png";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Chairman's Message", href: "#chairman" },
  { label: "Media", href: "#media" },
  { label: "Investor Relations", href: "#investor" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.replace("#", ""));
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src={bitminelogo} 
              alt="BitMine Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 transition-all duration-300 hover:text-primary ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary animate-slide-down" />
                )}
              </Button>
            ))}
          </div>

          <Button className="hidden md:block bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold border-2 border-primary hover:border-glow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
