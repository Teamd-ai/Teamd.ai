import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "./components/common/SEO";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Home from "./pages/Home";
import SolutionsPage from "./pages/SolutionsPage";
import EngagementModelsPage from "./pages/EngagementModelsPage";
import ClientsPage from "./pages/ClientsPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(0, {
          immediate: true,
          force: true,
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    });
  }, [location.pathname, lenis]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/engagement-models" element={<EngagementModelsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SEO /> 
      
      <ReactLenis
        root
        options={{
          duration: 2.0,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.2,
          infinite: false,
        }}
      >
        <AnimatedRoutes />
      </ReactLenis>
    </BrowserRouter>
  );
}