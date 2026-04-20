import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handle = () => {
      // small delay so animation feels intentional
      setTimeout(() => setVisible(false), 900);
    };
    if (document.readyState === "complete") {
      handle();
    } else {
      window.addEventListener("load", handle);
      return () => window.removeEventListener("load", handle);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.img
            src={logo}
            alt="R-Pro Travels"
            className="h-20 w-20 mb-6"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary to-secondary"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 text-sm font-medium tracking-wide text-muted-foreground">
            Preparing your journey…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
