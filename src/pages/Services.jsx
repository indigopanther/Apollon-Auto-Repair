import { SERVICES } from "../data.js";
import { ServiceCard, CtaBand } from "../components/ui.jsx";

export default function Services() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <span className="eyebrow">Our Services</span>
          <h1>Complete Auto Care, One Shop</h1>
          <p>From routine maintenance to major repairs, our experienced technicians handle it all — for every make and model.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="svc-grid">
            {SERVICES.map((s) => <ServiceCard key={s.title} s={s} detailed />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
