import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import TeamdWatermark from "../assets/footer/teamd-watermark.svg";

export default function NotFoundPage() {
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

        {/* 404 content */}
        <div className="relative z-10 flex min-h-[520px] w-full flex-col items-center justify-center px-6 text-center">
          <p className="m-0 font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#14234E]">
            Page not found
          </p>

          <h1 className="m-0 mt-[12px] font-['Playfair_Display'] text-[72px] font-normal leading-[1.1] text-[#BE5103] sm:text-[96px] md:text-[120px]">
            404
          </h1>

          <p className="mt-[18px] max-w-[520px] font-['Barlow'] text-[18px] font-normal leading-[26px] text-[#14234E]">
            The page you are looking for does not exist or may have been moved.
          </p>

          <Link
            to="/"
            className="mt-[34px] flex h-[46px] w-[170px] items-center justify-center rounded-[4px] bg-[#BE5103] font-['Barlow'] text-[14px] font-semibold tracking-[0.03em] text-white no-underline transition-all duration-300 hover:bg-[#9A4102]"
          >
            Back to Home
          </Link>
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