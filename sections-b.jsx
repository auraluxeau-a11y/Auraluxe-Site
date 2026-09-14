/* =========================================================
   Auraluxe landing - sections B
   Bento, HowItWorks, AtmosphereBand, Testimonials,
   Faq, FinalCta, Footer
   ========================================================= */

/* ---------- 4 · BENTO BENEFITS ---------- */
function Bento() {
  return (
    <section style={{ background: "var(--canvas)", padding: "var(--sec, 104px) var(--gutter, 40px)" }}>
      <div style={{ maxWidth: window.MAXW, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <Eyebrow style={{ marginBottom: 14 }}>Why it works</Eyebrow>
            <h2 className="aura-h1 section-h" style={{ color: "var(--ink)", margin: "0 0 16px", textWrap: "balance" }}>Built to lower your heart rate</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--slate)", lineHeight: 1.6, margin: 0 }}>
              Considered where it counts. Quiet everywhere else.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "minmax(196px, auto)", gap: 18 }}>
            {/* Large feature - offline, full-bleed lifestyle */}
            <article className="bento-cell" style={{ gridColumn: "span 2", gridRow: "span 2", borderRadius: "var(--r-xxxl)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#fff", minHeight: 320, boxShadow: "var(--elev-2)" }}>
              <img src="assets/bento-sleeping.jpg" alt="A person sleeping peacefully in warm, dim light" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,16,30,0.10) 0%, rgba(9,16,30,0.34) 46%, rgba(9,16,30,0.90) 100%)" }} />
              <div style={{ position: "relative", padding: "38px 38px 36px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: "0.4px", color: "#fff", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", padding: "6px 13px", borderRadius: "var(--r-full)", marginBottom: 18 }}>
                  <Icon name="WifiOff" size={14} color="var(--brand-purple-300)" sw={2} /> Works offline · no Wi-Fi
                </span>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: 28, fontWeight: 600, margin: "0 0 12px", letterSpacing: "-0.5px", maxWidth: 380, lineHeight: 1.2 }}>Your rest should never wait on a login</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.6, margin: 0, maxWidth: 420 }}>
                  It all lives in the device - sound, light, timers, the night light. No app to open, no network to drop at 2am. Pair your phone for schedules and extras, but the Glow never depends on it.
                </p>
              </div>
            </article>

            {[
              { icon: "Volume2", c: "var(--brand-purple-800)", tint: "var(--card-tint-lavender)", glow: "rgba(119,147,199,0.26)", title: "White, pink & brown noise", body: "A steady wall of sound to soften the noise of a busy home." },
              { icon: "BatteryCharging", c: "var(--brand-green)", tint: "var(--card-tint-mint)", glow: "rgba(58,158,110,0.20)", title: "10 hours cordless", body: "All-night battery, and it works while charging too." },
            ].map((b) => (
              <article key={b.title} className="bento-cell" style={{ position: "relative", overflow: "hidden", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-xxxl)", padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="aura-pulse" style={{ position: "absolute", top: -54, right: -44, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${b.glow} 0%, transparent 70%)`, filter: "blur(6px)", pointerEvents: "none" }} />
                <span style={{ position: "relative", width: 54, height: 54, borderRadius: "50%", background: b.tint, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={b.icon} size={23} color={b.c} sw={1.6} /></span>
                <div style={{ position: "relative" }}>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 600, color: "var(--ink)", margin: "16px 0 7px" }}>{b.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--slate)", lineHeight: 1.55, margin: 0 }}>{b.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 5 · HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", icon: "MoonStar", title: "Set your wind-down", body: "Choose a routine on the device or in the app. The light dims, the room hushes, and the day starts to let go." },
    { n: "02", icon: "Waves", title: "Choose sound & glow", body: "Layer a soundscape over a warm hue, then save it once. Tomorrow night, the Glow already knows." },
    { n: "03", icon: "BedDouble", title: "Drift into deeper sleep", body: "Soft sound and a low light hold the room steady till morning - then an okay-to-wake colour gently signals the day." },
  ];
  return (
    <section id="how" style={{ background: "var(--surface-soft)", padding: "var(--sec, 104px) var(--gutter, 40px)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Eyebrow style={{ marginBottom: 14 }}>Calm in three steps</Eyebrow>
            <h2 className="aura-h1 section-h" style={{ color: "var(--ink)", margin: 0 }}>How Auraluxe works</h2>
          </div>
        </Reveal>
        <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30, position: "relative" }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ position: "relative", width: 92, height: 92, borderRadius: "50%", background: "linear-gradient(160deg, #eef1f8, #f7efe8)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "var(--elev-2)" }}>
                  <Icon name={s.icon} size={36} color="var(--accent-deep, var(--primary-deep))" sw={1.6} />
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, letterSpacing: "1.6px", color: "var(--accent, var(--primary))", marginBottom: 9, fontFeatureSettings: '"tnum"' }}>{s.n}</div>
                <h3 className="aura-h4" style={{ color: "var(--ink)", margin: "0 0 10px", fontSize: 21 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--slate)", lineHeight: 1.6, margin: 0, maxWidth: 270 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6 · ATMOSPHERE BAND (full-bleed navy) ---------- */
function AtmosphereBand() {
  return (
    <section id="science" style={{ position: "relative", minHeight: 600, display: "flex", alignItems: "center", overflow: "hidden", background: "var(--brand-navy-deep)" }}>
      <img src="assets/glow-lamp-lifestyle.png" alt="The Auraluxe Glow on a bedside table, glowing warm at night" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(9,16,30,0.92) 0%, rgba(9,16,30,0.6) 44%, rgba(9,16,30,0.08) 74%)" }} />
      <div style={{ position: "relative", maxWidth: window.MAXW, margin: "0 auto", padding: "0 var(--gutter, 40px)", width: "100%" }}>
        <Reveal>
          <div style={{ maxWidth: 520 }}>
            <Eyebrow color="var(--brand-purple-300)" style={{ marginBottom: 18 }}>The science, lightly worn</Eyebrow>
            <h2 className="aura-display-lg atmos-h" style={{ color: "#fff", fontSize: 44, margin: "0 0 20px", letterSpacing: "-1.2px", textWrap: "balance" }}>Made to disappear into the room</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.62, margin: "0 0 32px" }}>
              Even asleep, your brain stays alert for change. A steady floor of sound raises the bar a noise has to clear to wake you - so the door downstairs, the car outside, the creak in the hall simply fold into the quiet, and you stay under.
            </p>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap", marginBottom: 34 }}>
              {[["Soft-touch matte shell", "ShieldCheck"], ["Works with Alexa & Google Home", "Mic"], ["Warm, dimmable night light", "Lamp"]].map(([t, ic]) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon name={ic} size={18} color="var(--brand-purple-300)" sw={1.7} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.88)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7 · TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [
    { q: "I used to wake at 3am like clockwork. With the Glow's rain running low all night, I honestly can't tell you the last time it happened.", before: "Waking 3x a night", after: "Sleeping straight through", n: "Hannah R.", m: "Verified purchaser", img: "assets/testimonial-female.png" },
    { q: "The sunrise glow is the gentlest morning cue I've found. No blaring alarm - just a soft colour that tells me it's time to get up.", before: "Jolted awake, groggy all morning", after: "Wakes naturally, feels rested", n: "Marcus T.", m: "Verified purchaser", img: "assets/testimonial-male.png" },
    { q: "We run it in the nursery. It's the one piece of baby tech that actually made nights quieter - for the baby and for us.", before: "Every creak woke the house", after: "Nights nobody notices anymore", n: "Jessica S.", m: "Verified purchaser", img: "assets/testimonial-female-2.png" },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = quotes[i];
  return (
    <section id="reviews" style={{ background: "var(--canvas)", padding: "var(--sec, 104px) var(--gutter, 40px)" }}>
      <div style={{ maxWidth: window.MAXW, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
            <Eyebrow style={{ marginBottom: 14 }}>Real nights, real sleepers</Eyebrow>
            <h2 className="aura-h1 section-h" style={{ color: "var(--ink)", margin: 0, textWrap: "balance" }}>Reviews you can feel</h2>
          </div>
        </Reveal>
        <Reveal>
          <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
            <div style={{ background: "var(--surface-soft)", border: "1px solid var(--hairline)", borderRadius: "var(--r-xxxl)", padding: "44px 52px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 18, minHeight: 320 }}>
              <img src={t.img} alt={t.n} style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }} />
              <Stars size={16} />
              <blockquote style={{ fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.45, margin: 0, maxWidth: 560, letterSpacing: "-0.3px", textWrap: "balance" }}>“{t.q}”</blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{t.n}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--brand-teal)" }}>
                  <Icon name="BadgeCheck" size={14} sw={2} />{t.m}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--steel)", marginTop: 4, flexWrap: "wrap", justifyContent: "center" }}>
                <span><span style={{ color: "var(--slate)" }}>Before:</span> {t.before}</span>
                <Icon name="ArrowRight" size={14} />
                <span><span style={{ color: "var(--slate)" }}>After:</span> {t.after}</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 22, marginTop: 24 }}>
              <button aria-label="Previous review" onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
                style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--hairline-strong)", background: "var(--canvas)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="ChevronLeft" size={18} color="var(--ink)" />
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {quotes.map((_, d) => (
                  <button key={d} aria-label={`Go to review ${d + 1}`} onClick={() => setI(d)}
                    style={{ width: d === i ? 20 : 7, height: 7, borderRadius: "var(--r-full)", border: "none", cursor: "pointer", background: d === i ? "var(--accent, var(--primary))" : "var(--hairline-strong)", transition: "width .25s ease, background .25s ease" }} />
                ))}
              </div>
              <button aria-label="Next review" onClick={() => setI((v) => (v + 1) % quotes.length)}
                style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--hairline-strong)", background: "var(--canvas)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="ChevronRight" size={18} color="var(--ink)" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- RISK REVERSAL ---------- */
function RiskReversal() {
  const items = [
    ["CalendarCheck", "100-night trial"],
    ["Truck", "Free shipping"],
    ["ShieldCheck", "2-year warranty"],
    ["MapPin", "Australian support"],
    ["Lock", "Secure checkout"],
  ];
  return (
    <section style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", padding: "48px var(--gutter, 40px)" }}>
      <Reveal>
        <div style={{ maxWidth: window.MAXW, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {items.map(([ic, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 110 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--canvas)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={ic} size={22} color="var(--accent-deep, var(--primary-deep))" sw={1.7} />
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 500, color: "var(--charcoal)", textAlign: "center" }}>{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- 8 · FAQ ACCORDION ---------- */
function Faq() {
  const items = [
    { q: "Does this actually work?", a: "A steady wall of sound lowers the bar a noise has to clear to wake you, and a warm sunrise glow eases you out of sleep instead of jolting you awake. It's a physical response, not a gimmick - and 2,400+ customers rate it 4.8/5." },
    { q: "Can I leave it on all night?", a: "Yes. Auraluxe is designed to run for a full 8+ hours - either on up to 10 hours of battery, or plugged in indefinitely. It's built to be left on until morning." },
    { q: "What if I share a bed?", a: "The sound and light fill the whole room rather than one ear, so it works for both of you. Most partners say the low, steady hum is easier to sleep through than silence." },
    { q: "Can I return it?", a: "Try Auraluxe for 100 nights. If your sleep isn't calmer, send it back - we cover return shipping. It also comes with a 2-year warranty." },
    { q: "How loud is it?", a: "Volume ranges from a near-silent hush to a steady, room-filling level - loud enough to mask a busy street, soft enough to forget it's there. You set the level once and it stays there." },
    { q: "Can I use my own sounds?", a: "Yes. Alongside the built-in soundscapes, you can pair over Bluetooth and play anything from your phone through the same speaker." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "var(--surface-soft)", padding: "var(--sec, 104px) var(--gutter, 40px)" }}>
      <div className="faq-wrap" style={{ maxWidth: 920, margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
        <Reveal>
          <div className="faq-head" style={{ position: "sticky", top: 96 }}>
            <Eyebrow style={{ marginBottom: 14 }}>Good to know</Eyebrow>
            <h2 className="aura-h1 section-h" style={{ color: "var(--ink)", margin: "0 0 16px", textWrap: "balance" }}>Questions, answered calmly</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--slate)", lineHeight: 1.6, margin: 0 }}>
              Still wondering about something? <a href="#" onClick={(e) => e.preventDefault()} className="link-accent" style={{ color: "var(--accent-deep, var(--primary-deep))", textDecoration: "none", fontWeight: 500 }}>Talk to our team →</a>
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--hairline)" }}>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q} style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "24px 4px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, textAlign: "left" }}>
                    <span style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 600, color: "var(--ink)", lineHeight: 1.4 }}>{it.q}</span>
                    <span style={{ flexShrink: 0, marginTop: 2, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .3s cubic-bezier(.4,0,.2,1)", color: "var(--accent, var(--primary))" }}>
                      <Icon name="Plus" size={22} sw={1.8} />
                    </span>
                  </button>
                  <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows .35s cubic-bezier(.4,0,.2,1)" }}>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--slate)", lineHeight: 1.64, margin: 0, padding: "0 40px 26px 4px" }}>{it.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 9 · FINAL CTA ---------- */
function FinalCta({ onCta }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg, #f3ede9 0%, #ebeef7 100%)", padding: "120px var(--gutter, 40px)", textAlign: "center" }}>
      <div className="aura-pulse" style={{ position: "absolute", top: "50%", left: "50%", width: 620, height: 620, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(119,147,199,0.24) 0%, transparent 66%)", filter: "blur(10px)", pointerEvents: "none" }} />
      <Reveal>
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <h2 className="aura-display-lg section-h" style={{ color: "var(--ink)", margin: "0 0 20px", fontSize: 52, letterSpacing: "-1.6px", textWrap: "balance" }}>Ready for your best sleep tonight?</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 18.5, color: "var(--slate)", lineHeight: 1.6, margin: "0 auto 34px", maxWidth: 480 }}>
            Bring Auraluxe home for 100 nights. If your sleep isn't calmer, send it back - we'll cover the shipping. No risk, just better mornings.
          </p>
          <Button variant="primary" size="lg" onClick={onCta}>Get Better Sleep Tonight - $99.95</Button>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--steel)", marginTop: 20, fontFeatureSettings: '"tnum"' }}>Free shipping · 100-night trial · 2-year warranty · Australian support</div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FOOTER w/ newsletter ---------- */
function Footer({ onSubscribe }) {
  const [email, setEmail] = React.useState("");
  const cols = [
    { h: "Product", links: ["The Glow", "Sound library", "The app", "Gift cards"] },
    { h: "Learn", links: ["How it works", "The science", "Sleep journal", "Reviews"] },
    { h: "Support", links: ["Help center", "Shipping & returns", "100-night trial", "Warranty"] },
    { h: "Company", links: ["Our story", "Sustainability", "Contact"] },
  ];
  const submit = (e) => { e.preventDefault(); if (email.trim()) { onSubscribe && onSubscribe(); setEmail(""); } };
  return (
    <footer style={{ background: "var(--canvas)", borderTop: "1px solid var(--hairline)" }}>
      {/* newsletter */}
      <div style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="footer-news" style={{ maxWidth: window.MAXW, margin: "0 auto", padding: "56px var(--gutter, 40px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <h3 className="aura-h3" style={{ color: "var(--ink)", margin: "0 0 8px", fontSize: 26 }}>Quiet notes for better nights</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--slate)", lineHeight: 1.55, margin: 0, maxWidth: 380 }}>
              The occasional letter on sleep, sound and light. No noise - we'd be hypocrites.
            </p>
          </div>
          <form onSubmit={submit} className="news-form" style={{ display: "flex", gap: 10, justifySelf: "end", width: "100%", maxWidth: 420 }}>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" aria-label="Email address"
              style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 15, padding: "13px 16px", borderRadius: "var(--btn-radius, var(--r-md))", border: "1px solid var(--hairline-strong)", background: "var(--surface-soft)", color: "var(--ink)", outline: "none" }}
              onFocus={(e) => { e.target.style.borderColor = "var(--accent, var(--primary))"; e.target.style.boxShadow = "0 0 0 2px rgba(119,147,199,0.18)"; }}
              onBlur={(e) => { e.target.style.borderColor = "var(--hairline-strong)"; e.target.style.boxShadow = "none"; }} />
            <Button variant="primary" onClick={submit}>Subscribe</Button>
          </form>
        </div>
      </div>
      {/* links */}
      <div style={{ maxWidth: window.MAXW, margin: "0 auto", padding: "56px var(--gutter, 40px) 40px" }}>
        <div className="footer-cols" style={{ display: "grid", gridTemplateColumns: "1.6fr repeat(4,1fr)", gap: 32, marginBottom: 48 }}>
          <div>
            <Logo height={27} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--steel)", lineHeight: 1.55, maxWidth: 240, margin: "16px 0 18px" }}>
              Premium sleep &amp; sound wellness, in one calm device.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                ["Instagram", "instagram"],
                ["YouTube", "youtube"],
                ["X", "x"],
              ].map(([label, slug]) => (
                <a key={label} href="#" onClick={(e) => e.preventDefault()} aria-label={label}
                  style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "border-color .16s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; e.currentTarget.querySelector("img").src = `https://cdn.simpleicons.org/${slug}/1a1a1a`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.querySelector("img").src = `https://cdn.simpleicons.org/${slug}/787671`; }}>
                  <img src={`https://cdn.simpleicons.org/${slug}/787671`} width="17" height="17" alt="" style={{ display: "block" }} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 14 }}>{c.h}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {c.links.map((l) => (
                  <a key={l} href="#" onClick={(e) => e.preventDefault()} className="footer-link"
                    style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--steel)", textDecoration: "none", transition: "color .16s ease" }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid var(--hairline)", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--stone)" }}>© 2026 Auraluxe. Rest easy.</span>
          <div style={{ display: "flex", gap: 18 }}>
            {[["Privacy", "privacy-policy.html"], ["Terms", "terms.html"], ["Accessibility", "#"]].map(([l, href]) => (
              <a key={l} href={href} onClick={href === "#" ? (e) => e.preventDefault() : undefined} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--stone)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Bento, HowItWorks, AtmosphereBand, Testimonials, RiskReversal, Faq, FinalCta, Footer });
