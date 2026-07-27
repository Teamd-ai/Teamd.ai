import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import Navbar from "../layout/Navbar";

import HomeBg from "../../assets/images/home/home-bg.svg";

import DaaLogo from "../../assets/images/clients/daa-logo.svg";
import EurotechLogo from "../../assets/images/clients/eurotech-logo.svg";
import OfisphereLogo from "../../assets/images/clients/ofisphere-logo.svg";
import RoundLogo from "../../assets/images/clients/round-logo.svg";

export default function HeroTop() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#F4F3EE]">
      {/* Hero */}
      <div className="relative h-[800px] w-full overflow-hidden">
        {/* Hero background image */}
        <motion.img
          src="/hero-main.jpg"
          alt="Teamd Hero Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Figma overlay */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />

        {/* Navbar */}
        <motion.div
          className="fixed left-1/2 top-[24px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Navbar variant="page" clientLabel="CLIENTS" />
        </motion.div>

        {/* Hero content inside container */}
        <div className="absolute inset-x-0 bottom-[32px] z-20">
          <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 xl:px-0">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[688px_463px] lg:items-end lg:justify-between">
              {/* Left heading */}
              <motion.h1
                className="m-0 max-w-[688px] font-['Playfair_Display'] text-[34px] font-bold leading-[1.16] text-white sm:text-[42px] lg:mb-[105px] lg:text-[48px] lg:leading-[64px]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Building high performing Global Execution Engines for startups
                to midmarkets.
              </motion.h1>

              {/* Right text and button */}
              <motion.div
                className="max-w-[463px]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="m-0 font-['Barlow'] text-[16px] font-normal leading-[22px] text-white sm:text-[18px] lg:text-[20px] lg:leading-[24px]">
                  Teamd owns the space between hiring and results. We architect
                  the right teams, operate them day-to-day, and stabilise them
                  for long-term success.
                </p>

                <Link
                  to="/solutions"
                  className="group mt-[18px] flex h-[50px] w-[200px] items-center no-underline"
                >
                  <span className="ml-[26px] font-['Barlow'] text-[22px] font-light leading-[29px] [font-variant:all-small-caps] text-white lg:text-[24px]">
                    explore
                  </span>

                  <span className="ml-[20px] flex h-[41.38px] w-[41.38px] items-center justify-center rounded-full border border-[#BE5103] transition-all duration-300 group-hover:bg-[#BE5103]">
                    <svg
                      className="block h-[16px] w-[16px] text-[#BE5103] transition-colors duration-300 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M8 5l8 7-8 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Client logo strip */}
      <div className="relative mx-auto h-auto min-h-[166px] w-full max-w-[1440px] overflow-hidden bg-[#F4F3EE] px-6 py-[22px]">
        {/* Figma bg pattern */}
        <img
          src={HomeBg}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[540px] w-[1440px] max-w-none -translate-x-1/2 object-cover"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1008.6px] flex-wrap items-center justify-center gap-[8.2px]">
          <motion.div
            className="flex h-[82px] w-[246px] items-center justify-center overflow-hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={EurotechLogo}
              alt="Eurotech"
              className="max-h-[82px] max-w-[200px] object-contain opacity-80 grayscale"
              style={{ mixBlendMode: "luminosity" }}
            />
          </motion.div>

          <motion.div
            className="flex h-[82px] w-[246px] items-center justify-center overflow-hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={DaaLogo}
              alt="DAA"
              className="max-h-[72px] max-w-[120px] object-contain opacity-80 grayscale"
              style={{ mixBlendMode: "luminosity" }}
            />
          </motion.div>

          <motion.div
            className="flex h-[82px] w-[246px] items-center justify-center overflow-hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.6,
              delay: 0.19,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={OfisphereLogo}
              alt="Ofisphere"
              className="max-h-[82px] max-w-[200px] object-contain opacity-80 grayscale"
              style={{ mixBlendMode: "luminosity" }}
            />
          </motion.div>

          <motion.div
            className="flex h-[82px] w-[246px] items-center justify-center overflow-hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.6,
              delay: 0.26,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={RoundLogo}
              alt="Round Logo"
              className="max-h-[72px] max-w-[120px] object-contain opacity-80 grayscale"
              style={{ mixBlendMode: "luminosity" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}