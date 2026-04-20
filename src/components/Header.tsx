import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="R-Pro Travels" className="h-11 w-11 transition-transform group-hover:scale-110" />
          <div className="leading-tight">
            <div className={`font-heading font-bold text-base md:text-lg ${scrolled ? "text-navy" : "text-white"}`}>
              R-Pro Travels
            </div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              & Tours Limited
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                scrolled ? "text-navy hover:text-primary" : "text-white hover:text-white"
              }`}
              activeProps={{ className: "text-primary after:w-full" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:09036630650"
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-navy" : "text-white"}`}
          >
            <Phone className="h-4 w-4" />
            <span>0903 663 0650</span>
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            <a href="https://rprotravels.com/" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-[fade-in_0.2s_ease-out]">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-navy font-medium py-2 border-b border-border"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 mt-2">
              <a href="https://rprotravels.com/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
