/* global React */
function Manifesto() {
  return (
    <section className="wm-manifesto">
      <div className="wm-section-head">
        <div className="wm-eyebrow">01 / MANIFESTO</div>
        <h2 className="wm-section-title">A different floor.</h2>
      </div>
      <div className="wm-manifesto__body">
        <blockquote className="wm-pullquote">
          “The bench tells you more about a team than the scoreboard does.”
          <span className="wm-pullquote__att">— Maya Rivera, Head of Originals</span>
        </blockquote>
        <p className="wm-manifesto__copy">
          Wave Sports &amp; Entertainment is a culture-first studio. We build IP with the people who actually move the sport — and we let them keep the keys. Documentaries, podcasts, productions, partnerships. The work outlives the cycle.
        </p>
      </div>
      <div className="wm-stats">
        <div className="wm-stat"><div className="wm-stat__num">62M</div><div className="wm-stat__lbl">MONTHLY REACH</div></div>
        <div className="wm-stat"><div className="wm-stat__num">14</div><div className="wm-stat__lbl">ORIGINAL SERIES</div></div>
        <div className="wm-stat"><div className="wm-stat__num">120+</div><div className="wm-stat__lbl">CREATOR PARTNERS</div></div>
        <div className="wm-stat"><div className="wm-stat__num">9</div><div className="wm-stat__lbl">SPORTS COVERED</div></div>
      </div>
    </section>
  );
}
window.Manifesto = Manifesto;
