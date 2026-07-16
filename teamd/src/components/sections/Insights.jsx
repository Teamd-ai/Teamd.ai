import AiTalentImage from "../../assets/images/ai-talent.png";
import BusinessImage from "../../assets/images/business.png";
import ConsultingImage from "../../assets/images/consulting.png";
import EorImage from "../../assets/images/eor.png";
import GccImage from "../../assets/images/gcc.png";
import WorkspaceImage from "../../assets/images/workspace.png";
import TestimonialImage from "../../assets/images/testimonial.jpg";

export default function Insights() {
  const articles = [
    {
      id: 1,
      readTime: "5 min read",
      date: "12 Jun 2025",
      title: "How to design a product that can grow itself 10x",
      image: AiTalentImage,
    },
    {
      id: 2,
      readTime: "5 min read",
      date: "18 Jun 2025",
      title: "Building scalable remote engineering teams",
      image: BusinessImage,
    },
    {
      id: 3,
      readTime: "6 min read",
      date: "24 Jun 2025",
      title: "The future of global workforce solutions",
      image: ConsultingImage,
    },
    {
      id: 4,
      readTime: "4 min read",
      date: "30 Jun 2025",
      title: "How AI is changing business operations",
      image: EorImage,
    },
    {
      id: 5,
      readTime: "5 min read",
      date: "05 Jul 2025",
      title: "Building global capability centers that scale",
      image: GccImage,
    },
    {
      id: 6,
      readTime: "5 min read",
      date: "10 Jul 2025",
      title: "How workspace design supports productivity",
      image: WorkspaceImage,
    },
    {
      id: 7,
      readTime: "5 min read",
      date: "15 Jul 2025",
      title: "Lessons from execution-driven global teams",
      image: TestimonialImage,
    },
  ];

  return (
    <section className="w-full bg-transparent py-0 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-[1282px] mx-auto px-6 mb-10">
        <p className="font-['Barlow'] text-[16px] tracking-[0.2em] uppercase text-[#14234E] mb-2">
          Insights
        </p>

        <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-[#14234E]">
          Perspectives, trends and lessons.
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-insights gap-[31px] w-max">
          {[...articles, ...articles].map((article, index) => (
            <div
              key={`${article.id}-${index}`}
              className="w-[350px] h-[400px] border border-[#DADDE7] bg-[#F4F3EE] flex flex-col items-center pt-[15px] flex-shrink-0 group cursor-pointer"
            >
              {/* Metadata */}
              <div className="w-[321px] flex justify-between mb-2">
                <span className="font-['Barlow'] text-[16px] text-[#1C2F5D]">
                  {article.readTime}
                </span>

                <span className="font-['Barlow'] text-[16px] text-[#1C2F5D]">
                  {article.date}
                </span>
              </div>

              {/* Image */}
              <div className="w-[321px] h-[252px] overflow-hidden bg-gray-300 mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom */}
              <div className="w-[321px] flex justify-between items-end">
                <h3 className="font-['Barlow'] text-[20px] leading-tight max-w-[220px] text-[#14234E]">
                  {article.title}
                </h3>

                <span className="font-['Barlow'] text-[20px] underline underline-offset-4 transition-colors duration-300 group-hover:text-[#BE5103]">
                  read more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
