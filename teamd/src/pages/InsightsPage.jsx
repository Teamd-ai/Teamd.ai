import Navbar from "../components/layout/Navbar";
import Footer from "../components/sections/Footer";

import ArticleImage from "../assets/images/business.png";

const articles = [
  {
    id: 1,
    readTime: "5 min read",
    date: "12 Jun 2025",
    title: "How to design a product that can grow itself 10x",
  },
  {
    id: 2,
    readTime: "5 min read",
    date: "18 Jun 2025",
    title: "How to design a product that can grow itself 10x",
  },
  {
    id: 3,
    readTime: "5 min read",
    date: "24 Jun 2025",
    title: "How to design a product that can grow itself 10x",
  },
  {
    id: 4,
    readTime: "5 min read",
    date: "30 Jun 2025",
    title: "How to design a product that can grow itself 10x",
  },
  {
    id: 5,
    readTime: "5 min read",
    date: "05 Jul 2025",
    title: "How to design a product that can grow itself 10x",
  },
  {
    id: 6,
    readTime: "5 min read",
    date: "10 Jul 2025",
    title: "How to design a product that can grow itself 10x",
  },
  {
    id: 7,
    readTime: "5 min read",
    date: "15 Jul 2025",
    title: "How to design a product that can grow itself 10x",
  },
];

const fadeBgStyle = {
  background:
    "radial-gradient(50% 50% at 50% 50%, #D86717 0%, #BE5103 100%)",
};

function InsightCard({ article }) {
  return (
    <article className="h-[400px] w-[350px] border border-[#DADDE7] bg-transparent p-[15px]">
      <div className="mb-[12px] flex w-full items-center justify-between font-['Barlow'] text-[14px] leading-[17px] text-[#14234E]">
        <span>{article.readTime}</span>
        <span>{article.date}</span>
      </div>

      <div className="h-[252px] w-[321px] overflow-hidden">
        <img
          src={ArticleImage}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-[20px] flex w-full items-end justify-between gap-4">
        <h2 className="m-0 max-w-[210px] font-['Barlow'] text-[18px] font-normal leading-[22px] text-[#14234E]">
          {article.title}
        </h2>

        <a
          href="#"
          className="font-['Barlow'] text-[14px] font-normal leading-[17px] text-[#14234E] underline underline-offset-4"
        >
          read more
        </a>
      </div>
    </article>
  );
}

export default function InsightsPage() {
  return (
    <main className="w-full overflow-hidden bg-[#BE5103]">
      <section className="relative w-full overflow-hidden bg-[#BE5103] text-[#F4F3EE]">
        {/* Figma fade background */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-[1] h-full w-[1440px] max-w-none -translate-x-1/2 overflow-hidden">
          {/* fadebg: width 2332px, height 1063px, left -492px, top -139px */}
          <div className="absolute left-[-492px] top-[-139px] h-[1063px] w-[2332px]">
            {/* Ellipse 2 */}
            <div
              className="absolute left-0 top-[120px] h-[943px] w-[943px] rounded-full"
              style={fadeBgStyle}
            />

            {/* Ellipse 1 */}
            <div
              className="absolute left-[1389px] top-0 h-[943px] w-[943px] rounded-full"
              style={fadeBgStyle}
            />
          </div>

          {/* Bottom fadebg: width 943px, height 943px, left 251px, top 664px */}
          <div
            className="absolute left-[251px] top-[664px] h-[943px] w-[943px] rounded-full"
            style={fadeBgStyle}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] pt-[16px]">
          {/* Navbar */}
          <div className="mx-auto w-full max-w-[1240px] px-6 xl:px-0">
            <Navbar variant="page" clientLabel="CLIENTS" />
          </div>

          {/* Heading */}
          <div className="mx-auto mt-[34px] w-full max-w-[1240px] px-6 xl:px-0">
            <h1 className="m-0 font-['Playfair_Display'] text-[44px] font-bold leading-tight text-[#F4F3EE] sm:text-[54px] md:text-[64px] md:leading-[85px]">
              Insights.
            </h1>

            <p className="mt-[8px] max-w-[930px] font-['Barlow'] text-[18px] font-normal leading-snug text-[#F4F3EE] sm:text-[24px] md:text-[32px] md:leading-[38px]">
              Perspectives on building, scaling, and operating global teams.
            </p>
          </div>

          {/* Cards grid */}
          <div className="mx-auto mt-[60px] grid w-full max-w-[1130px] grid-cols-1 justify-items-center gap-x-[31px] gap-y-[37px] px-6 md:grid-cols-2 xl:grid-cols-3 xl:px-0">
            {articles.map((article) => (
              <InsightCard key={article.id} article={article} />
            ))}
          </div>

          {/* Space before footer */}
          <div className="h-[120px] md:h-[160px]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
