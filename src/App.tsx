import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteLoader } from "@/components/SiteLoader";
import IndexPage from "@/routes/index";
import AboutPage from "@/routes/about";
import ServicesPage from "@/routes/services";
import ServiceDetailPage from "@/routes/services.$slug";
import ContactPage from "@/routes/contact";
import NotFoundPage from "@/routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <SiteLoader />
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}