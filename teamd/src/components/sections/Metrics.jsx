import MetricsSection from "../../assets/images/home/metrics-section.svg";

export default function Metrics() {
  return (
    <section className="w-full overflow-hidden bg-[#F4F3EE]">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <img
          src={MetricsSection}
          alt="Teamd performance metrics"
          className="h-auto w-full max-w-none"
        />
      </div>
    </section>
  );
}