import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import g5 from "@/assets/gallery-5.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g7 from "@/assets/gallery-7.jpg";

const posts = [
  { title: "Top Travel Destinations in 2026", excerpt: "Discover the must-visit places trending for the new year.", img: g5, date: "Apr 15, 2026", tag: "Destinations" },
  { title: "How to Get a Visa Easily", excerpt: "Step-by-step tips for a smooth visa application.", img: g4, date: "Apr 02, 2026", tag: "Visa Tips" },
  { title: "Travel Tips for First-Time Travelers", excerpt: "Essentials every first-time traveler should know.", img: g7, date: "Mar 28, 2026", tag: "Guides" },
];

export function BlogPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="From Our Blog"
          title="Travel Insights & Stories"
          description="Latest tips, guides, and inspiration to help you travel smarter."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-semibold">{p.tag}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-navy group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-1 text-primary font-medium text-sm">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
