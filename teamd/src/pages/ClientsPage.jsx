import Navbar from "../components/layout/Navbar";
import Footer from "../components/sections/Footer";
import ScrollReveal from "../components/common/ScrollReveal";

import ClientsBg from "../assets/images/clients/clients-bg.svg";
import EurotechLogo from "../assets/images/clients/eurotech-logo.svg";
import DaaLogo from "../assets/images/clients/daa-logo.svg";
import OfisphereLogo from "../assets/images/clients/ofisphere-logo.svg";
import NLogo from "../assets/images/clients/n-logo.svg";
import RoundLogo from "../assets/images/clients/round-logo.svg";
import ClientWorkspace from "../assets/images/clients/client-workspace.jpg";

const clientLogos = [
  {
    name: "Eurotech",
    logo: EurotechLogo,
  },
  {
    name: "Domestic Abuse Alliance",
    logo: DaaLogo,
  },
  {
    name: "Ofisphere",
    logo: OfisphereLogo,
  },
  {
    name: "N Logo",
    logo: NLogo,
  },
  {
    name: "Round Logo",
    logo: RoundLogo,
  },
];

function ClientLogoCard({ logo, name }) {
  return (
    <div className="flex h-[180px] w-full items-center justify-center border border-[#BE5103] md:h-[300px] md:w-[400px]">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-[70px] max-w-[190px] object-contain grayscale md:max-h-[90px] md:max-w-[240px]"
        />
      ) : (
        <span className="font-['Barlow'] text-[16px] text-[#14234E]/45">
          Logo coming soon
        </span>
      )}
    </div>
  );
}

function ClientArrowButton({ direction = "right" }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous client" : "Next client"}
      className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#BE5103] bg-transparent text-[#BE5103] transition-all duration-300 hover:bg-[#BE5103] hover:text-[#F4F3EE] md:h-[82px] md:w-[82px]"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLeft ? "rotate-180" : ""}
      >
        <path
          d="M11 7.5L18.5 15L11 22.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function ClientsPage() {
  return (
    <main className="w-full bg-[#F4F3EE] overflow-hidden">
      <section className="relative w-full bg-[#F4F3EE] text-[#14234E] overflow-hidden">
        {/* Figma background pattern */}
        <img
          src={ClientsBg}
          alt=""
          className="absolute left-1/2 top-0 z-[1] h-[540px] w-[1440px] max-w-none -translate-x-1/2 object-cover pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[16px] pb-[120px] md:pb-[260px]">
          {/* Navbar */}
          <div className="relative h-[80px] w-full max-w-[1240px] mx-auto px-6 xl:px-0">
            <div className="fixed left-1/2 top-[16px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2">
              <Navbar variant="page" clientLabel="CLIENTS" />
            </div>
          </div>

          {/* Header */}
          <div className="w-full max-w-[1240px] mx-auto px-6 xl:px-0 mt-[34px]">
            <ScrollReveal direction="bottom" delay={0.05}>
              <h1 className="m-0 max-w-[910px] font-['Playfair_Display'] text-[40px] sm:text-[52px] md:text-[64px] font-bold leading-tight md:leading-[85px] text-[#14234E]">
                Collaborating with the Leaders
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={0.12}>
              <p className="mt-[14px] max-w-[930px] font-['Barlow'] text-[20px] sm:text-[25px] md:text-[32px] font-normal leading-snug md:leading-[38px] text-[#14234E]">
                Enabling ambitious companies to expand faster with reliable,
                execution-driven offshore teams that integrate seamlessly and
                scale effortlessly.
              </p>
            </ScrollReveal>
          </div>

          {/* Logo grid */}
          <div className="mx-auto mt-[60px] grid w-full max-w-[1246px] grid-cols-1 gap-[24px] px-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-[13px] xl:gap-y-[40px] xl:px-0">
            {clientLogos.map((client, index) => (
              <ScrollReveal
                key={client.name}
                direction="bottom"
                delay={0.06 + index * 0.05}
              >
                <ClientLogoCard logo={client.logo} name={client.name} />
              </ScrollReveal>
            ))}
          </div>

          {/* Big office image */}
          <ScrollReveal
            direction="bottom"
            delay={0.12}
            className="mx-auto mt-[80px] w-full max-w-[1225px] px-6 xl:px-0"
          >
            <div className="h-[260px] w-full overflow-hidden sm:h-[380px] md:h-[539px]">
              <img
                src={ClientWorkspace}
                alt="Teamd workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Testimonial + buttons */}
          <ScrollReveal
            direction="bottom"
            delay={0.12}
            className="mx-auto mt-[28px] flex w-full max-w-[1225px] flex-col gap-10 px-6 xl:px-0 lg:flex-row lg:items-start lg:justify-between"
          >
            <div>
              <div className="w-full max-w-[559px] font-['Barlow'] text-[14px] font-normal leading-[17px] text-black">
                <p className="m-0">
                  Working with Teamd has had a significant impact on our
                  profitability and operational clarity. Our goal was to increase
                  ROI and annual profits by improving our overall profit margin.
                  Teamd&apos;s team identified a key opportunity: simplifying
                  our pricing structure.
                </p>

                <p className="m-0 mt-[17px]">
                  The result was a more transparent, streamlined approach to cost
                  management that delivered measurable gains. With Teamd&apos;s
                  strategic insight and execution, we saw immediate improvements
                  in margin control and long-term value creation. They&apos;ve
                  proven to be more than an operations partner&mdash;they&apos;re
                  a catalyst for sustainable growth.
                </p>
              </div>

              <div className="mt-[32px] w-[133px] font-['Barlow'] text-black">
                <p className="m-0 text-[14px] font-semibold leading-[17px]">
                  - Mr. Parthibhan
                </p>

                <p className="m-0 mt-[6px] text-[12px] font-normal leading-[15px]">
                  Eurotech Metals
                </p>

                <p className="m-0 text-[12px] font-normal leading-[15px]">
                  UAE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[14px] lg:pt-0">
              <ClientArrowButton direction="left" />
              <ClientArrowButton direction="right" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}