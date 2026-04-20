import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  subtitle?: string;
  bgImage: string;
  breadcrumb?: string;
}

export function PageHero({ title, subtitle, bgImage, breadcrumb }: Props) {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-navy/85" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container-px mx-auto max-w-7xl text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-sm text-white/80 mb-4"
        >
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{breadcrumb ?? title}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-bold"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-lg text-white/85"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
