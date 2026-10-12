/* global React */
function Footer() {
  return (
    <footer className="wm-footer">
      <div className="wm-footer__top">
        <div className="wm-footer__brand">
          <img src="../../assets/wave-primary-lockup-white.svg" alt="" className="wm-footer__lockup" />
          <p className="wm-footer__tag">A culture-first sports &amp; entertainment company.</p>
        </div>
        <div className="wm-footer__cols">
          <div>
            <div className="wm-spec">VERTICALS</div>
            <ul>
              <li>Wave Originals</li>
              <li>Wave Productions</li>
              <li>Wave Studios</li>
              <li>Wave Audio</li>
            </ul>
          </div>
          <div>
            <div className="wm-spec">COMPANY</div>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="wm-spec">FOLLOW</div>
            <ul>
              <li>X / Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wm-footer__bottom">
        <span>© 2026 WAVE SPORTS &amp; ENTERTAINMENT, INC.</span>
        <span>NEW YORK · LOS ANGELES</span>
        <span>PRIVACY · TERMS · COOKIES</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
