import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const reviews = [
  {
    name: "Sarah O.",
    role: "Tourist Visa — UK",
    text: "R-Pro Travels made my visa process smooth and stress-free. They handled every detail with professionalism.",
  },
  {
    name: "David K.",
    role: "Business Travel — Dubai",
    text: "Excellent service and fast booking experience. My flights and hotel were sorted in less than a day.",
  },
  {
    name: "Chioma A.",
    role: "Family Vacation — Toronto",
    text: "Highly recommend for international travel plans. The team is responsive, knowledgeable, and friendly.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by Travelers"
          description="Real stories from people we've helped explore the world."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border hover-lift relative"
            >
              <Quote className="h-10 w-10 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-navy/90 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
