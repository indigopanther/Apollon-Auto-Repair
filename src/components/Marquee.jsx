import { MARQUEE } from "../data.js";

export default function Marquee() {
  // Two identical groups so the -50% translate loops seamlessly.
  const group = (key) => (
    <div className="marquee-group" key={key} aria-hidden={key === "b"}>
      {MARQUEE.map((m, i) => (
        <span className="marquee-item" key={key + i}>
          <span className="marquee-dot">◆</span>
          {m}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="region" aria-label="Announcements">
      <div className="marquee-track">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
