import bitminelogo from "@/assets/bitmine-logo.png";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Chairman's Message", href: "#chairman" },
    { label: "Careers", href: "#" },
  ],
  Investors: [
    { label: "Investor Relations", href: "#investor" },
    { label: "Financial Reports", href: "#" },
    { label: "Stock Information", href: "#" },
  ],
  Resources: [
    { label: "Media", href: "#media" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:info@bitmine.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img 
              src={bitminelogo} 
              alt="BitMine Logo" 
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-foreground/70 leading-relaxed mb-6">
              Establishing the world's premier Ethereum treasury through strategic management 
              and native protocol participation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 border-2 border-primary rounded-lg flex items-center justify-center bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:border-glow"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © 2025 BitMine Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
