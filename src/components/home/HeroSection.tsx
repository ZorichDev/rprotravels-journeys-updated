import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Plane, Globe, Hotel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import { Link } from "react-router-dom";

const slides = [slide1, slide2, slide3];
const BOOK_URL = "https://rprotravels.com/";

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 md:pb-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/70 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.24_27/0.25),_transparent_60%)]" />

      <div className="relative container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Pan-African Travel Partner
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            Explore the World <br />
            with <span className="text-gradient-brand">Confidence</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
            Visa assistance, flights, hotels, and premium travel services tailored for you across Africa and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-7 h-12 shadow-[var(--shadow-glow)]">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                <Plane className="mr-2 h-4 w-4" /> Book Flight
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-7 h-12 shadow-[var(--shadow-glow)]">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
                <Hotel className="mr-2 h-4 w-4" /> Book Hotel
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 bg-transparent border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <Link to="/services">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {/* trust strip */}
          <div className="mt-10 flex items-center gap-6 text-white/70 text-sm">
            <div>
              <div className="text-2xl font-bold text-white">10K+</div>
              <div>Happy Travelers</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div>Destinations</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">99%</div>
              <div>Visa Success</div>
            </div>
          </div>
        </motion.div>

        {/* Right: sliding image stack */}
        <div className="relative hidden lg:block h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)]"
            >
              <img
                src={slides[active]}
                alt="Travel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* floating decorative card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-12 z-10 glass rounded-2xl p-4 shadow-[var(--shadow-soft)] hidden xl:flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center">
              <Plane className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Flying with</div>
              <div className="text-sm font-semibold text-navy">Premium Airlines</div>
            </div>
          </motion.div>

          {/* slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating feature cards — overlap bottom */}
      <div className="relative mt-12 md:mt-0 md:absolute md:-bottom-16 left-0 right-0 z-30 px-4">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { Icon: Plane, title: "Easy Flight Booking", desc: "Seamless flight bookings worldwide." },
              { Icon: Globe, title: "Visa Assistance", desc: "Expert support for every visa type." },
              { Icon: Hotel, title: "Hotel Reservations", desc: "Secure comfortable stays anywhere." },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] hover-lift border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:gap-2 transition-all"
                    >
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
