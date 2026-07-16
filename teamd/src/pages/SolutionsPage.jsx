import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/sections/Footer";
import ScrollReveal from "../components/common/ScrollReveal";

import SolutionsBg from "../assets/images/solutions/solutions-bg.svg";

import solution1 from "../assets/images/solutions/solution-1.jpg";
import solution2 from "../assets/images/solutions/solution-2.jpg";
import solution3 from "../assets/images/solutions/solution-3.jpg";
import solution4 from "../assets/images/solutions/solution-4.jpg";
import solution5 from "../assets/images/solutions/solution-5.jpg";
import solution6 from "../assets/images/solutions/solution-6.jpg";

const solutions = [
  {
    number: "1",
    title: "AI Talent and Workforce Solutions",
    description:
      "AI Talent and Workforce Solutions help organisations access, deploy, and manage skilled AI professionals and intelligent systems. We build scalable teams that accelerate automation, insight generation, and business growth.",
    image: solution1,
  },
  {
    number: "2",
    title: "EOR As a service",
    description:
      "EOR as a service helps companies hire talent in India without setting up a local entity. Teamd manages employment, payroll, compliance, and workforce operations so teams can start quickly and operate safely.",
    image: solution2,
  },
  {
    number: "3",
    title: "GCC As a service",
    description:
      "GCC as a service helps businesses build and operate high-performing capability centres in India. Teamd supports setup, hiring, operations, governance, and long-term performance management.",
    image: solution3,
  },
  {
    number: "4",
    title: "AI Consulting and Advisory",
    description:
      "AI Consulting and Advisory helps organisations identify practical AI opportunities, design adoption roadmaps, and implement intelligent workflows. We connect strategy, technology, and execution to create measurable value.",
    image: solution4,
  },
  {
    number: "5",
    title: "Business Operations",
    description:
      "Business Operations support helps companies run reliable offshore execution functions across process, reporting, coordination, and delivery. Teamd improves operational clarity, speed, and day-to-day performance.",
    image: solution5,
  },
  {
    number: "6",
    title: "Workspace Solutions",
    description:
      "Workspace Solutions provide ready-to-use office environments for distributed and offshore teams. Teamd helps companies access professional workspaces with the infrastructure needed to operate efficiently.",
    image: solution6,
  },
];

export default function SolutionsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  const activeSolution = solutions[activeIndex];

  useEffect(() => {
    if (isAutoScrollPaused) return;

    const autoScroll = setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === solutions.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [isAutoScrollPaused]);

  return (
    <main className="w-full overflow-hidden bg-[#BE5103]">
      <section
        id="solutions"
        className="relative w-full min-h-[1012px] overflow-hidden bg-[#BE5103] pb-24 text-[#F4F3EE] md:pb-32"
      >
        {/* Figma fade background / ellipses */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[1233px] w-[2332px] -translate-x-1/2">
          <div
            className="absolute left-[0px] top-[151px] h-[943px] w-[943px] rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D86717 0%, #BE5103 100%)",
            }}
          />

          <div
            className="absolute left-[1389px] top-[-139px] h-[943px] w-[943px] rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D86717 0%, #BE5103 100%)",
            }}
          />
        </div>

        {/* Figma background pattern */}
        <img
          src={SolutionsBg}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[665px] w-[1440px] max-w-none -translate-x-1/2 object-cover"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] pt-[16px]">
          {/* Navbar */}
          <div className="relative mx-auto h-[80px] w-full max-w-[1240px] px-6 xl:px-0">
            <div className="fixed left-1/2 top-[16px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2">
              <Navbar variant="page" clientLabel="CLIENTS" />
            </div>
          </div>

          {/* Header */}
          <div className="mx-auto mt-[34px] w-full max-w-[1240px] px-6 xl:px-0">
            <ScrollReveal direction="bottom" delay={0.05}>
              <h1 className="font-['Playfair_Display'] text-[46px] font-bold leading-tight text-[#F4F3EE] md:text-[64px] md:leading-[85px]">
                Solutions.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={0.12}>
              <p className="mt-[8px] max-w-[710px] font-['Barlow'] text-[20px] font-normal leading-snug text-[#F4F3EE] sm:text-[24px] md:text-[32px] md:leading-[38px]">
                Where strategy, talent, and technology drive results
              </p>
            </ScrollReveal>
          </div>

          {/* Card + desktop numbers */}
          <ScrollReveal
            direction="bottom"
            delay={0.18}
            className="mx-auto mt-[48px] flex w-full max-w-[1440px] items-center gap-[22px] px-6 xl:pl-[100px] xl:pr-[43px]"
          >
            {/* Card */}
            <div
              className="relative h-[620px] min-w-0 flex-1 overflow-hidden bg-[#BE5103] sm:h-[560px] md:h-[540px] lg:h-[600px] xl:max-w-[1240px]"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                  setIsAutoScrollPaused(true);
                }
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") {
                  setIsAutoScrollPaused(false);
                }
              }}
              onPointerDown={(event) => {
                if (event.pointerType !== "mouse") {
                  setIsAutoScrollPaused(true);
                }
              }}
              onPointerUp={(event) => {
                if (event.pointerType !== "mouse") {
                  setIsAutoScrollPaused(false);
                }
              }}
              onPointerCancel={() => setIsAutoScrollPaused(false)}
            >
              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Bottom gradient only for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              {/* Text block */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 md:p-8 xl:px-[40px] xl:pb-[58px]">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                  <h2 className="max-w-full font-['Playfair_Display'] text-[24px] font-medium leading-[1.15] text-[#F4F3EE] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:text-[28px] md:text-[34px] xl:max-w-[650px] xl:text-[36px] xl:leading-[44px]">
                    {activeSolution.title}
                  </h2>

                  <p className="max-w-full font-['Barlow'] text-[13px] font-normal leading-[17px] text-[#F4F3EE] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-[14px] md:text-[16px] md:leading-[19px] xl:mr-[8px] xl:max-w-[330px]">
                    {activeSolution.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop number list */}
            <div className="hidden h-[510px] w-[35px] shrink-0 flex-col justify-center xl:flex">
              {solutions.map((solution, index) => (
                <button
                  key={solution.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer border-0 bg-transparent p-0 text-left font-['Playfair_Display'] text-[64px] font-medium leading-[85px] transition-all duration-300 ${
                    activeIndex === index
                      ? "text-[#F4F3EE]"
                      : "text-[#F4F3EE]/25 hover:text-[#F4F3EE]/70"
                  }`}
                >
                  {solution.number}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Mobile / tablet numbers */}
          <ScrollReveal
            direction="bottom"
            delay={0.22}
            className="mt-8 flex flex-wrap justify-center gap-6 px-6 xl:hidden"
          >
            {solutions.map((solution, index) => (
              <button
                key={solution.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer border-0 bg-transparent p-0 font-['Playfair_Display'] text-[36px] font-medium leading-none transition-all duration-300 ${
                  activeIndex === index ? "text-[#F4F3EE]" : "text-[#F4F3EE]/30"
                }`}
              >
                {solution.number}
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}