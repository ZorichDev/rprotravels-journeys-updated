import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import london from "@/assets/dest-london.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import toronto from "@/assets/dest-toronto.jpg";
import newyork from "@/assets/dest-newyork.jpg";
import paris from "@/assets/dest-paris.jpg";
import accra from "@/assets/dest-accra.jpg";

const BOOK_URL = "https://rprotravels.com/";

const destinations = [
  { name: "London", country: "United Kingdom", img: london, price: "₦950k", visa: "₦180k", className: "md:col-span-2 md:row-span-2" },
  { name: "Dubai", country: "UAE", img: dubai, price: "₦680k", visa: "₦120k", className: "" },
  { name: "Toronto", country: "Canada", img: toronto, price: "₦1.2M", visa: "₦220k", className: "" },
  { name: "New York", country: "USA", img: newyork, price: "₦1.1M", visa: "₦200k", className: "md:col-span-2" },
  { name: "Paris", country: "France", img: paris, price: "₦890k", visa: "₦170k", className: "" },
  { name: "Accra", country: "Ghana", img: accra, price: "₦220k", visa: "Visa-free", className: "" },
];

export function TopDestinations() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Top Destinations"
          title="Popular Places to Explore"
          description="Pre-filled searches with live visa & flight pricing — tap any destination to book."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
          {destinations.map((d, i) => (
            <motion.a
              key={d.name}
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${d.className}`}
            >
              <img
                src={d.img}
                alt={d.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <MapPin className="h-3.5 w-3.5" /> {d.country}
                </div>
                <h3 className="font-heading text-2xl font-bold mt-1">{d.name}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1">
                    <Plane className="h-3 w-3 inline mr-1" /> from {d.price}
                  </span>
                  <span className="rounded-full bg-primary/90 px-3 py-1 font-semibold">
                    Visa {d.visa}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
