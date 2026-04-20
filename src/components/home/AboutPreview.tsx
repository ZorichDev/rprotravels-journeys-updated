import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import about from "@/assets/about-preview.jpg";

export function AboutPreview() {
  return (
    <section className="relative z-0 py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)]">
            <img src={about} alt="R-Pro Travels consultant" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-[var(--shadow-glow)] hidden md:block">
            <div className="text-3xl font-heading font-bold">100%</div>
            <div className="text-xs uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block">
            <div className="h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Who We Are</span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            About <span className="text-gradient-brand">R-Pro Travels</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            R-Pro Travels and Tours Limited is a trusted Pan-African travel partner dedicated to delivering seamless travel experiences. We specialize in visa assistance, flight bookings, hotel reservations, and customized travel solutions for individuals and organizations.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Trusted by 10,000+ travelers across Africa",
              "End-to-end visa, flight & hotel solutions",
              "Dedicated customer support, every step of the way",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-navy">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 rounded-full bg-navy hover:bg-navy/90 px-7">
            <Link to="/about">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
