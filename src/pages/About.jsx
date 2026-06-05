import { BUSINESS, ABOUT_IMG } from "../data.js";
import { CtaBand } from "../components/ui.jsx";

const VALUES = [
  { t: "Honesty First", d: "We recommend only the work your vehicle actually needs and explain it in plain language — no scare tactics, no padding the bill." },
  { t: "Fair Pricing", d: "Competitive, transparent pricing on every repair. Customers regularly tell us we beat the dealerships without cutting corners." },
  { t: "Real Expertise", d: "Decades of hands-on experience across all makes and models, from routine maintenance to complex engine and transmission work." },
  { t: "Family Values", d: "We're family-owned and operated, and we treat every customer like a neighbor — because most of them are." },
];

export default function About() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <span className="eyebrow">About Us</span>
          <h1>35+ Years of Trusted Service</h1>
          <p>A family-owned auto repair shop that Atlanta has relied on for over three decades.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap about-grid">
          <div
            className="about-media reveal"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(18,20,24,.25), rgba(18,20,24,.65)), url('${ABOUT_IMG}')` }}
          >
            <div className="tag"><span className="big">{BUSINESS.years}</span><small>Years serving<br />the Atlanta community</small></div>
          </div>
          <div className="about-copy reveal">
            <span className="eyebrow">Our Story</span>
            <h2>A Trusted Pillar of the Atlanta Community</h2>
            <p>
              For more than 35 years, Apollon Auto Repair has proudly served the
              Atlanta community with top-quality auto care. As a family-owned and
              operated business, we've earned our reputation one honest repair at a
              time.
            </p>
            <p>
              Unlike quick-lube chains, we offer a comprehensive range of services
              under one roof — making us your single trusted shop for everything
              your vehicle needs. Whether it's routine maintenance, diagnostics,
              brake repair, or a major engine job, you can rely on us to keep your
              vehicle running smoothly.
            </p>
            <p>
              We prioritize fair and competitive pricing on every repair, so you
              always get the best value for your money. That's why so many of our
              customers have trusted us with their vehicles for 10, 15, even 20+
              years.
            </p>
          </div>
        </div>
      </section>

      <section className="pad" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>What We Stand For</h2>
            <p>The values that have kept Atlanta drivers coming back for over 35 years.</p>
          </div>
          <div className="svc-grid">
            {VALUES.map((v) => (
              <article className="svc reveal" key={v.t}>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
