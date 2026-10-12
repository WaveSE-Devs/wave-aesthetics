/* global React */
const { useState: useStateOG } = React;

const SHOWS = [
  { title: "The Bench",    tag: "DOC SERIES",    eps: "8 EPS",  date: "FRI · NOV 14", grad: "linear-gradient(135deg,#2a3328 0%,#0b0909 65%)", badge: "NEW" },
  { title: "Off Lap",      tag: "PODCAST",       eps: "WEEKLY", date: "EP. 22 LIVE",  grad: "linear-gradient(135deg,#3a3a45 0%,#0b0909 65%)", badge: "LIVE" },
  { title: "Cold Open",    tag: "DOC FILM",      eps: "82 MIN", date: "STREAMING NOW",grad: "linear-gradient(135deg,#1a2530 0%,#0b0909 65%)", badge: "" },
  { title: "Late Whistle", tag: "TALK SHOW",     eps: "WEEKLY", date: "TUE · 9PM ET", grad: "linear-gradient(135deg,#2e1a26 0%,#0b0909 65%)", badge: "" },
  { title: "Side Quest",   tag: "DOC SERIES",    eps: "6 EPS",  date: "DROPS DEC 5",  grad: "linear-gradient(135deg,#1f2e1f 0%,#0b0909 65%)", badge: "SOON" },
  { title: "Off Day",      tag: "SHORT FORM",    eps: "12 EPS", date: "WEEKLY",       grad: "linear-gradient(135deg,#2a2a2a 0%,#0b0909 65%)", badge: "" },
];

function ShowCard({ s }) {
  const [hover, setHover] = useStateOG(false);
  return (
    <article className={"wm-show " + (hover ? "is-hover" : "")} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="wm-show__poster" style={{ backgroundImage: s.grad }}>
        {s.badge && <span className={"wm-badge " + (s.badge === "LIVE" ? "wm-badge--live" : s.badge === "NEW" ? "wm-badge--new" : "")}>
          {s.badge === "LIVE" && <span className="wm-dot"></span>}{s.badge}
        </span>}
        <div className="wm-show__title">{s.title.toUpperCase()}</div>
      </div>
      <div className="wm-show__meta">
        <span>{s.tag} · {s.eps}</span>
        <span className="wm-show__date">{s.date}</span>
      </div>
    </article>
  );
}

function OriginalsGrid() {
  return (
    <section className="wm-originals">
      <div className="wm-section-head wm-section-head--row">
        <div>
          <div className="wm-eyebrow">02 / WAVE ORIGINALS</div>
          <h2 className="wm-section-title">Made with the people on the floor.</h2>
        </div>
        <a className="wm-btn wm-btn--ghost wm-btn--sm" href="#">VIEW ALL · 14 →</a>
      </div>
      <div className="wm-grid">
        {SHOWS.map((s) => <ShowCard key={s.title} s={s} />)}
      </div>
    </section>
  );
}
window.OriginalsGrid = OriginalsGrid;
