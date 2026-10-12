/* global React */
function Partners() {
  // monogram placeholders — would be real client logos in production
  const partners = ["NBA", "F1", "MLS", "WNBA", "PGA", "ESPN", "AMAZON", "TURNER", "ROKU", "VERIZON", "HBO", "NIKE"];
  return (
    <section className="wm-partners">
      <div className="wm-section-head">
        <div className="wm-eyebrow">03 / PARTNERS</div>
        <h2 className="wm-section-title">Built with leagues, networks, and fans.</h2>
      </div>
      <div className="wm-partners__wall">
        {partners.map((p) => (
          <div key={p} className="wm-partner">{p}</div>
        ))}
      </div>
    </section>
  );
}
window.Partners = Partners;
