import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPreview from "@/assets/about-preview.jpg";

const values = [
  { Icon: Award, title: "Integrity", desc: "We act with honesty and transparency in everything we do." },
  { Icon: Heart, title: "Excellence", desc: "We deliver exceptional quality in every booking and interaction." },
  { Icon: Users, title: "Customer Focus", desc: "Your travel goals are at the center of every decision we make." },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — R-Pro Travels and Tours Limited</title>
        <meta
          name="description"
          content="Learn about R-Pro Travels — a trusted Pan-African travel partner delivering seamless travel, visa, and tour solutions."
        />
        <meta property="og:title" content="About R-Pro Travels and Tours Limited" />
        <meta
          property="og:description"
          content="Pan-African travel partner with a passion for delivering seamless travel experiences."
        />
        <meta property="og:image" content={aboutHero} />
      </Helmet>
      <PageHero
        title="About Us"
        subtitle="A trusted travel partner for individuals and organizations across Africa and beyond."
        bgImage={aboutHero}
      />

      {/* Story */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={aboutPreview}
            alt="R-Pro Travels team"
            className="rounded-[2rem] shadow-[var(--shadow-card)] aspect-[4/5] object-cover"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Our Story</span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-navy">
              Simplifying travel for <span className="text-gradient-brand">Africa</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              R-Pro Travels was established to simplify travel for Africans by providing reliable and professional travel services.
              From visa applications to hotel bookings, we handle every detail so you can focus on the journey ahead.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we proudly serve thousands of travelers, students, professionals, and corporate clients with personalized
              support and a global network of trusted partners.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "500+", l: "Clients Served" },
                { v: "50+", l: "Destination Routes" },
                { v: "95%", l: "Satisfaction Rate" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {[
            { Icon: Target, title: "Our Mission", desc: "To deliver seamless and reliable travel services that empower individuals and organizations to explore the world." },
            { Icon: Eye, title: "Our Vision", desc: "To become Africa's leading travel solutions provider, recognized for excellence and trusted by every client we serve." },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-[var(--shadow-soft)]"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Core Values" title="What We Stand For" description="The principles that guide every journey we craft." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 border border-border hover-lift"
              >
                <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 md:py-24 bg-navy text-white">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Globe2 className="h-12 w-12 text-primary mx-auto mb-5" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Ready to travel with us?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Our team of experts is ready to plan your next journey — wherever it takes you.
          </p>
          <Button asChild size="lg" className="mt-7 bg-primary hover:bg-primary/90 rounded-full h-12 px-8">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}