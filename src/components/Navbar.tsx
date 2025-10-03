import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react"; // Added Menu and X icons for mobile
import bitminelogo from "@/assets/logobitminenew.png";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#ourteam" },
  { label: "Chairman's Message", href: "#chairman" },
  { label: "Media", href: "#media" },
  { label: "Investor Relations", href: "#investor" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light"); // State for current theme
  const [isMobileOpen, setIsMobileOpen] = useState(false); // State for mobile menu toggle

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Close mobile menu on scroll or resize (optional for UX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false); // Close on desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollForActive = () => {
      const sections = menuItems.map(item => item.href);
      let current = "home";

      sections.forEach(sectionHref => {
        const section = document.querySelector(sectionHref);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionHref.replace("#", "");
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollForActive);
    return () => window.removeEventListener("scroll", handleScrollForActive);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.replace("#", ""));
    } else {
      console.warn(`Seção ${href} não encontrada no DOM. Verifique se o componente GetStartedSection está renderizado.`);
    }
    setIsMobileOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? `${theme === "light" ? "bg-blue-100/95" : "bg-background/95"} backdrop-blur-md shadow-lg border-b border-border`
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo à esquerda */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src={bitminelogo} 
                alt="BitMine Logo" 
                className="h-16 w-auto object-contain bg-transparent"
              />
            </div>

            {/* Menu desktop: Hidden on mobile, flex on md+ */}
            <div className="hidden md:flex items-center flex-1 justify-center space-x-1">
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

            {/* Botões à direita: Theme toggle visible on all sizes, hamburger on mobile */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Theme Toggle - Always visible */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-8 w-8 p-0 rounded-full"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>

              {/* Hamburger for mobile */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="h-8 w-8 p-0 rounded-full md:hidden"
              >
                {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full screen on open */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-4 pt-20">
          {menuItems.map((item, index) => (
            <Button
              key={item.href}
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection(item.href)}
              className={`relative px-8 py-3 transition-all duration-300 hover:text-primary text-2xl ${
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
      )}
    </>
  );
};