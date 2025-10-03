import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            We're here to answer your questions and discuss opportunities.
          </p>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full border-glow mt-6" />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 mb-12 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Sign Up for Updates & Stay Informed</h3>
          <form className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
              />
              <label className="flex items-center space-x-2 text-sm text-foreground/70">
                <input type="checkbox" className="rounded" />
                <span>Financial Professional</span>
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-3 border-2 border-primary hover:border-glow"
            >
              Submit
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* General Inquiries */}
          <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 text-center animate-fade-in">
            <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
            <p className="text-foreground/70 mb-4">For general questions, partnership opportunities, and business inquiries.</p>
            <a href="mailto:info@bitminetech.io" className="text-primary font-bold text-lg hover:underline block">
              info@bitminetech.io
            </a>
          </div>

          {/* Media Inquiries */}
          <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4">Media Inquiries</h3>
            <p className="text-foreground/70 mb-4">For media inquiries, please reach out to Marcy Simon.</p>
            <a href="mailto:bitmine@agentofchange.com" className="text-primary font-bold text-lg hover:underline block">
              bitmine@agentofchange.com
            </a>
          </div>

          {/* Investor Relations */}
          <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Investor Relations</h3>
            <p className="text-foreground/70 mb-4">For shareholder communications, financial information, and investor-related inquiries.</p>
            <a href="mailto:ir@bitminetech.io" className="text-primary font-bold text-lg hover:underline block">
              ir@bitminetech.io
            </a>
          </div>
        </div>

        {/* Contact Form - Kept for general messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 hover:border-primary transition-all duration-300 border-glow">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Email</p>
                    <a href="mailto:info@bitminetech.io" className="text-primary hover:underline">
                      info@bitminetech.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Phone</p>
                    <a href="tel:+14048168240" className="text-primary hover:underline">
                      +1 (404) 816-8240
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Address</p>
                    <p className="text-foreground/70">
                      10845 Griffith Peak Dr., #2<br />
                      Las Vegas, NV 89135<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-background border border-gray-200 dark:border-primary/30 rounded-xl p-8 border-glow">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-foreground/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 animate-fade-in border-glow" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none text-foreground"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6 border-2 border-primary hover:border-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};