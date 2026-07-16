import Navbar from "../components/layout/Navbar";
import ScrollReveal from "../components/common/ScrollReveal";

import SolutionsBg from "../assets/images/solutions/solutions-bg.svg";
import TeamdWatermark from "../assets/footer/teamd-watermark.svg";
import WhatsappIcon from "../assets/footer/whatsapp.svg";
import LinkedinIcon from "../assets/footer/linkedin.svg";

export default function ContactPage() {
  const returnUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/thankyou`
      : "https://teamd.ai/thankyou";

  function handleSubmit() {
    window.setTimeout(() => {
      window.location.href = "/thankyou";
    }, 800);
  }

  return (
    <main className="w-full overflow-hidden bg-[#BE5103]">
      <section
        id="contact"
        className="relative mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden bg-[#BE5103] text-[#F4F3EE] lg:min-h-[1024px]"
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

        {/* Teamd SVG watermark */}
        <img
          src={TeamdWatermark}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 z-[1] block h-[260px] w-full max-w-none object-cover opacity-100 sm:h-[320px] xl:h-[365px]"
          style={{
            objectPosition: "center bottom",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pt-[45px] sm:px-8 lg:px-0">
          {/* Navbar wrapper prevents breaking */}
          <div className="relative h-[80px] w-full">
            <div className="fixed left-1/2 top-[16px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2">
              <Navbar variant="page" clientLabel="CLIENTS" />
            </div>
          </div>

          {/* Hidden iframe keeps Salesforce blank page hidden */}
          <iframe
            title="salesforce-hidden-submit"
            name="salesforce-hidden-submit"
            className="hidden"
          />

          {/* Form box */}
          <ScrollReveal direction="bottom" delay={0.08}>
            <div className="mx-auto mt-[76px] w-full max-w-[932px] overflow-hidden rounded-[12px] bg-[#F4F3EE] shadow-[0_18px_60px_rgba(0,0,0,0.18)] lg:ml-[153px]">
              <div className="relative bg-[#14234E] px-5 py-7 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#BE5103] sm:px-9 sm:py-8">
                <h1 className="m-0 font-['Playfair_Display'] text-[26px] font-extrabold leading-[31px] text-white">
                  Get in Touch
                </h1>

                <p className="mt-[5px] font-['Barlow'] text-[13px] font-light leading-[18px] tracking-[0.01em] text-white/50">
                  We&apos;ll get back to you within one business day.
                </p>
              </div>

              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DF9000003fA6L"
                method="POST"
                target="salesforce-hidden-submit"
                onSubmit={handleSubmit}
                className="px-5 py-8 sm:px-9 sm:py-9"
              >
                <input type="hidden" name="oid" value="00DF9000003fA6L" />
                <input type="hidden" name="retURL" value={returnUrl} />

                <p className="mb-[18px] font-['Barlow'] text-[12px] font-normal leading-[16px] text-[#7A756F]">
                  <span className="text-[#BE5103]">*</span> Required fields
                </p>

                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                  <div className="mb-[18px] flex flex-col gap-[7px]">
                    <label
                      htmlFor="first_name"
                      className="font-['Barlow'] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7A756F]"
                    >
                      First Name <span className="text-[#BE5103]">*</span>
                    </label>

                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      maxLength="40"
                      placeholder="Jane"
                      required
                      className="h-[44px] w-full rounded-[4px] border-[1.5px] border-[#E2DDD8] bg-white px-[13px] font-['Barlow'] text-[14px] text-[#14234E] outline-none transition-all duration-200 placeholder:text-[#C2BDB7] focus:border-[#BE5103] focus:shadow-[0_0_0_3px_#F2E8E3]"
                    />
                  </div>

                  <div className="mb-[18px] flex flex-col gap-[7px]">
                    <label
                      htmlFor="last_name"
                      className="font-['Barlow'] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7A756F]"
                    >
                      Last Name <span className="text-[#BE5103]">*</span>
                    </label>

                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      maxLength="80"
                      placeholder="Smith"
                      required
                      className="h-[44px] w-full rounded-[4px] border-[1.5px] border-[#E2DDD8] bg-white px-[13px] font-['Barlow'] text-[14px] text-[#14234E] outline-none transition-all duration-200 placeholder:text-[#C2BDB7] focus:border-[#BE5103] focus:shadow-[0_0_0_3px_#F2E8E3]"
                    />
                  </div>
                </div>

                <div className="mb-[18px] flex flex-col gap-[7px]">
                  <label
                    htmlFor="email"
                    className="font-['Barlow'] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7A756F]"
                  >
                    Email Address <span className="text-[#BE5103]">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    maxLength="80"
                    placeholder="jane@company.com"
                    required
                    className="h-[44px] w-full rounded-[4px] border-[1.5px] border-[#E2DDD8] bg-white px-[13px] font-['Barlow'] text-[14px] text-[#14234E] outline-none transition-all duration-200 placeholder:text-[#C2BDB7] focus:border-[#BE5103] focus:shadow-[0_0_0_3px_#F2E8E3]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                  <div className="mb-[18px] flex flex-col gap-[7px]">
                    <label
                      htmlFor="company"
                      className="font-['Barlow'] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7A756F]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      maxLength="40"
                      placeholder="Acme Inc."
                      className="h-[44px] w-full rounded-[4px] border-[1.5px] border-[#E2DDD8] bg-white px-[13px] font-['Barlow'] text-[14px] text-[#14234E] outline-none transition-all duration-200 placeholder:text-[#C2BDB7] focus:border-[#BE5103] focus:shadow-[0_0_0_3px_#F2E8E3]"
                    />
                  </div>

                  <div className="mb-[18px] flex flex-col gap-[7px]">
                    <label
                      htmlFor="phone"
                      className="font-['Barlow'] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7A756F]"
                    >
                      Phone <span className="text-[#BE5103]">*</span>
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      maxLength="40"
                      placeholder="+1 555 000 0000"
                      required
                      inputMode="numeric"
                      pattern="[0-9+\s\-\(\)]*"
                      onInput={(event) => {
                        event.currentTarget.value =
                          event.currentTarget.value.replace(
                            /[^0-9+\s\-()]/g,
                            ""
                          );
                      }}
                      className="h-[44px] w-full rounded-[4px] border-[1.5px] border-[#E2DDD8] bg-white px-[13px] font-['Barlow'] text-[14px] text-[#14234E] outline-none transition-all duration-200 placeholder:text-[#C2BDB7] focus:border-[#BE5103] focus:shadow-[0_0_0_3px_#F2E8E3]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="description"
                    className="font-['Barlow'] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7A756F]"
                  >
                    How can we help?
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    placeholder="Tell us a bit about your project or question..."
                    className="min-h-[100px] w-full resize-y rounded-[4px] border-[1.5px] border-[#E2DDD8] bg-white px-[13px] py-[11px] font-['Barlow'] text-[14px] leading-[22px] text-[#14234E] outline-none transition-all duration-200 placeholder:text-[#C2BDB7] focus:border-[#BE5103] focus:shadow-[0_0_0_3px_#F2E8E3]"
                  />
                </div>

                <div className="my-[22px] h-px w-full bg-[#E2DDD8]" />

                <button
                  type="submit"
                  name="submit"
                  className="h-[46px] w-full rounded-[4px] border-0 bg-[#BE5103] font-['Barlow'] text-[14px] font-semibold tracking-[0.03em] text-white transition-all duration-200 hover:bg-[#9A4102] hover:shadow-[0_4px_14px_rgba(190,81,3,0.35)]"
                >
                  Submit
                </button>

                <p className="mt-[14px] text-center font-['Barlow'] text-[11.5px] font-normal leading-[16px] text-[#7A756F]">
                  Your information is kept private and never shared.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact info box */}
          <ScrollReveal direction="bottom" delay={0.16}>
            <div className="mx-auto mt-[44px] grid w-full max-w-[932px] grid-cols-1 gap-7 rounded-[12px] bg-[#F4F3EE] px-5 py-6 font-['Jost'] text-[14px] font-light leading-[20px] text-[#14234E] shadow-[0_18px_60px_rgba(0,0,0,0.12)] md:grid-cols-[1.4fr_0.6fr_0.6fr_auto] md:items-start md:gap-10 lg:ml-[153px]">
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
                  9043611492
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
          </ScrollReveal>
        </div>

        {/* Copyright */}
        <p className="absolute bottom-[16px] right-5 z-10 m-0 hidden font-['Barlow'] text-[12px] font-normal leading-[14px] text-[#DA7635] md:block lg:right-[66px]">
          © 2025 Teamd Global Business Solutions Private Limited | Sitemap
        </p>
      </section>
    </main>
  );
}