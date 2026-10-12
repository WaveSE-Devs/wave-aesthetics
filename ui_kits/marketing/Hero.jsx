/* global React */
function Hero() {
  return (
    <section className="wm-hero">
      <div className="wm-hero__bg" aria-hidden="true">
        {/* full-bleed photo placeholder — desaturated cool tone */}
        <div className="wm-hero__photo"></div>
        <div className="wm-hero__scrim"></div>
      </div>
      <div className="wm-hero__content">
        <div className="wm-eyebrow">A SPORTS &amp; ENTERTAINMENT COMPANY</div>
        <h1 className="wm-hero__title">
          We build sports IP <br />
          that <span className="wm-volt">actually moves</span>.
        </h1>
        <p className="wm-hero__lede">
          Originals, productions, and partnerships with the people on the floor — athletes, creators, the front office. No press box.
        </p>
        <div className="wm-hero__ctas">
          <a className="wm-btn wm-btn--primary" href="#">SEE THE WORK &nbsp;→</a>
          <a className="wm-btn wm-btn--ghost" href="#">PARTNER WITH WAVE</a>
        </div>
      </div>
      <div className="wm-hero__meta">
        <div><span className="wm-spec">EST.</span><span className="wm-mono-lg">2019</span></div>
        <div><span className="wm-spec">ORIGINALS</span><span className="wm-mono-lg">14</span></div>
        <div><span className="wm-spec">REACH / MO</span><span className="wm-mono-lg">62M</span></div>
        <div><span className="wm-spec">HQ</span><span className="wm-mono-lg">NEW YORK · LA</span></div>
      </div>
    </section>
  );
}
window.Hero = Hero;
