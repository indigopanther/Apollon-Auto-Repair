import { useEffect, useState } from "react";
import { BUSINESS, NAV } from "../data.js";

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
          <img className="brand-logo" src="/logo.svg" alt="Apollon Auto Repair" width="48" height="48" />
          <span className="brand-text">Apollon<b>.</b></span>
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
