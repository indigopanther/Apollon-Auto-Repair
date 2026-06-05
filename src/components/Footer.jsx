import { BUSINESS, NAV } from "../data.js";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot">
              <div className="foot-brand">
                <img src="/logo.svg" alt="Apollon Auto Repair" width="56" height="56" />
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
