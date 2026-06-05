import { MARQUEE } from "../data.js";

export default function Marquee() {
  // Four identical groups so the track always exceeds the viewport and the
  // -50% translate (2 groups) loops seamlessly with no visible gap.
  const groups = ["a", "b", "c", "d"];
  const renderGroup = (key) => (
    <div className="marquee-group" key={key} aria-hidden={key !== "a"}>
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
      <div className="marquee-track">{groups.map(renderGroup)}</div>
    </div>
  );
}
