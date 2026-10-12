/* global React */
const { useState } = React;

function Nav() {
  const [active, setActive] = useState("WORK");
  const links = ["WORK", "ORIGINALS", "PARTNERS", "ABOUT", "PRESS"];
  return (
    <nav className="wm-nav">
      <a className="wm-nav__logo" href="#" onClick={(e) => { e.preventDefault(); setActive("HOME"); }}>
        <img src="../../assets/wave-primary-lockup-white.svg" alt="Wave Sports & Entertainment" />
      </a>
      <div className="wm-nav__links">
        {links.map((l) => (
          <a key={l} className={"wm-nav__link " + (active === l ? "is-active" : "")}
             href="#" onClick={(e) => { e.preventDefault(); setActive(l); }}>{l}</a>
        ))}
      </div>
      <div className="wm-nav__right">
        <span className="wm-nav__search">⌕ &nbsp;SEARCH</span>
        <a className="wm-btn wm-btn--primary wm-btn--sm" href="#">CONTACT &nbsp;→</a>
      </div>
    </nav>
  );
}
window.Nav = Nav;
