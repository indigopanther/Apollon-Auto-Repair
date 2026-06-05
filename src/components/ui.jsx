import { BUSINESS, BAND_IMG } from "../data.js";

export function Stars({ n = 5 }) {
  return (
    <span className="stars" aria-label={n + " out of 5 stars"}>
      {"★".repeat(n)}
      {n < 5 && <span className="empty">{"★".repeat(5 - n)}</span>}
    </span>
  );
}

export function ServiceCard({ s, detailed = false }) {
  return (
    <article className={"svc reveal" + (detailed ? " detailed" : "")}>
      <div className="ic">
        <img src={s.icon} alt="" loading="lazy" />
      </div>
      <h3>{s.title}</h3>
      <p>{detailed ? s.long : s.short}</p>
    </article>
  );
}

export function ReviewCard({ r }) {
  return (
    <article className="rev reveal">
      <Stars n={r.stars} />
      <p>&ldquo;{r.text}&rdquo;</p>
      <div className="who">
        <span className="av">{r.name.charAt(0)}</span>
        <div>
          <b>{r.name}</b>
          <small>{r.where}</small>
        </div>
      </div>
    </article>
  );
}

export function CtaBand() {
  return (
    <section
      className="band"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(18,20,24,.92), rgba(18,20,24,.78)), url('${BAND_IMG}')`,
      }}
    >
      <div className="wrap">
        <div className="reveal">
          <h2>Don't wait until it's too late.</h2>
          <p>
            Book your appointment today and let our family take care of your
            vehicle like it's our own.
          </p>
        </div>
        <a className="btn btn-primary reveal" href={BUSINESS.phoneHref}>
          📞 Book Your Appointment
        </a>
      </div>
    </section>
  );
}

export function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
