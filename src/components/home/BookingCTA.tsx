import { motion } from "framer-motion";
import { Plane, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const BOOK_URL = "https://rprotravels.com/";

export function BookingCTA() {
  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/90" />
      <div className="relative container-px mx-auto max-w-4xl text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl font-bold leading-tight"
        >
          Ready to Book Your <br className="hidden md:block" />
          <span className="text-gradient-brand">Next Trip?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-xl mx-auto text-white/85"
        >
          Discover handpicked destinations and book flights or hotels in just a few clicks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full h-12 px-8 shadow-[var(--shadow-glow)]">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"><Plane className="mr-2 h-4 w-4" /> Book Flight</a>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full h-12 px-8 shadow-[var(--shadow-glow)]">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"><Hotel className="mr-2 h-4 w-4" /> Book Hotel</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
