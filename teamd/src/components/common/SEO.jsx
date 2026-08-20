import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMetadata = {
  "/": {
    title: "Teamd — Managed Offshore Teams in India, Amplified by AI",
    description:
      "Teamd builds and runs dedicated offshore teams for growth-stage companies in the UK, Europe, GCC and US. 30–45% lower operating cost, 40% faster time-to-productivity, under 10% attrition.",
  },
  "/solutions": {
    title: "Solutions | Teamd",
    description:
      "Explore Teamd's AI talent, workforce, and execution solutions designed to help companies build capable offshore teams and accelerate business results.",
  },
  "/engagement-models": {
    title: "Engagement Models | Teamd",
    description:
      "Explore Teamd's GCC, EOR, BOT, and Dedicated Teams models for building and operating offshore capability in India around your business needs.",
  },
  "/clients": {
    title: "Clients | Teamd",
    description:
      "See how Teamd helps ambitious companies expand faster with reliable, execution-driven offshore teams that integrate seamlessly and scale with the business.",
  },
  "/contact": {
    title: "Contact Teamd | Build Your Offshore Team",
    description:
      "Talk to Teamd about building and operating an offshore team in India. Tell us about your requirements and we'll get back to you within one business day.",
  },
};

export default function SEO() {
  const { pathname } = useLocation();

  const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
  const canonicalUrl = `https://teamd.ai${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = metadata.title;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute("content", metadata.description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [metadata, canonicalUrl]);

  return null;
}