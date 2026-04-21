import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, FileSearch, FileCheck2, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/components/home/ServicesSection";
import servicesHero from "@/assets/services-hero.jpg";

const steps = [
  { Icon: MessageCircle, title: "Consultation", desc: "We discuss your needs and objectives in detail." },
  { Icon: FileSearch, title: "Documentation", desc: "We collect & review all required documents." },
  { Icon: FileCheck2, title: "Processing", desc: "We handle the application and follow-up end to end." },
  { Icon: Send, title: "Delivery", desc: "You receive your booking, visa, or service confirmation." },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="font-heading text-4xl font-bold text-navy">Service not found</h1>
        <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Button asChild className="mt-6 rounded-full bg-primary hover:bg-primary/90">
          <Link to="/services">View all services</Link>
        </Button>
      </div>
    );
  }

  const Icon = service.Icon;

  return (
    <>
      <Helmet>
        <title>{service.title} — R-Pro Travels</title>
        <meta name="description" content={service.desc} />
        <meta property="og:title" content={`${service.title} — R-Pro Travels`} />
        <meta property="og:description" content={service.desc} />
        <meta property="og:image" content={servicesHero} />
      </Helmet>
      <PageHero title={service.title} subtitle={service.desc} bgImage={servicesHero} breadcrumb={service.title} />

      <section className="py-24 md:py-28 bg-background">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-5"
          >
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">About this service</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our {service.title.toLowerCase()} service is designed to make your travel journey simple, secure, and stress-free.
                Whether you're traveling for leisure, business, study, or medical reasons, our team handles every detail with
                professionalism and care so you can focus on what matters most.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Personalized service tailored to your goals",
                  "Transparent pricing with no hidden fees",
                  "Dedicated support before, during, and after your trip",
                  "Trusted partners and verified providers worldwide",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-navy/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center">Our Process</h2>
          <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">A simple 4-step approach designed to deliver results.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ Icon: SIcon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-border relative"
              >
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <SIcon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy text-white text-center">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Ready to get started?</h2>
          <p className="mt-3 text-white/80">Speak with our team to begin your {service.title.toLowerCase()} journey today.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full h-12 px-7">
              <Link to="/contact">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/40 text-white hover:bg-white hover:text-navy">
              <Link to="/services">View Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
// keep Navigate referenced to avoid unused-import false flag if linter strict
void Navigate;
