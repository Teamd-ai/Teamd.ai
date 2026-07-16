import testimonial from "../../assets/images/testimonial.jpg";

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-[#F4F3EE]">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-16 lg:h-[650px] lg:px-0 lg:py-0">
        {/* Left image */}
        <div className="relative w-full overflow-hidden bg-gray-300 lg:absolute lg:left-[135px] lg:top-[100px] lg:h-[538px] lg:w-[740px]">
          <img
            src={testimonial}
            alt="Office Space"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right text area */}
        <div className="mt-10 w-full lg:absolute lg:left-[933px] lg:top-[56px] lg:mt-0 lg:w-[366px]">
          {/* Client stories */}
          <p className="m-0 font-['Barlow'] text-[16px] font-[275] leading-[19px] [font-variant:all-small-caps] text-black lg:text-right">
            CLIENT STORIES
          </p>

          {/* Heading */}
          <h2 className="m-0 mt-0 w-full font-['Playfair_Display'] text-[32px] font-extrabold leading-[43px] capitalize text-black lg:text-right">
            Proven Transformations For Global Teams
          </h2>
        </div>

        {/* Paragraph */}
        <p className="mt-8 w-full font-['Barlow'] text-[14px] font-normal leading-[17px] text-black lg:absolute lg:left-[957px] lg:top-[190px] lg:mt-0 lg:h-[221px] lg:w-[324px] lg:text-right">
          Working with Teamd has had a significant impact on our profitability
          and operational clarity. Our goal was to increase ROI and annual
          profits by improving our overall profit margin. Teamd&apos;s team
          identified a key opportunity: simplifying our pricing structure.
          <br />
          <br />
          The result was a more transparent, streamlined approach to cost
          management that delivered measurable gains. With Teamd&apos;s strategic
          insight and execution, we saw immediate improvements in margin control
          and long-term value creation. They&apos;ve proven to be more than an
          operations partner&mdash;they&apos;re a catalyst for sustainable growth.
        </p>

        {/* Author */}
        <div className="mt-10 w-full lg:absolute lg:left-[1154px] lg:top-[525px] lg:mt-0 lg:w-[133px]">
          <div className="flex items-baseline justify-start gap-[8px] lg:justify-end">
            <span className="font-['Jost'] text-[16px] font-normal leading-[23px] text-black">
              -
            </span>

            <p className="m-0 font-['Playfair_Display'] text-[20px] font-medium leading-[27px] text-black">
              Mr.Parthiban
            </p>
          </div>

          <p className="m-0 mt-[2px] font-['Barlow'] text-[14px] font-light leading-[17px] text-black lg:text-right">
            Eurotech Metals
            <br />
            UAE
          </p>
        </div>
      </div>
    </section>
  );
}