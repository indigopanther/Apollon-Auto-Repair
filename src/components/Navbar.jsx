import { useEffect, useState } from "react";
import { BUSINESS, NAV } from "../data.js";

function WrenchBadge() {
  return (
    <span className="logo-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    </span>
  );
}

export default function Navbar({ path }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <a className="brand" href="#/">
          <WrenchBadge /> Apollon<b>.</b>
        </a>
        <nav className={"nav-links" + (open ? " open" : "")}>
          {NAV.map((n) => (
            <a
              key={n.path}
              className={"link" + (path === n.path ? " active" : "")}
              href={"#" + n.path}
            >
              {n.label}
            </a>
          ))}
          <a className="nav-cta" href={BUSINESS.phoneHref}>📞 {BUSINESS.phone}</a>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
