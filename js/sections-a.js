/* =========================================================
   Auraluxe landing - sections A
   TopNav, Hero, FeaturedIn, Showcase (alternating)
   ========================================================= */

const MAXW = 1180;
window.MAXW = MAXW;

/* ---------- Sale banner ---------- */
function SaleBanner() {
  const [show, setShow] = React.useState(true);
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 60,
      background: "var(--brand-navy)",
      color: "var(--on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: "0 auto",
      minHeight: 42,
      padding: "9px 44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0.1px",
      textAlign: "center"
    }
  }, "Spring sale \u2014 20% off your first Auraluxe with code"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "1px",
      padding: "3px 10px",
      borderRadius: "var(--r-full)",
      border: "1px solid rgba(255,255,255,0.28)",
      color: "#fff"
    }
  }, "SPRING20"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--on-dark-muted)"
    }
  }, "at checkout.")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: () => setShow(false),
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4,
      lineHeight: 0,
      color: "var(--on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "X",
    size: 16
  })));
}

/* ---------- Sticky transparent nav ---------- */
function TopNav({
  onCta
}) {
  const links = [{
    label: "How it works",
    href: "#how"
  }, {
    label: "Features",
    href: "#features"
  }, {
    label: "The science",
    href: "#science"
  }, {
    label: "Reviews",
    href: "#reviews"
  }];
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const t = document.querySelector(href);
    if (t) window.scrollTo({
      top: t.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(250,250,249,0.82)" : "rgba(250,250,249,0)",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
      transition: "background .3s ease, border-color .3s ease, backdrop-filter .3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: "0 auto",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--gutter, 40px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => go(e, "#top"),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 27
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: e => go(e, l.href),
    className: "nav-link",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--charcoal)",
      textDecoration: "none",
      transition: "color .18s ease"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onCta
  }, "Start Sleeping Better - $99.95"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    className: "nav-burger",
    onClick: () => setOpen(o => !o),
    style: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 6,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "X" : "Menu",
    size: 24
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile",
    style: {
      borderTop: "1px solid var(--hairline)",
      background: "rgba(250,250,249,0.97)",
      padding: "8px var(--gutter, 40px) 18px",
      display: "flex",
      flexDirection: "column"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: e => go(e, l.href),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--charcoal)",
      textDecoration: "none",
      padding: "13px 0",
      borderBottom: "1px solid var(--hairline-soft)"
    }
  }, l.label))));
}

/* ---------- 1 · HERO ---------- */
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(168deg, #edf0f7 0%, #f1ecf3 44%, #faf3ec 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-drift",
    style: {
      position: "absolute",
      top: "-20%",
      left: "46%",
      width: 820,
      height: 820,
      marginLeft: -410,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(119,147,199,0.30) 0%, transparent 64%)",
      filter: "blur(14px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "aura-drift2",
    style: {
      position: "absolute",
      bottom: "-24%",
      right: "4%",
      width: 520,
      height: 520,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,192,96,0.24) 0%, transparent 66%)",
      filter: "blur(14px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      position: "relative",
      maxWidth: MAXW,
      margin: "0 auto",
      padding: "78px var(--gutter, 40px) 96px",
      display: "grid",
      gridTemplateColumns: "0.86fr 1.14fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h1", {
    className: "aura-hero-display hero-h1",
    style: {
      fontSize: 64,
      margin: 0,
      color: "var(--ink)",
      textWrap: "balance",
      letterSpacing: "-2.2px"
    }
  }, "Fall asleep faster. Wake up refreshed.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-descriptor",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.5,
      color: "var(--charcoal)",
      maxWidth: 460,
      margin: "22px 0 0"
    }
  }, "Warm light that dims as you drift off, soft sound that fades the day out, and a sunrise that wakes you gently - all from one bedside device.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta
  }, "Start Sleeping Better - $99.95"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: "Play",
    onClick: () => window.location.href = "how-it-works.html"
  }, "See how it works"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 230
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      marginTop: 22
    }
  }, ["Free shipping", "100-night trial", "2-year warranty"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--charcoal)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 16,
    color: "var(--accent-deep, var(--primary-deep))",
    sw: 2.2
  }), t)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260
  }, /*#__PURE__*/React.createElement("a", {
    href: "#reviews",
    className: "hero-proof",
    onClick: e => {
      e.preventDefault();
      const t = document.querySelector('#reviews');
      if (t) window.scrollTo({
        top: t.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth'
      });
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 13,
      marginTop: 22,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--steel)",
      fontFeatureSettings: '"tnum"'
    }
  }, "4.8 \xB7 2,400+ people sleeping deeper"), /*#__PURE__*/React.createElement("span", {
    className: "hero-proof-cue",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      fontWeight: 500,
      color: "var(--accent-deep, var(--primary-deep))"
    }
  }, "Read reviews ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 15
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    className: "hero-visual",
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-pulse",
    style: {
      position: "absolute",
      width: 620,
      height: 620,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,192,96,0.40) 0%, rgba(119,147,199,0.16) 48%, transparent 72%)",
      filter: "blur(10px)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/glow-lamp-lifestyle.png",
    alt: "A soft sunrise glow lighting a bedroom in the morning",
    style: {
      position: "relative",
      width: 620,
      maxWidth: "100%",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: 28,
      boxShadow: "0 46px 84px rgba(48,40,32,0.32)"
    }
  }))));
}

/* ---------- 1a · HERO TRUST ---------- */
function HeroTrust() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero trust",
    style: {
      background: "var(--canvas)",
      borderBottom: "1px solid var(--hairline)",
      padding: "30px var(--gutter, 40px) 34px"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
      flexWrap: "wrap",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--ink)"
    }
  }, "Rated 4.8/5 by 2,400+ customers")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: "var(--hairline-strong)"
    },
    className: "hero-trust-divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/testimonial-female.png",
    alt: "",
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      objectFit: "cover",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--slate)"
    }
  }, "\u201CAsleep in under 10 minutes.\u201D ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--steel)"
    }
  }, "- Hannah R."))))));
}

/* ---------- 1b · COMPATIBILITY / SMART FEATURES MARQUEE ---------- */
function CompatibilityStrip() {
  const chips = [{
    img: "assets/alexa-logo.png",
    label: "Amazon Alexa"
  }, {
    img: "assets/logo-google-home.svg",
    label: "Google Home"
  }, {
    img: "assets/logo-bluetooth.svg",
    label: "Bluetooth"
  }, {
    img: "assets/smart-life-icon.png",
    label: "SmartLife App",
    radius: 5
  }, {
    img: "assets/logo-google-play.svg",
    label: "Google Play"
  }];
  const track = [...chips, ...chips];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Compatibility",
    style: {
      background: "var(--surface-soft)",
      borderTop: "1px solid var(--hairline)",
      borderBottom: "1px solid var(--hairline)",
      padding: "36px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: "0 auto",
      padding: "0 var(--gutter, 40px)",
      textAlign: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Works with your home")), /*#__PURE__*/React.createElement("div", {
    className: "compat-marquee",
    style: {
      overflow: "hidden",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "compat-marquee-track",
    style: {
      display: "flex",
      width: "max-content",
      gap: 56,
      alignItems: "center"
    }
  }, track.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.label + i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--charcoal)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    width: "22",
    height: "22",
    alt: "",
    style: {
      display: "block",
      flexShrink: 0,
      objectFit: "contain",
      borderRadius: c.radius || 0
    }
  }), c.label)))));
}

/* ---------- 2 · PAIN POINTS ---------- */
function PainCard({
  card,
  delay
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: delay
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      height: "100%",
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--r-xxl)",
      padding: "30px 28px 32px",
      boxShadow: hover ? "var(--elev-2)" : "var(--elev-1)",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s ease, border-color .25s ease",
      borderColor: hover ? "var(--hairline-strong)" : "var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: "var(--r-lg)",
      background: card.tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: card.icon,
    size: 23,
    color: card.ink,
    sw: 1.7
  })), /*#__PURE__*/React.createElement("h3", {
    className: "aura-h5",
    style: {
      margin: "0 0 9px",
      color: "var(--ink)",
      fontSize: 19,
      letterSpacing: "-0.2px"
    }
  }, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--slate)",
      margin: 0
    }
  }, card.body)));
}
function FeaturedIn({
  onCta
}) {
  const go = (e, href) => {
    e.preventDefault();
    const t = document.querySelector(href);
    if (t) window.scrollTo({
      top: t.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth"
    });
  };
  const cards = [{
    icon: "Moon",
    tint: "var(--card-tint-lavender)",
    ink: "var(--primary-deep)",
    title: "Can't switch your brain off at night?",
    body: "Thoughts get louder the moment the room goes quiet. A gentle wall of sound fills the silence, so your mind finally has somewhere soft to land."
  }, {
    icon: "HeartPulse",
    tint: "var(--card-tint-sky)",
    ink: "var(--primary-deep)",
    title: "Still waking up exhausted?",
    body: "Broken sleep leaves you running on empty before the day even starts. Auraluxe holds the room steady all night, for deeper, more continuous rest."
  }, {
    icon: "Smartphone",
    tint: "var(--card-tint-mint)",
    ink: "var(--primary-deep)",
    title: "Tired of checking your phone before bed?",
    body: "Blue light and one more scroll keep your brain wired long after lights out. Sound, light and timers all live on the device - so the phone can finally stay down."
  }, {
    icon: "Waves",
    tint: "var(--card-tint-cream)",
    ink: "var(--brand-orange-deep)",
    title: "Sleep that keeps breaking?",
    body: "A snore, a door, a car outside - small sounds are enough to pull you out of deep sleep. A steady floor of white noise softens the edges before they reach you."
  }, {
    icon: "Timer",
    tint: "var(--card-tint-peach)",
    ink: "var(--brand-orange-deep)",
    title: "No real bedtime routine?",
    body: "Without a consistent cue, your body never learns when it's time to rest. Auraluxe repeats the same gentle signals each night until sleep stops feeling like effort."
  }, {
    icon: "Sunrise",
    tint: "var(--card-tint-rose)",
    ink: "var(--brand-orange-deep)",
    title: "Mornings that feel like a shock?",
    body: "A blaring alarm spikes your heart rate before you're even out of bed. A warm sunrise glow wakes you gradually, so mornings arrive gently instead of all at once."
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Pain points",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--canvas)",
      borderBottom: "1px solid var(--hairline)",
      padding: "var(--sec, 104px) var(--gutter, 40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-14%",
      left: "-6%",
      width: 560,
      height: 560,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,192,96,0.16) 0%, transparent 66%)",
      filter: "blur(16px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-18%",
      right: "-6%",
      width: 600,
      height: 600,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(119,147,199,0.16) 0%, transparent 66%)",
      filter: "blur(16px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: MAXW,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 660,
      margin: "0 auto 60px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "The nights you know too well"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h1 section-h",
    style: {
      color: "var(--ink)",
      margin: "0 0 20px",
      textWrap: "balance"
    }
  }, "For the nights that keep you up"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--slate)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "Lights off, and your mind speeds up. Auraluxe meets you there - with sound that softens the room, light that fades on its own, and a morning that arrives gently instead of all at once."))), /*#__PURE__*/React.createElement("div", {
    className: "pain-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(PainCard, {
    key: c.title,
    card: c,
    delay: i * 70
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 14,
      marginTop: 52,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta
  }, "Sleep better tonight"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: "Play",
    onClick: () => window.location.href = "how-it-works.html"
  }, "See how it works")))));
}

/* ---------- 3 · ALTERNATING SHOWCASE ---------- */
function ShowcaseRow({
  row,
  flip,
  index
}) {
  const ref = React.useRef(null);
  const [off, setOff] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      if (window.__auraParallax === false) {
        setOff(0);
        return;
      }
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      let progress = (vh - r.top) / (vh + r.height); // 0..1 as it passes
      progress = Math.max(0, Math.min(1, progress));
      setOff((progress - 0.5) * 40); // clamped to ±20px
    };
    const handler = () => {
      if (!raf) raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", handler, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const media = /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      borderRadius: "var(--r-xxxl)",
      overflow: "hidden",
      boxShadow: "var(--elev-2)",
      aspectRatio: "4 / 3.2",
      background: row.bg
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: row.img,
    alt: row.alt,
    style: {
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      height: "calc(100% + 96px)",
      objectFit: "cover",
      objectPosition: row.pos || "center",
      transform: `translateY(-50%) translateY(${off}px)`,
      willChange: "transform"
    }
  }), row.glow && /*#__PURE__*/React.createElement("div", {
    className: "aura-pulse",
    style: {
      position: "absolute",
      left: "50%",
      bottom: "8%",
      width: 280,
      height: 280,
      marginLeft: -140,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${row.glow} 0%, transparent 68%)`,
      filter: "blur(6px)",
      pointerEvents: "none"
    }
  }));
  const copy = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, row.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h2 showcase-h",
    style: {
      color: "var(--ink)",
      margin: "0 0 18px",
      textWrap: "balance"
    }
  }, row.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      color: "var(--slate)",
      lineHeight: 1.62,
      margin: "0 0 24px"
    }
  }, row.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 28px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, row.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.text,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 11,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--charcoal)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 18,
    color: "var(--accent, var(--primary))",
    sw: 1.8
  })), p.text))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "link-accent",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--accent-deep, var(--primary-deep))",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, row.link, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 16
  })));
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "showcase-row",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "showcase-copy"
  }, copy), media) : /*#__PURE__*/React.createElement(React.Fragment, null, media, /*#__PURE__*/React.createElement("div", {
    className: "showcase-copy"
  }, copy))));
}
function Showcase() {
  const rows = [{
    eyebrow: "Falling asleep",
    icon: "Waves",
    img: "assets/bedroom-bassinet.jpg",
    bg: "#1b2436",
    alt: "A dim bedroom with the Glow casting warm light beside a bassinet",
    pos: "center 40%",
    glow: "rgba(240,192,96,0.34)",
    title: "Fall asleep faster",
    body: "A racing mind needs somewhere quieter to land. A soft, steady wall of sound lowers the noise of the day - the traffic, the plumbing, the thoughts that won't stop - so your body can finally start to settle.",
    points: [{
      icon: "Music",
      text: "A library of soothing soundscapes, from rain to a steady hush"
    }, {
      icon: "Waves",
      text: "White, pink and brown noise to soften household sound"
    }, {
      icon: "Lightbulb",
      text: "Warm, dimmable light that signals it's time to wind down"
    }],
    link: "Explore the sound library"
  }, {
    eyebrow: "Staying asleep",
    icon: "ShieldCheck",
    img: "assets/bedroom-nursery.jpg",
    bg: "#241a12",
    alt: "A warm sunrise-style glow lighting a bedroom at dusk",
    pos: "center 55%",
    glow: "rgba(240,192,96,0.4)",
    title: "Stay asleep longer",
    body: "Most wake-ups come from a sudden change in sound, not silence. A steady floor of white noise raises the bar a noise has to clear to wake you - so the door downstairs, the car outside, the restless partner simply fold into the quiet.",
    points: [{
      icon: "Moon",
      text: "A consistent sound floor that runs all night"
    }, {
      icon: "ShieldCheck",
      text: "Softens sudden noise instead of just masking it"
    }, {
      icon: "BatteryFull",
      text: "Up to 10 hours cordless, works while charging"
    }],
    link: "See the light in action"
  }, {
    eyebrow: "Waking up",
    icon: "Sunrise",
    img: "assets/glow-lamp-lifestyle.png",
    bg: "#0d1f3c",
    alt: "A soft sunrise glow lighting a bedroom in the morning",
    pos: "center",
    glow: "rgba(119,147,199,0.4)",
    title: "Wake naturally",
    body: "An alarm jolts your heart rate before you're even out of bed. Auraluxe wakes you with a warm sunrise glow that builds gradually over 30 minutes, so morning arrives as a cue, not a shock.",
    points: [{
      icon: "Sunrise",
      text: "A sunrise-style glow that warms gradually"
    }, {
      icon: "CalendarClock",
      text: "Save the same wake routine for every morning"
    }, {
      icon: "Smartphone",
      text: "Runs entirely on the device - no phone needed"
    }],
    link: "How the ritual works"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      background: "var(--surface-soft)",
      padding: "var(--sec, 104px) var(--gutter, 40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 640,
      margin: "0 auto 72px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Everything in one device"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h1 section-h",
    style: {
      color: "var(--ink)",
      margin: 0,
      textWrap: "balance"
    }
  }, "Fall asleep faster. Stay asleep longer. Wake naturally."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sec, 104px)"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(ShowcaseRow, {
    key: r.title,
    row: r,
    flip: i % 2 === 1,
    index: i
  })))));
}
Object.assign(window, {
  MAXW,
  SaleBanner,
  TopNav,
  Hero,
  HeroTrust,
  CompatibilityStrip,
  FeaturedIn,
  Showcase
});