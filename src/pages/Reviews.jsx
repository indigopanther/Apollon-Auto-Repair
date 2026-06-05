import { BUSINESS, REVIEWS } from "../data.js";
import { ReviewCard, CtaBand } from "../components/ui.jsx";

export default function Reviews() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <span className="eyebrow">Reviews</span>
          <h1>What Our Customers Say</h1>
          <p>Don't just take our word for it — here's what Atlanta drivers think of Apollon Auto Repair.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal">
            <a className="rating-badge" href={BUSINESS.yelp} target="_blank" rel="noopener">
              <span className="score">{BUSINESS.rating}</span>
              <span>
                <span className="stars">★★★★<span className="empty">★</span></span>
                <small>{BUSINESS.reviewCount}+ reviews across Yelp &amp; Google</small>
              </span>
            </a>
          </div>

          <div className="rev-grid">
            {REVIEWS.map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }} className="reveal">
            <a className="btn btn-primary" href={BUSINESS.yelp} target="_blank" rel="noopener">Read All Reviews on Yelp →</a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
