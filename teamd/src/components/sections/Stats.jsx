export default function Stats() {
  return (
    <section className="w-full bg-[#F4F3EE] flex justify-center overflow-hidden">
      {/* Main Container */}
      <div className="w-full max-w-[1440px] min-h-[200px] flex items-center justify-center px-6 py-12">

        {/* Inner Stats */}
        <div className="w-full max-w-[910px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">

          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-medium text-[64px] leading-none">
              5-40
            </div>

            <p className="text-[18px] mt-2">
              In &lt;12 Months
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-[79px] bg-[#BE5103]" />

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="leading-none">
              <span className="font-medium text-[64px]">50</span>
              <span className="font-medium text-[32px]">%+</span>
            </div>

            <p className="text-[18px] mt-2 leading-tight">
              Realised Cost
              <br />
              Optimisation
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-[79px] bg-[#BE5103]" />

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="leading-none">
              <span className="font-medium text-[64px]">40</span>
              <span className="font-medium text-[32px]">%</span>
            </div>

            <p className="text-[18px] mt-2 leading-tight">
              Cut In Time-To-
              <br />
              Productivity
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
