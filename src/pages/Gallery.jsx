import { GALLERY } from "../data.js";
import { CtaBand } from "../components/ui.jsx";

export default function Gallery() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <span className="eyebrow">Gallery</span>
          <h1>Inside the Shop</h1>
          <p>A look at our bays, our team, and the work we do to keep Atlanta on the road.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="gal-grid">
            {GALLERY.map((g) => (
              <div
                key={g.label}
                className="gal-item reveal"
                style={{ backgroundImage: `url('${g.src}')` }}
                role="img"
                aria-label={g.label}
              >
                <span className="cap">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
