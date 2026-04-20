import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";

const items = [
  { src: g1, alt: "Beach resort", className: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "African safari", className: "" },
  { src: g3, alt: "Luxury hotel suite", className: "" },
  { src: g4, alt: "Passport and tickets", className: "md:row-span-2" },
  { src: g5, alt: "Santorini Greece", className: "md:col-span-2" },
  { src: g6, alt: "Airplane runway", className: "" },
  { src: g7, alt: "Resort pool", className: "" },
  { src: g8, alt: "Mountain landscape", className: "md:col-span-2" },
  { src: g9, alt: "Travelers in market", className: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments From Around the World"
          description="A glimpse into the destinations and experiences we make possible."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.button
              type="button"
              key={i}
              onClick={() => setOpen(item.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[80] bg-navy/95 flex items-center justify-center p-4 animate-[fade-in_0.2s_ease-out]"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
