import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TopDestinations } from "@/components/home/TopDestinations";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>R-Pro Travels — Visa, Flights & Hotels Across Africa</title>
        <meta
          name="description"
          content="Pan-African travel partner offering visa assistance, flight bookings, hotel reservations, tours and corporate travel. Book your next trip with confidence."
        />
        <meta property="og:title" content="R-Pro Travels — Explore the World with Confidence" />
        <meta
          property="og:description"
          content="Visa assistance, flights, hotels, and premium travel services tailored for you across Africa and beyond."
        />
      </Helmet>
      {/* spacer so floating cards don't overlap next section content */}
      <HeroSection />
      <div className="h-16 md:h-20" />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <TopDestinations />
      <BookingCTA />
      <Testimonials />
      <Gallery />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
