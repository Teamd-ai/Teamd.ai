import GccIcon from "../../assets/images/engagement/gcc-icon.svg";
import EorIcon from "../../assets/images/engagement/eor-icon.svg";
import BotIcon from "../../assets/images/engagement/bot-icon.svg";
import DedicatedIcon from "../../assets/images/engagement/dedicated-icon.svg";

import ScrollReveal from "../common/ScrollReveal";

const models = [
  {
    title: "GCC",
    text:
      "Long-Term Capability.\nBuilt Right.\n\nThe GCC model is ideal for organisations building strategic, long-term offshore capability in India. Teamd designs, launches, and operates your Global Capability Center as an extension of your core business.",
    icon: GccIcon,
  },
  {
    title: "EOR",
    text:
      "Hire Fast.\nExecute Safely.\n\nTeamd’s EOR model enables companies to hire talent in India without setting up a legal entity. But unlike traditional EOR providers, Teamd doesn’t stop at payroll and compliance.",
    icon: EorIcon,
  },
  {
    title: "BOT",
    text:
      "A phased path to ownership with execution maturity.\n\nThe BOT model is designed for companies that want full ownership. Teamd builds the team, operates it until performance is predictable, and transfers ownership only when the team is execution-ready.",
    icon: BotIcon,
  },
  {
    title: "Dedicated Teams",
    text:
      "Execution-driven teams run by Teamd\n\nTeamd delivers fully managed teams aligned to defined outcomes, SLAs, and performance metrics. You focus on priorities and direction — Teamd runs the execution engine.",
    icon: DedicatedIcon,
  },
];

function ExploreButton() {
  return (
    <button
      type="button"
      className="group/btn flex h-[50px] w-[200px] items-center justify-start gap-[20px] border-0 bg-transparent p-0"
    >
      <span className="font-['Barlow'] text-[24px] font-light leading-[29px] [font-variant:all-small-caps] text-black transition-colors duration-300">
        explore
      </span>

      <span className="flex h-[41.38px] w-[41.38px] items-center justify-center rounded-full border border-[#BE5103] text-[#BE5103] transition-all duration-300 group-hover:bg-[#BE5103] group-hover:text-[#F4F3EE]">
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
      </span>
    </button>
  );
}

export default function Models() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F3EE]">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-[#F4F3EE] xl:h-[800px]">
        {/* Heading */}
        <ScrollReveal
          direction="bottom"
          delay={0.05}
          className="px-6 pb-10 pt-16 xl:absolute xl:left-[135px] xl:top-[51px] xl:p-0"
        >
          <p className="m-0 font-['Barlow'] text-[16px] font-light leading-[19px] [font-variant:all-small-caps] text-black">
            HOW WE DO
          </p>

          <h2 className="m-0 font-['Playfair_Display'] text-[32px] font-extrabold leading-[43px] capitalize text-black">
            Flexible Structures. One Standard.
          </h2>
        </ScrollReveal>

        {/* Desktop / Figma layout */}
        <div className="hidden xl:absolute xl:left-0 xl:top-[150px] xl:grid xl:h-[600px] xl:w-[1440px] xl:grid-cols-4">
          {models.map((item, index) => (
            <ScrollReveal
              key={item.title}
              direction="bottom"
              delay={0.08 + index * 0.08}
              className={`group relative h-[600px] bg-[#F4F3EE] border-y-2 border-[#DADDE7] transition-colors duration-300 hover:bg-[#f8f6f0] ${
                index !== models.length - 1 ? "border-r-2" : ""
              }`}
            >
              <h3
                className={`absolute top-[30px] m-0 font-['Playfair_Display'] text-[24px] font-bold leading-[32px] text-black transition-colors duration-300 ${
                  item.title === "Dedicated Teams"
                    ? "right-[37px] w-[190px] text-right"
                    : "right-[29px] text-right"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`absolute whitespace-pre-line font-['Barlow'] text-[16px] font-normal leading-[19px] text-[#14234E] transition-colors duration-300 ${
                  index === 0
                    ? "left-[165px] top-[69px] w-[166px]"
                    : index === 1
                    ? "left-[144px] top-[65px] w-[185px]"
                    : index === 2
                    ? "left-[154px] top-[71px] w-[188px]"
                    : "left-[138px] top-[73px] w-[185px]"
                } text-right`}
              >
                {item.text}
              </p>

              <div
                className={`absolute ${
                  index === 0
                    ? "left-[148px] top-[318px]"
                    : index === 1
                    ? "left-[144px] top-[318px]"
                    : index === 2
                    ? "left-[143px] top-[314px]"
                    : "left-[148px] top-[300px]"
                }`}
              >
                <ExploreButton />
              </div>

              <div
                className={`absolute flex h-[150px] w-[150px] items-center justify-center ${
                  index === 0
                    ? "left-[30px] top-[389px]"
                    : index === 1
                    ? "left-[30px] top-[396px]"
                    : index === 2
                    ? "left-[30px] top-[379px]"
                    : "left-[17px] top-[388px]"
                }`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-[130px] w-[130px] object-contain"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tablet / mobile layout */}
        <div className="grid grid-cols-1 border-y-2 border-[#DADDE7] md:grid-cols-2 xl:hidden">
          {models.map((item, index) => (
            <ScrollReveal
              key={item.title}
              direction="bottom"
              delay={0.08 + index * 0.08}
              className={`group flex min-h-[620px] flex-col border-[#DADDE7] px-6 py-10 transition-colors duration-300 hover:bg-[#f8f6f0] sm:px-8 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              } ${index < 2 ? "border-b-2" : ""}`}
            >
              <h3 className="m-0 font-['Playfair_Display'] text-[32px] font-bold leading-[38px] text-black transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-8 max-w-[300px] whitespace-pre-line font-['Barlow'] text-[17px] font-normal leading-[24px] text-[#14234E] transition-colors duration-300">
                {item.text}
              </p>

              <div className="mt-10">
                <ExploreButton />
              </div>

              <div className="mt-12 flex h-[150px] w-[150px] items-center justify-center">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[130px] w-[130px] object-contain"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}