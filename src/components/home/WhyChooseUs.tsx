import { motion } from "framer-motion";
import { ShieldCheck, Zap, Wallet, Heart, Globe2, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  { Icon: ShieldCheck, title: "Trusted Travel Experts", desc: "Years of proven experience handling complex travel needs." },
  { Icon: Zap, title: "Fast Visa Processing", desc: "Quick turnaround times with high success rates." },
  { Icon: Wallet, title: "Affordable Solutions", desc: "Best-value flights, hotels, and packages." },
  { Icon: Heart, title: "Dedicated Support", desc: "We're here for you before, during, and after your trip." },
  { Icon: Globe2, title: "Global Network", desc: "Partners and resources across major destinations." },
  { Icon: Sparkles, title: "Personalized Experience", desc: "Travel plans tailored to your unique goals." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.55_0.22_264/0.25),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.55_0.24_27/0.18),_transparent_50%)]" />
      <div className="relative container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Travel Smarter, Travel With Us"
          description="Six reasons travelers trust R-Pro for their journeys."
          light
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
