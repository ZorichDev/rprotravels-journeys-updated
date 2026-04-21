import { motion } from "framer-motion";
import { FileCheck, Stethoscope, Plane, Hotel, Map, Car, Briefcase, Headphones, Package, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "react-router-dom";

export const services = [
  { Icon: FileCheck, title: "Visa Assistance", desc: "Expert support for tourist, study, and work visas.", slug: "visa-assistance" },
  { Icon: Stethoscope, title: "Medical Tourism", desc: "Access top hospitals abroad with guided travel plans.", slug: "medical-tourism" },
  { Icon: Plane, title: "Flight Booking", desc: "Affordable and flexible flight options worldwide.", slug: "flight-booking" },
  { Icon: Hotel, title: "Hotel Booking", desc: "Secure comfortable stays anywhere you travel.", slug: "hotel-booking" },
  { Icon: Map, title: "Tours & Packages", desc: "Curated travel experiences and holiday packages.", slug: "tours-packages" },
  { Icon: Car, title: "Airport Transfer", desc: "Reliable pickup and drop-off services.", slug: "airport-transfer" },
  { Icon: Briefcase, title: "Corporate Travel", desc: "Business travel solutions for organizations.", slug: "corporate-travel" },
  { Icon: Headphones, title: "Travel Consultation", desc: "Personalized travel planning and advice.", slug: "travel-consultation" },
  { Icon: Package, title: "Logistics (DHL)", desc: "Secure document and parcel delivery services.", slug: "logistics" },
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Offer"
          title="Premium Travel Services"
          description="Everything you need for a seamless journey — from visa to vacation."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc, slug }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={`/services/${slug}`}
                className="group block bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover-lift relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-primary font-medium text-sm">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
