import { useEffect, useRef, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/sections/Footer";

import teamImage from "../assets/salesforce/team.jpg";
import adminImage from "../assets/salesforce/admin.jpg";
import orgReviewImage from "../assets/salesforce/org-review.jpg";

import "./SalesforcePage.css";

const stats = [
  {
    label: "In the Salesforce partner ecosystem, founder-led",
    parts: [{ text: "15" }, { text: "+ yrs", small: true }],
  },
  {
    label: "Annualised attrition once a team stabilises",
    parts: [{ text: "<", small: true }, { text: "10" }, { text: "%", small: true }],
  },
  {
    label: "People know your org, so cover is never a gap",
    parts: [{ text: "2" }],
  },
  {
    label: "Lower cost than the equivalent onshore",
    parts: [
      { text: "30" },
      { text: "\u2013", small: true },
      { text: "45" },
      { text: "%", small: true },
    ],
  },
];

const services = [
  {
    id: "keep",
    title: "Keep",
    leftLabel: "What it is",
    leftBody:
      "A named Teamd admin owns your org. They clear the request queue, keep the data clean, manage users and permissions, regression-test the three annual releases before they land, and document what they change. A second person shadows the org so leave and illness aren\u2019t a gap. One monthly review, one person to call.",
    rightLabel: "Instead of",
    rightBody:
      "A part-time hire, an accidental admin, or a ticket queue at an agency you never speak to.",
  },
  {
    id: "prove",
    title: "Prove",
    leftLabel: "What it is",
    leftBody:
      "Release regression assurance on its own. We test your org against each Salesforce release and tell you what will break before it does. Available as a single check or a standing arrangement, without the rest of the service.",
    rightLabel: "For",
    rightBody: "Companies with an internal admin who has no time to test.",
  },
  {
    id: "verify",
    title: "Verify",
    leftLabel: "What it is",
    leftBody:
      "Independent QA of what your implementation partner built, on your side of the table. We check the build against what you actually asked for and tell you what we\u2019d challenge before you sign it off. Priced as a percentage of the build budget.",
    rightLabel: "For",
    rightBody:
      "Companies mid-implementation who have no way to mark their SI\u2019s homework.",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* The four circles fade and scale in once, the first time they are seen. */
function Stats() {
  const [revealed, setRevealed] = useState(() => prefersReducedMotion());
  const wrapRef = useRef(null);

  useEffect(() => {
    if (revealed || !wrapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div className="stats" ref={wrapRef}>
      {stats.map((stat) => (
        <div key={stat.label} className={`stat${revealed ? " in-view" : ""}`}>
          <b>
            {stat.parts.map((part, i) =>
              part.small ? (
                <span key={i} className="stat-suffix">{part.text}</span>
              ) : (
                part.text
              )
            )}
          </b>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

/* Two behaviours, deliberately separate:
   - `in-view` is the one-way reveal from the design (fade, desaturate, lift).
   - `mrow-hero` is the white highlight, which follows the reader: it sits on
     whichever row is crossing the middle of the screen, and jumps to whichever
     row the mouse is over. */
function ServiceModel() {
  const reduceMotion = prefersReducedMotion();

  const [inView, setInView] = useState(() => services.map(() => reduceMotion));
  const [scrollIndex, setScrollIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const rowRefs = useRef([]);

  const activeIndex = hoverIndex ?? scrollIndex;

  // Only devices with a real pointer react to hover, so a tap on a
  // touchscreen doesn't leave a row stuck highlighted.
  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);
    if (rows.length === 0) return;

    const observers = [];

    if (!reduceMotion) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          setInView((current) => {
            const next = [...current];
            entries.forEach((entry) => {
              next[Number(entry.target.dataset.index)] = entry.isIntersecting;
            });
            return next;
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
      );
      rows.forEach((row) => revealObserver.observe(row));
      observers.push(revealObserver);
    }

    // A narrow band across the middle of the viewport. Whichever row is
    // crossing it becomes the highlighted one.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    rows.forEach((row) => activeObserver.observe(row));
    observers.push(activeObserver);

    return () => observers.forEach((observer) => observer.disconnect());
  }, [reduceMotion]);

  return (
    <div className="model">
      {services.map((service, index) => (
        <div
          key={service.id}
          data-index={index}
          ref={(element) => {
            rowRefs.current[index] = element;
          }}
          className={`mrow${inView[index] ? " in-view" : ""}${
            index === activeIndex ? " mrow-hero" : ""
          }`}
          onMouseEnter={canHover ? () => setHoverIndex(index) : undefined}
          onMouseLeave={canHover ? () => setHoverIndex(null) : undefined}
        >
          <h3>{service.title}</h3>
          <div>
            <div className="lbl">{service.leftLabel}</div>
            <p>{service.leftBody}</p>
          </div>
          <div>
            <div className="lbl">{service.rightLabel}</div>
            <p>{service.rightBody}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SalesforcePage() {
  const returnUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/thankyou`
      : "https://teamd.ai/thankyou";

  function handleSubmit(event) {
    // Web-to-Lead has no field for the user count, so fold it into the
    // Description before the browser posts the form.
    const form = event.currentTarget;
    const users = form.elements.sfUsers?.value?.trim();
    if (users) {
      const description = form.elements.description;
      description.value = `Salesforce users: ${users}\n\n${description.value}`;
    }
    window.setTimeout(() => {
      window.location.href = "/thankyou";
    }, 800);
  }

  return (
    <main className="sf-page w-full overflow-hidden">
      {/* Shared navbar, pinned to the top of the viewport.
          The outer wrappers reserve the 80px the fixed bar no longer
          occupies, so the hero doesn't slide underneath it. */}
      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-5 pt-[45px] sm:px-8 lg:px-0">
        <div className="relative h-[80px] w-full">
          <div className="fixed left-1/2 top-[16px] z-[999] w-[calc(100%-40px)] max-w-[1240px] -translate-x-1/2">
            <Navbar variant="page" clientLabel="CLIENTS" />
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="wrap hero">
        <div>
          <h1>Your Salesforce is somebody&rsquo;s second job.</h1>
          <p className="lede">
            We give it an owner. A named Teamd admin who runs your org, clears the
            request queue, handles the three annual releases, and writes down how
            it all works.
          </p>
          <p className="hero-note">
            For companies with roughly 10 to 75 Salesforce users &mdash; too many
            to leave it to chance, not enough to justify a full-time hire.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#book">
              Book a 20-minute org review
            </a>
            <a className="btn btn-ghost" href="#what">
              See what&rsquo;s included
            </a>
          </div>
        </div>

        <div className="log" aria-label="Example monthly org report">
          <div className="log-head">
            <span className="log-title">Your org &mdash; March</span>
            <span className="log-sub">Owned by Priya S. &middot; Teamd</span>
          </div>
          <div className="log-row">
            <span className="log-what">
              14 requests closed, longest open 2 days
              <span className="tag tag-req">Queue</span>
            </span>
            <span className="log-meta">Was 3 weeks</span>
          </div>
          <div className="log-row">
            <span className="log-what">
              Spring release regression-tested in sandbox
              <span className="tag tag-pro">Proactive</span>
            </span>
            <span className="log-meta">2 breaks caught</span>
          </div>
          <div className="log-row">
            <span className="log-what">
              Retired 19 reports nobody had opened since June
            </span>
            <span className="log-meta">Org cleanup</span>
          </div>
          <div className="log-row">
            <span className="log-what">
              Reclaimed 6 licences from dormant users
              <span className="tag tag-pro">Proactive</span>
            </span>
            <span className="log-meta">&pound;5,400/yr</span>
          </div>
          <div className="log-row row-new">
            <span className="log-what">Documented the quoting flow. Finally.</span>
            <span className="log-meta">New</span>
          </div>
          <div className="log-foot">
            You get this every month, in a 30-minute review. Not a ticket count.
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="band sec bg-white">
        <div className="wrap">
          <div className="sec-media">
            <div>
              <h2 style={{ maxWidth: "52ch" }}>
                We&rsquo;ve run Salesforce teams for fifteen years. Running teams
                is the best of what Teamd does.
              </h2>
              <p className="body">
                Teamd builds and operates dedicated teams in India for companies
                across EMEA and APAC. That infrastructure is why we can promise
                your org an owner rather than a consultant who is on your account
                until they aren&rsquo;t.
              </p>
            </div>
            <img
              src={teamImage}
              alt="Teamd Salesforce team working at their desks"
              loading="lazy"
            />
          </div>
          <Stats />
        </div>
      </section>

      {/* SOUND FAMILIAR */}
      <section className="sec bg-cream">
        <div className="wrap">
          <h2 className="h-lg" style={{ maxWidth: "14ch" }}>
            Sound familiar?
          </h2>
          <ul className="familiar">
            <li>Salesforce belongs to whoever raised their hand three years ago.</li>
            <li>Nobody can explain why that validation rule exists.</li>
            <li>Half your reports haven&rsquo;t been opened since last summer.</li>
            <li>
              Three Salesforce releases land every year whether or not anyone is
              watching.
            </li>
            <li>Your admin takes leave and change requests simply stop.</li>
            <li>You&rsquo;re paying for licences that nobody logs into.</li>
          </ul>
        </div>
      </section>

      {/* WEDGE */}
      <section className="sec bg-white">
        <div className="wrap two">
          <div>
            <h2 className="h-lg" style={{ maxWidth: "32ch" }}>
              The accidental admin was a good decision that expired.
            </h2>
            <p className="body" style={{ marginTop: "24px" }}>
              Someone tech-savvy volunteered when Salesforce went live. That was
              sensible &mdash; cheap, fast, and it worked.
            </p>
            <p className="body" style={{ marginTop: "16px" }}>
              But integration, adoption, automation, training and release
              management are five different jobs, and they all quietly landed on
              one person who already had a full-time role. They are not
              underperforming. They are absorbing something no single part-timer
              can carry.
            </p>
            <p className="punch">
              The platform is fine. It just doesn&rsquo;t belong to anybody.
            </p>
          </div>
          <div>
            <ul className="decay">
              <li>
                <span className="wk">Year 1</span>
                <span className="txt">
                  Someone raises their hand. Requests are small. It works.
                </span>
              </li>
              <li>
                <span className="wk">Year 2</span>
                <span className="txt">
                  More users, more apps, more automation. Still their side job.
                </span>
              </li>
              <li>
                <span className="wk">Year 3</span>
                <span className="txt">
                  Changes get avoided because nobody is sure what they&rsquo;ll
                  break.
                </span>
              </li>
              <li>
                <span className="wk">The day they leave</span>
                <span className="txt">
                  Nothing is documented, and the org becomes a research project.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sec bg-cream" id="what">
        <div className="wrap">
          <div
            className="sec-media"
            style={{ marginBottom: "clamp(36px, 4vw, 56px)" }}
          >
            <div>
              <h2 className="h-lg" style={{ maxWidth: "28ch" }}>
                Three things. Most clients only need the first.
              </h2>
            </div>
            <img
              src={adminImage}
              alt="Teamd Salesforce admin at work"
              loading="lazy"
            />
          </div>
          <ServiceModel />
        </div>
      </section>

      {/* DISCIPLINE */}
      <section className="discipline sec">
        <div className="wrap">
          <h2 className="h-lg" style={{ maxWidth: "35ch" }}>
            Two rules that cost us money, and are the reason to trust us.
          </h2>
          <ul className="pledge">
            <li>
              <b>Run first</b>
              <span>
                We don&rsquo;t sell you a build. If your org needs new work,
                we&rsquo;ll propose it at a quarterly review with evidence from
                running it &mdash; not in a pitch before we&rsquo;ve seen anything.
                Most partners meet you at the largest project they can justify.
                We&rsquo;d rather meet you at the smallest thing that&rsquo;s
                actually broken.
              </span>
            </li>
            <li>
              <b>One side</b>
              <span>
                On any given client we are either the assurance partner or the
                delivery partner, and we say which in writing before we start. We
                don&rsquo;t switch without your written instruction and a
                cooling-off period. Nobody should mark their own homework,
                including us.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section className="sec bg-cream" id="price">
        <div className="wrap two" style={{ alignItems: "center" }}>
          <div>
            <h2 className="h-lg" style={{ maxWidth: "26ch" }}>
              One org. One named admin. One monthly fee.
            </h2>
            <p className="body" style={{ marginTop: "24px" }}>
              No hourly drawdown, no bench time, no change request for every small
              fix. You know what it costs and we know what we owe you.
            </p>
            <ul className="compare">
              <li>
                <span>UK Salesforce admin, median salary</span>
                <b>&pound;46,000</b>
              </li>
              <li>
                <span>Loaded cost of that same hire</span>
                <b>~&pound;58,000</b>
              </li>
              <li>
                <span>UK consultancy day rate</span>
                <b>&pound;800&ndash;&pound;1,500</b>
              </li>
              <li>
                <span>Teamd Keep, per year</span>
                <b>&pound;XX,XXX</b>
              </li>
            </ul>
            <a
              className="btn btn-primary"
              href="#book"
              style={{ marginTop: "32px" }}
            >
              Book a 20-minute org review
            </a>
          </div>
          <div className="unit">
            <dl>
              <dt>Named admin owning your org</dt>
              <dd>Included</dd>
              <dt>Request queue, users, permissions, data</dt>
              <dd>Included</dd>
              <dt>Release regression testing, 3&times; a year</dt>
              <dd>Included</dd>
              <dt>Documentation as we go</dt>
              <dd>Included</dd>
              <dt>Second person shadowing the org</dt>
              <dd>Included</dd>
              <dt>Monthly review with your team</dt>
              <dd>Included</dd>
              <dt>Recruitment, payroll, cover, replacement</dt>
              <dd>Ours</dd>
            </dl>
            <div className="total">
              <div className="figure">
                &pound;X,XXX
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--navy-600)",
                  }}
                >
                  {" "}
                  / month
                </span>
              </div>
              <p className="fine">
                Three-month initial term, monthly thereafter. Larger orgs and
                multi-cloud priced after a look at your setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORG REVIEW */}
      <section className="sec bg-white bg-textured">
        <div className="wrap">
          <div className="sec-media reverse">
            <img
              src={orgReviewImage}
              alt="Teamd team reviewing a client's Salesforce org"
              loading="lazy"
            />
            <div>
              <h2 className="h-lg" style={{ maxWidth: "38ch" }}>
                Start with a look at your org. It&rsquo;s free and it&rsquo;s
                useful either way.
              </h2>
              <p className="body" style={{ marginTop: "20px" }}>
                Twenty minutes and read access to your org. We&rsquo;ll come back
                with what we found: unused licences, automation nobody can explain,
                reports that have gone stale, and the two or three things
                we&rsquo;d fix first.
              </p>
              <p className="body" style={{ marginTop: "18px" }}>
                You keep the findings whether or not you work with us. If your
                accidental admin is doing fine and just needs cover for the
                releases, we&rsquo;ll tell you that too &mdash; it&rsquo;s a much
                smaller engagement and we&rsquo;d rather sell you the right one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="close sec bg-cream" id="book">
        <div className="wrap">
          <h2 style={{ maxWidth: "28ch" }}>
            Who owns your Salesforce on a Tuesday afternoon?
          </h2>
          <p
            className="body"
            style={{
              color: "var(--navy-600)",
              marginTop: "20px",
              maxWidth: "52ch",
            }}
          >
            If the answer is &ldquo;Sarah, when she gets a minute&rdquo;,
            that&rsquo;s the conversation. Twenty minutes, no deck.
          </p>

          <form
            className="form"
            method="POST"
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DF9000003fA6L"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="oid" value="00DF9000003fA6L" />
            <input type="hidden" name="retURL" value={returnUrl} />
            <div>
              <label htmlFor="first_name">First name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                maxLength={40}
                required
              />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                maxLength={80}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={80}
                required
              />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={40}
                required
              />
            </div>
            <div>
              <label htmlFor="users">Salesforce users, roughly</label>
              <input
                id="users"
                name="sfUsers"
                type="text"
                inputMode="numeric"
                placeholder="35"
              />
            </div>
            <div className="full">
              <label htmlFor="pain">What&rsquo;s annoying you most? (optional)</label>
              <textarea
                id="pain"
                name="description"
                placeholder="Our admin left in January and nobody has touched it since."
              />
            </div>
            <div className="full">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "100%" }}
              >
                Book a 20-minute org review
              </button>
              <p className="reassure">
                We&rsquo;ll come back within one working day with a time. No
                proposal deck, no discovery phase, no salesperson.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Shared footer, minus the "Request a call" CTA — this page
          already closes with its own form. */}
      <Footer showCta={false} />
    </main>
  );
}
