import Navbar from "../components/layout/Navbar";

import TeamdWatermark from "../assets/footer/teamd-watermark.svg";
import WhatsappIcon from "../assets/footer/whatsapp.svg";
import LinkedinIcon from "../assets/footer/linkedin.svg";

export default function ThankYouPage() {
  return (
    <main className="w-full overflow-hidden bg-[#F4F3EE]">
      <section className="relative mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden bg-[#F4F3EE] text-[#14234E]">
        {/* Navbar */}
        <div className="relative z-20 mx-auto w-full max-w-[1240px] px-5 pt-[45px] sm:px-8 lg:px-0">
          <div className="relative h-[80px] w-full">
            <div className="fixed left-1/2 top-[16px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2">
              <Navbar variant="page" clientLabel="CLIENTS" />
            </div>
          </div>
        </div>

        {/* Thank you text */}
        <div className="relative z-10 flex min-h-[430px] w-full items-center justify-center px-6 pt-[40px]">
          <h1 className="m-0 whitespace-pre font-['Playfair_Display'] text-[52px] font-normal leading-[1.2] tracking-[0em] text-[#BE5103] sm:text-[64px] md:text-[80px]">
            Thank you!
          </h1>
        </div>

        {/* Contact info */}
        <div className="relative z-10 mx-auto mt-[10px] grid w-full max-w-[932px] grid-cols-1 gap-7 px-6 font-['Jost'] text-[14px] font-light leading-[20px] text-[#14234E] md:grid-cols-[1.4fr_0.6fr_0.6fr_auto] md:items-start md:gap-10 xl:px-0">
          <div>
            <p className="m-0">
              Teamd Global Business Solutions Private Limited
            </p>

            <div className="mt-[11px] flex items-center gap-[18px]">
              <span>Bangalore</span>
              <span className="h-[14px] w-px bg-[#14234E]/50" />
              <span>Coimbatore</span>
            </div>
          </div>

          <div>
            <a
              href="mailto:info@teamd.co.in"
              className="block text-[#14234E] no-underline hover:underline"
            >
              info@teamd.co.in
            </a>

            <a
              href="tel:9043611492"
              className="mt-[11px] block text-[#14234E] no-underline hover:underline"
            >
              +91 90436 11492
            </a>
          </div>

          <div />

          <div className="flex items-center gap-[20px] md:justify-end">
            <a
              href="https://wa.me/919043611492"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src={WhatsappIcon}
                alt=""
                className="block h-[30px] w-[30px]"
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={LinkedinIcon}
                alt=""
                className="block h-[30px] w-[30px]"
              />
            </a>
          </div>
        </div>

        {/* Teamd watermark */}
        <img
          src={TeamdWatermark}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 z-[1] block h-[260px] w-full max-w-none object-cover opacity-[0.08] sm:h-[320px] xl:h-[365px]"
          style={{
            objectPosition: "center bottom",
          }}
        />

        {/* Copyright */}
        <p className="absolute bottom-[16px] right-5 z-10 m-0 hidden font-['Barlow'] text-[12px] font-normal leading-[14px] text-[#BE5103] md:block lg:right-[66px]">
          © 2025 Teamd Global Business Solutions Private Limited | Sitemap
        </p>
      </section>
    </main>
  );
}