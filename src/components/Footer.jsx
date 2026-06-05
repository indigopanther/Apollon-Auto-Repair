import { BUSINESS, NAV } from "../data.js";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot">
              <div className="foot-brand">
                <span className="logo-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                Apollon Auto Repair
              </div>
              <p>
                Family-owned and operated for over 35 years. Honest, full-service
                auto repair you can trust — right here in Atlanta, GA.
              </p>
            </div>
            <div className="foot">
              <h5>Explore</h5>
              <ul>
                {NAV.map((n) => (
                  <li key={n.path}><a href={"#" + n.path}>{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="foot">
              <h5>Contact</h5>
              <ul>
                <li><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
                <li><a href={BUSINESS.mapsHref} target="_blank" rel="noopener">{BUSINESS.address}</a></li>
                <li><a href={BUSINESS.facebook} target="_blank" rel="noopener">Facebook</a></li>
                <li>{BUSINESS.hoursWeek}</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Apollon Auto Repair. All rights reserved.</span>
            <span>{BUSINESS.hoursWeek}</span>
          </div>
        </div>
      </footer>
      <a className="float-call" href={BUSINESS.phoneHref}>📞 Call Now</a>
    </>
  );
}
