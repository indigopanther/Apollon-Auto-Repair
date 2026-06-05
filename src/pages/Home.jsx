import { BUSINESS, SERVICES, REVIEWS, HERO_IMG, ABOUT_IMG } from "../data.js";
import { ServiceCard, ReviewCard, CtaBand, PhoneIcon } from "../components/ui.jsx";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18,20,24,.72), rgba(18,20,24,.86)), linear-gradient(115deg, rgba(245,166,35,.10), transparent 55%), url('${HERO_IMG}')`,
        }}
      >
        <div className="wrap hero-grid">
          <div className="reveal in">
            <span className="eyebrow">Family Owned &amp; Operated · Atlanta, GA</span>
            <h1>
              Honest Repairs.
              <span className="accent">Fair Prices.</span>
              35 Years Strong.
            </h1>
            <p className="lead">
              From oil changes to engine overhauls, Apollon Auto Repair keeps
              Atlanta moving with expert diagnostics, straight answers, and
              pricing you can trust — no upsells, no surprises.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={BUSINESS.phoneHref}>📞 Call for Appointment</a>
              <a className="btn btn-ghost" href="#/services">View Services</a>
            </div>
          </div>
          <aside className="hero-card reveal in">
            <h3>Shop Hours</h3>
            <div className="hours"><span>Monday – Saturday</span><b>7:00 AM – 6:00 PM</b></div>
            <div className="hours"><span>Sunday</span><b>Closed</b></div>
            <div className="callrow">
              <span className="ic"><PhoneIcon /></span>
              <div>
                <small>Call us today</small>
                <a className="ph" href={BUSINESS.phoneHref} style={{ display: "block" }}>{BUSINESS.phone}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="stat"><div className="num">{BUSINESS.years}</div><div className="lab">Years in Business</div></div>
          <div className="stat"><div className="num">{BUSINESS.rating}★</div><div className="lab">Customer Rating</div></div>
          <div className="stat"><div className="num">All</div><div className="lab">Makes &amp; Models</div></div>
          <div className="stat"><div className="num">100%</div><div className="lab">Family Operated</div></div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="pad">
        <div className="wrap about-grid">
          <div
            className="about-media reveal"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(18,20,24,.25), rgba(18,20,24,.65)), url('${ABOUT_IMG}')` }}
          >
            <div className="tag"><span className="big">{BUSINESS.years}</span><small>Years serving<br />the Atlanta community</small></div>
          </div>
          <div className="about-copy reveal">
            <span className="eyebrow">About Apollon</span>
            <h2>A Trusted Pillar of the Atlanta Community</h2>
            <p>
              For more than 35 years, Apollon Auto Repair has been a family-owned
              and operated shop delivering top-quality auto care to drivers across
              Atlanta. We built our reputation the old-fashioned way — honest work,
              fair pricing, and treating every customer like a neighbor.
            </p>
            <ul className="feature-list">
              <li><span className="ck">✓</span><div><b>Fair &amp; Transparent Pricing</b><span>Only the repairs you actually need — no upsells, no hidden fees.</span></div></li>
              <li><span className="ck">✓</span><div><b>Full-Service Shop</b><span>Maintenance, diagnostics, brakes, engine, transmission and more.</span></div></li>
              <li><span className="ck">✓</span><div><b>Experienced Technicians</b><span>Decades of hands-on expertise across all makes and models.</span></div></li>
            </ul>
            <a className="btn btn-ghost reveal" href="#/about" style={{ marginTop: 26 }}>More About Us →</a>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="pad" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">What We Do</span>
            <h2>Top Services We Offer</h2>
            <p>One shop for everything your vehicle needs — keeping you safe and on the road.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }} className="reveal">
            <a className="btn btn-primary" href="#/services">View All Services</a>
          </div>
        </div>
      </section>

      <CtaBand />

      {/* REVIEWS PREVIEW */}
      <section className="pad">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">What Drivers Say</span>
            <h2>Trusted by Atlanta Drivers</h2>
            <p>Our customers stay with us for years — here's why.</p>
          </div>
          <div className="rev-grid">
            {REVIEWS.slice(0, 3).map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }} className="reveal">
            <a className="btn btn-ghost" href="#/reviews">Read More Reviews →</a>
          </div>
        </div>
      </section>
    </>
  );
}
