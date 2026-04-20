import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="R-Pro Travels" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-heading font-bold text-lg">R-Pro Travels</div>
                <div className="text-xs text-white/70 uppercase tracking-widest">& Tours Limited</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your trusted Pan-African travel partner — visa, flights, hotels, and premium travel services.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li>
                <a href="https://rprotravels.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Book Online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-base">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Visa Assistance</li>
              <li>Flight Booking</li>
              <li>Hotel Reservations</li>
              <li>Medical Tourism</li>
              <li>Tours & Packages</li>
              <li>Corporate Travel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-base">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:09036630650" className="hover:text-white">09036630650</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:customercare@rprogroup.com.ng" className="hover:text-white break-all">
                  customercare@rprogroup.com.ng
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>H13 Road 1 Lekki Gardens Estate, Sangotedo, Lagos State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} R-Pro Travels and Tours Limited. All rights reserved.</p>
          <p>Crafted with care for travelers across Africa & beyond.</p>
        </div>
      </div>
    </footer>
  );
}
