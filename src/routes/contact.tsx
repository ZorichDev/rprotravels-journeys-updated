import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import contactHero from "@/assets/contact-hero.jpg";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  const cards = [
    { Icon: Phone, title: "Call us", value: "09036630650", href: "tel:09036630650" },
    { Icon: Mail, title: "Email us", value: "customercare@rprogroup.com.ng", href: "mailto:customercare@rprogroup.com.ng" },
    { Icon: MapPin, title: "Visit us", value: "H13 Road 1 Lekki Gardens Estate, Sangotedo, Lagos State", href: "#map" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us — R-Pro Travels</title>
        <meta
          name="description"
          content="Get in touch with R-Pro Travels. Call 09036630650, email customercare@rprogroup.com.ng, or visit us in Lekki Gardens, Lagos."
        />
        <meta property="og:title" content="Contact R-Pro Travels" />
        <meta property="og:description" content="Reach our travel experts — by phone, email, or in person." />
        <meta property="og:image" content={contactHero} />
      </Helmet>
      <PageHero
        title="Contact Us"
        subtitle="Talk to our travel experts — we're ready to help plan your next journey."
        bgImage={contactHero}
      />

      <section className="py-24 md:py-28 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {cards.map(({ Icon, title, value, href }, i) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-7 border border-border hover-lift block group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">{title}</div>
                <div className="mt-1 font-heading font-semibold text-navy break-words">{value}</div>
              </motion.a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-soft)]"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>

              <form onSubmit={onSubmit} className="mt-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your full name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+234 800 000 0000" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help…" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
                {submitted && (
                  <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 rounded-lg px-4 py-3 border border-primary/20">
                    <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent.
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              id="map"
            >
              <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-[4/3]">
                <iframe
                  title="R-Pro Travels location"
                  src="https://www.google.com/maps?q=Lekki+Gardens+Estate+Sangotedo+Lagos&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-navy rounded-3xl p-7 text-white">
                <h3 className="font-heading text-xl font-semibold">Follow us</h3>
                <p className="mt-1 text-sm text-white/70">Stay updated on travel deals and news.</p>
                <div className="mt-5 flex gap-3">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/share/1J33srUqLu/?mibextid=wwXIfr" },
                    { Icon: Instagram, href: "https://www.instagram.com/r_pro_travels?igsh=MWdieWpuNXBpbGRsOA==" },
                    // { Icon: Twitter, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="h-11 w-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                      aria-label="social"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
