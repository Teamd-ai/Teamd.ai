import Navbar from "../components/layout/Navbar";
import Footer from "../components/sections/Footer";
import ScrollReveal from "../components/common/ScrollReveal";

import ModelsBg from "../assets/images/engagement/models-bg.svg";

import GccIcon from "../assets/images/engagement/gcc-icon.svg";
import EorIcon from "../assets/images/engagement/eor-icon.svg";
import BotIcon from "../assets/images/engagement/bot-icon.svg";
import DedicatedIcon from "../assets/images/engagement/dedicated-icon.svg";

const models = [
  {
    title: "GCC",
    subtitle: "Long-Term Capability, Built Right.",
    description:
      "The GCC model is ideal for organisations building strategic, long-term offshore capability in India. Teamd designs, launches, and operates your Global Capability Center as an extension of your core business.",
    icon: GccIcon,
  },
  {
    title: "EOR",
    subtitle: "Hire Fast. Execute Safely.",
    description:
      "Teamd's EOR model enables companies to hire talent in India without setting up a legal entity. But unlike traditional EOR providers, Teamd doesn't stop at payroll and compliance.",
    icon: EorIcon,
  },
  {
    title: "BOT",
    subtitle: "A phased path to ownership with execution maturity.",
    description:
      "The BOT model is designed for companies that want full ownership. Teamd builds the team, operates it until performance is predictable, and transfers ownership only when the team is execution-ready.",
    icon: BotIcon,
  },
  {
    title: "Dedicated Teams",
    subtitle: "Execution-driven teams run by Teamd",
    description:
      "Teamd delivers fully managed teams aligned to defined outcomes, SLAs, and performance metrics. You focus on priorities and direction - Teamd runs the execution engine.",
    icon: DedicatedIcon,
  },
];

function MetricOne() {
  return (
    <div className="relative h-[130px] w-[269px]">
      <div className="absolute left-0 top-0 h-[112px] w-[112px] rounded-full bg-[#BE5103]" />

      <div className="absolute left-[54px] top-[17px] font-['Barlow'] text-black">
        <div className="flex items-start whitespace-nowrap font-medium leading-none">
          <span className="text-[52px] lg:text-[64px]">30-45</span>
          <span className="pt-[15px] text-[28px] lg:text-[34px]">%</span>
        </div>

        <p className="mt-[-4px] w-[170px] text-center text-[13px] leading-[15px] font-medium">
          lower operating cost
          <br />
          vs onshore teams
        </p>
      </div>
    </div>
  );
}

function MetricTwo() {
  return (
    <div className="relative h-[125px] w-[243px]">
      <div className="absolute left-0 top-[3px] h-[112px] w-[112px] rounded-full bg-[#BE5103]" />

      <div className="absolute left-[65px] top-[17px] font-['Barlow'] text-black">
        <div className="flex items-start whitespace-nowrap font-medium leading-none">
          <span className="text-[52px] lg:text-[64px]">40</span>
          <span className="pt-[15px] text-[28px] lg:text-[34px]">%</span>
        </div>

        <p className="mt-[-4px] w-[178px] text-center text-[13px] leading-[15px] font-medium">
          faster time-to-productivity
        </p>
      </div>
    </div>
  );
}

function MetricThree() {
  return (
    <div className="relative h-[126px] w-[232px]">
      <div className="absolute left-0 top-[2px] h-[112px] w-[112px] rounded-full bg-[#BE5103]" />

      <div className="absolute left-[54px] top-[17px] font-['Barlow'] text-black">
        <div className="flex items-start whitespace-nowrap font-medium leading-none">
          <span className="text-[52px] lg:text-[64px]">&lt;10</span>
          <span className="pt-[15px] text-[28px] lg:text-[34px]">%</span>
        </div>

        <p className="mt-[-4px] w-[180px] text-center text-[13px] leading-[15px] font-medium">
          annualised attrition
          <br />
          after stabilisation
        </p>
      </div>
    </div>
  );
}

function ArrowCircle({ size = 41.38 }) {
  return (
    <span
      className="flex items-center justify-center rounded-full border border-[#BE5103] text-[#BE5103] transition-all duration-300 group-hover:bg-[#BE5103] group-hover:text-[#F4F3EE] group-active:bg-[#BE5103] group-active:text-[#F4F3EE] group-hover/enquire:bg-[#BE5103] group-hover/enquire:text-[#F4F3EE] group-active/enquire:bg-[#BE5103] group-active/enquire:text-[#F4F3EE]"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        width={size >= 40 ? 18 : 15}
        height={size >= 40 ? 18 : 15}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="translate-x-[1px]"
      >
        <path
          d="M6.75 3.75L12 9L6.75 14.25"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ModelRow({ model }) {
  return (
    <article className="group relative w-full border-y-2 border-r-2 border-l-0 border-[#DADDE7] transition-colors duration-300 hover:bg-[#f8f6f0] active:bg-[#f8f6f0] xl:h-[400px]">
      <div className="relative mx-auto h-full w-full max-w-[1440px] px-6 py-14 xl:px-0 xl:py-0">
        {/* Desktop / Figma layout */}
        <div className="hidden xl:block">
          <img
            src={model.icon}
            alt=""
            className="absolute left-[232px] top-[94px] h-[96px] w-[96px] object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3"
          />

          <h2 className="absolute left-[376px] top-[94px] m-0 w-[430px] whitespace-nowrap font-['Playfair_Display'] text-[36px] font-bold leading-[48px] text-black">
            {model.title}
          </h2>

          <div className="absolute left-[376px] top-[181px] w-[505px] font-['Barlow'] text-[#14234E]">
            <p className="m-0 text-[16px] font-normal leading-[19px]">
              {model.subtitle}
            </p>

            <p className="mt-[14px] text-[16px] font-normal leading-[19px]">
              {model.description}
            </p>
          </div>

          <a
            href="#contact"
            className="group/enquire absolute left-[1066px] top-[286px] flex h-[50px] w-[200px] items-center no-underline"
          >
            <span
              className="font-['Barlow'] text-black transition-colors duration-300 group-hover:text-[#BE5103] group-active:text-[#BE5103] group-hover/enquire:text-[#BE5103] group-active/enquire:text-[#BE5103]"
              style={{
                fontWeight: 275,
                fontSize: "24px",
                lineHeight: "29px",
                fontVariantCaps: "all-small-caps",
                textTransform: "lowercase",
              }}
            >
              enquire
            </span>

            <span className="ml-[24px]">
              <ArrowCircle size={41.38} />
            </span>
          </a>
        </div>

        {/* Mobile / tablet safe layout */}
        <div className="grid gap-7 xl:hidden">
          <img
            src={model.icon}
            alt=""
            className="h-[82px] w-[82px] object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3"
          />

          <div>
            <h2 className="m-0 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-black sm:text-[32px]">
              {model.title}
            </h2>

            <p className="mt-5 font-['Barlow'] text-[15px] font-normal leading-[20px] text-[#14234E]">
              {model.subtitle}
            </p>

            <p className="mt-4 font-['Barlow'] text-[14px] font-normal leading-[20px] text-[#14234E]">
              {model.description}
            </p>
          </div>

          <a
            href="#contact"
            className="group/enquire flex w-fit items-center no-underline"
          >
            <span
              className="font-['Barlow'] text-black transition-colors duration-300 group-hover:text-[#BE5103] group-active:text-[#BE5103] group-hover/enquire:text-[#BE5103] group-active/enquire:text-[#BE5103]"
              style={{
                fontWeight: 275,
                fontSize: "20px",
                lineHeight: "24px",
                fontVariantCaps: "all-small-caps",
                textTransform: "lowercase",
              }}
            >
              enquire
            </span>

            <span className="ml-4">
              <ArrowCircle size={34} />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function EngagementModelsPage() {
  return (
    <main className="w-full bg-[#F4F3EE] overflow-hidden">
      <section className="relative w-full min-h-screen bg-[#F4F3EE] text-[#14234E] overflow-hidden">
        {/* Figma background pattern */}
        <img
          src={ModelsBg}
          alt=""
          className="absolute left-1/2 top-0 z-[1] h-[540px] w-[1440px] max-w-none -translate-x-1/2 object-cover pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[16px]">
          {/* Navbar */}
          <div className="relative h-[80px] w-full max-w-[1240px] mx-auto px-6 xl:px-0">
            <div className="fixed left-1/2 top-[16px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2">
              <Navbar variant="page" clientLabel="CLIENTS" />
            </div>
          </div>

          {/* Header */}
          <div className="w-full max-w-[1240px] mx-auto px-6 xl:px-0 mt-[34px]">
            <ScrollReveal direction="bottom" delay={0.05}>
              <h1 className="font-['Playfair_Display'] font-bold text-[42px] sm:text-[52px] md:text-[64px] leading-tight md:leading-[85px] text-[#14234E]">
                Engagement models.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={0.12}>
              <p className="font-['Barlow'] font-normal text-[20px] sm:text-[24px] md:text-[32px] leading-snug md:leading-[38px] text-[#14234E] mt-[8px] max-w-[726px]">
                Flexible partnerships tailored to your business needs
              </p>
            </ScrollReveal>
          </div>

          {/* Metrics */}
          <ScrollReveal
            direction="bottom"
            delay={0.18}
            className="relative mt-[50px] w-full py-10 lg:h-[200px] lg:py-0"
          >
            <div className="mx-auto flex w-full max-w-[978px] flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap lg:grid lg:h-[130px] lg:grid-cols-[269px_243px_232px] lg:gap-x-[117px] lg:pt-[35px]">
              <MetricOne />
              <MetricTwo />
              <MetricThree />
            </div>
          </ScrollReveal>

          {/* Model rows */}
          <div className="mt-[80px] md:mt-[96px] w-full">
            {models.map((model, index) => (
              <ScrollReveal
                key={model.title}
                direction="bottom"
                delay={0.06 + index * 0.06}
              >
                <ModelRow model={model} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}