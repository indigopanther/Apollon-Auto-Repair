import { BUSINESS } from "../data.js";

function Pin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function Phone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function Clock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <span className="eyebrow">Get In Touch</span>
          <h1>Visit Apollon Auto Repair</h1>
          <p>Come say hello — we're easy to find on Shallowford Road in Atlanta.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap loc-grid">
          <div className="loc-info">
            <div className="info-card reveal">
              <span className="ic"><Pin /></span>
              <div>
                <h4>Address</h4>
                <a href={BUSINESS.mapsHref} target="_blank" rel="noopener">
                  {BUSINESS.addressShort},<br />{BUSINESS.cityState}
                </a>
              </div>
            </div>
            <div className="info-card reveal">
              <span className="ic"><Phone /></span>
              <div>
                <h4>Phone</h4>
                <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
                <p style={{ marginTop: 2 }}>Call ahead to book your appointment.</p>
              </div>
            </div>
            <div className="info-card reveal">
              <span className="ic"><Clock /></span>
              <div>
                <h4>Hours</h4>
                <p>{BUSINESS.hoursWeek}<br />{BUSINESS.hoursSun}</p>
              </div>
            </div>
            <a className="btn btn-primary" href={BUSINESS.phoneHref} style={{ justifyContent: "center" }}>
              📞 Call for Appointment
            </a>
          </div>

          <div className="map-wrap reveal">
            <iframe
              title="Apollon Auto Repair location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={BUSINESS.mapEmbed}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
