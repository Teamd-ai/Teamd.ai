export default function RolesMarquee() {
  const roles = [
    "Design Engineer",
    "Caseworker",
    "Salesforce Developer",
    "Business Analyst",
    "UI/UX Designer",
    "Accounts Assistant",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#F4F3EE] py-6">
      <div className="overflow-hidden">
        {/* Moving Track */}
        <div
          className="flex w-max animate-marquee pointer-events-none"
          style={{ animationPlayState: "running" }}
        >
          {/* First Copy */}
          {roles.map((role, index) => (
            <RoleCard key={`first-${index}`} title={role} />
          ))}

          {/* Second Copy */}
          {roles.map((role, index) => (
            <RoleCard key={`second-${index}`} title={role} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ title }) {
  return (
    <div
      className="
      w-[233px]
      h-[75px]
      mx-2
      rounded-[20px]
      border
      border-[#BE5103]
      flex
      items-center
      justify-center
      bg-[#F4F3EE]
      text-black
      transition-all
      duration-300
      flex-shrink-0
    "
    >
      <span className="text-[20px] font-medium">{title}</span>
    </div>
  );
}