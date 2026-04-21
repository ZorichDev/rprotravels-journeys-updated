import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/components/home/ServicesSection";
import servicesHero from "@/assets/services-hero.jpg";

const benefitsByService: Record<string, string[]> = {
  "visa-assistance": ["High visa success rate", "Document review & guidance", "All visa types covered"],
  "medical-tourism": ["Top accredited hospitals", "End-to-end coordination", "Family travel support"],
  "flight-booking": ["Best-fare guarantee", "24/7 booking support", "Flexible date options"],
  "hotel-booking": ["Verified properties", "Best-rate access", "Loyalty perks"],
  "tours-packages": ["Curated experiences", "Group & private tours", "All-inclusive pricing"],
  "airport-transfer": ["Punctual pickups", "Vetted drivers", "Comfortable vehicles"],
  "corporate-travel": ["Dedicated account manager", "Volume pricing", "Expense reporting"],
  "travel-consultation": ["1-on-1 planning", "Personalized itinerary", "Ongoing support"],
  "logistics": ["DHL partnership", "Door-to-door tracking", "Secure handling"],
};

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services — R-Pro Travels</title>
        <meta
          name="description"
          content="Explore R-Pro Travels' full range of services: visa assistance, flight booking, hotels, medical tourism, tours, corporate travel and more."
        />
        <meta property="og:title" content="Our Services — R-Pro Travels" />
        <meta property="og:description" content="Visa, flights, hotels, tours, corporate travel and logistics — all in one place." />
        <meta property="og:image" content={servicesHero} />
      </Helmet>
      <PageHero
        title="Our Services"
        subtitle="From visas to vacations — explore everything we do to make travel effortless."
        bgImage={servicesHero}
      />

      <section className="py-24 md:py-28 bg-background">
        <div className="container-px mx-auto max-w-7xl space-y-6">
          {services.map(({ Icon, title, desc, slug }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-card rounded-2xl p-7 md:p-9 border border-border hover-lift grid md:grid-cols-[auto_1fr_auto] items-center gap-6"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {(benefitsByService[slug] ?? []).map((b) => (
                    <li key={b} className="flex items-center gap-1.5 text-sm text-navy/80">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="rounded-full bg-navy hover:bg-navy/90 self-stretch md:self-center px-6">
                <Link to={`/services/${slug}`}>
                  Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
