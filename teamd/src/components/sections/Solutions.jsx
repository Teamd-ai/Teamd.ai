import HomeBg from "../../assets/images/home/home-bg.svg";

import aiTalent from "../../assets/images/ai-talent.png";
import eor from "../../assets/images/eor.png";
import gcc from "../../assets/images/gcc.png";
import consulting from "../../assets/images/consulting.png";
import business from "../../assets/images/business.png";
import workspace from "../../assets/images/workspace.png";

import ScrollReveal from "../common/ScrollReveal";

const solutions = [
  {
    title: "AI Talent and\nWorkforce Solutions",
    image: aiTalent,
    arrow: true,
  },
  {
    title: "EOR\nAs a service",
    image: eor,
  },
  {
    title: "GCC\nAs a service",
    image: gcc,
  },
  {
    title: "AI Consulting\nand Advisory",
    image: consulting,
  },
  {
    title: "Business\nOperations",
    image: business,
  },
  {
    title: "Workspace\nSolutions",
    image: workspace,
  },
];

export default function Solutions() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F3EE]">
      <div className="relative mx-auto min-h-[700px] w-full max-w-[1440px] overflow-hidden">
        {/* Figma background */}
        <img
          src={HomeBg}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[540px] w-[1440px] max-w-none -translate-x-1/2 object-cover"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1220px] px-6 pb-[90px] pt-[91px] xl:px-0">
          <ScrollReveal direction="bottom" delay={0.05}>
            <p className="m-0 font-['Barlow'] text-[16px] font-light leading-[19px] [font-variant:all-small-caps] text-black">
              WHAT WE DO
            </p>
          </ScrollReveal>

          <ScrollReveal direction="bottom" delay={0.12}>
            <h2 className="mb-[37px] mt-[10px] font-['Playfair_Display'] text-[32px] font-extrabold leading-[43px] capitalize text-black">
              Solutions That Drive Performance
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-x-[10px] gap-y-[10px] md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item, index) => (
              <ScrollReveal
                key={index}
                direction="bottom"
                delay={0.08 + index * 0.08}
                className="group relative h-[200px] w-full max-w-[400px] overflow-hidden justify-self-center xl:justify-self-auto"
              >
                <div className="relative h-[100px] w-full">
                  <h3
                    className={`m-0 whitespace-pre-line font-['Playfair_Display'] text-[24px] font-medium leading-[32px] text-black transition-colors duration-300 group-hover:text-[#BE5103] ${
                      index === 0 ? "pl-[10px] pt-[10px]" : "pt-[19px]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div className="absolute right-[24px] top-[10px] flex h-[41.38px] w-[41.38px] items-center justify-center rounded-full border border-[#BE5103] text-[#BE5103] transition-all duration-300 group-hover:bg-[#BE5103] group-hover:text-[#F4F3EE]">
                    <svg
                      className="h-[16px] w-[16px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M8 5l8 7-8 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="h-[100px] w-full overflow-hidden bg-[#D9D9D9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}