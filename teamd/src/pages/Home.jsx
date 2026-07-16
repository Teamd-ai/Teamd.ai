import ScrollReveal from "../components/common/ScrollReveal";

import HeroTop from "../components/sections/HeroTop";
import Solutions from "../components/sections/Solutions";
import Metrics from "../components/sections/Metrics";
import Models from "../components/sections/Models";
import Testimonials from "../components/sections/Testimonials";
import RolesMarquee from "../components/sections/RolesMarquee";
import Stats from "../components/sections/Stats";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroTop />

      {/* Already animated inside Solutions.jsx */}
      <Solutions />

      <ScrollReveal direction="bottom" delay={0.05}>
        <Metrics />
      </ScrollReveal>

      {/* Already animated inside Models.jsx */}
      <Models />

      <ScrollReveal direction="bottom" delay={0.05}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={0.05}>
        <RolesMarquee />
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={0.05}>
        <Stats />
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={0.05}>
        <Footer />
      </ScrollReveal>
    </>
  );
}