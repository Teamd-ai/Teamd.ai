import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({
  variant = "default",
  clientLabel = "CLIENTS",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SOLUTIONS", path: "/solutions" },
    { name: "ENGAGEMENT MODELS", path: "/engagement-models" },
    { name: clientLabel, path: "/clients" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isPage = variant === "page";

  return (
    <div
      className={
        isPage
          ? "relative w-full"
          : "relative flex w-full justify-center bg-transparent px-0 py-0"
      }
    >
      <nav className="relative z-50 flex h-[80px] w-full items-center justify-between border border-[#BE5103] bg-[#F4F3EE] px-[18px] md:px-[40px]">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="relative flex h-[38px] w-[102px] shrink-0 items-center overflow-hidden no-underline md:h-[51.92px] md:w-[136px]"
        >
          <img
            src="/teamd-logo.svg"
            alt="Teamd"
            className="absolute left-0 top-0 h-full w-[104px] max-w-none object-cover md:w-[138px]"
            style={{
              clipPath: "inset(0 2px 0 0)",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center lg:flex lg:gap-[20px] xl:gap-[26px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap font-['Barlow'] text-[16px] font-normal leading-[24px] [font-variant:all-small-caps] no-underline transition-colors duration-200 xl:text-[20px] ${
                  isActive
                    ? "text-[#BE5103]"
                    : "text-black hover:text-[#BE5103]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center text-black lg:hidden"
        >
          {!isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-[79px] z-50 overflow-hidden border border-t-0 border-[#BE5103] bg-[#F4F3EE] transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-['Barlow'] text-[18px] font-normal leading-[24px] [font-variant:all-small-caps] no-underline ${
                    isActive
                      ? "text-[#BE5103]"
                      : "text-black hover:text-[#BE5103]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}