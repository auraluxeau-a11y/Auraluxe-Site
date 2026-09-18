/* =========================================================
   Auraluxe — "How it works" page sections
   Nav, Hero, 3-step journey w/ connecting timeline, Final CTA
   ========================================================= */
const HMAXW = 1180;
function HowNav({
  onCta
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(250,250,249,0.86)" : "rgba(250,250,249,0)",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
      transition: "background .3s ease, border-color .3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: HMAXW,
      margin: "0 auto",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--gutter, 40px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26
  })), /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "nav-link",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--charcoal)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowLeft",
    size: 16
  }), " Back to Auraluxe"), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta-wrap"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onCta
  }, "Start Sleeping Better - $99.95"))));
}
function HowHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(168deg, #edf0f7 0%, #f1ecf3 44%, #faf3ec 100%)",
      padding: "88px var(--gutter,40px) 96px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-drift",
    style: {
      position: "absolute",
      top: "-22%",
      left: "50%",
      width: 760,
      height: 760,
      marginLeft: -380,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(119,147,199,0.28) 0%, transparent 64%)",
      filter: "blur(14px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 0
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: "center",
      display: "flex"
    }
  }, "Sound \u2022 Light \u2022 Ritual")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h1", {
    className: "aura-hero-display",
    style: {
      fontSize: 56,
      margin: "18px 0 0",
      color: "var(--ink)",
      textWrap: "balance",
      letterSpacing: "-1.8px"
    }
  }, "How Auraluxe works")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "aura-subtitle",
    style: {
      color: "var(--charcoal)",
      maxWidth: 520,
      margin: "18px auto 0"
    }
  }, "Three quiet steps, once. Then every night takes care of itself."))));
}

/* ---------- shared step marker + connecting line ---------- */
function StepMarker({
  n,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 56
    },
    className: "how-step-marker"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--canvas)",
      border: "1.5px solid var(--accent-deep, var(--primary-deep))",
      color: "var(--accent-deep, var(--primary-deep))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-head)",
      fontWeight: 600,
      fontSize: 17,
      flexShrink: 0,
      zIndex: 2,
      boxShadow: "var(--elev-1)"
    }
  }, n), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      width: 2,
      marginTop: 4,
      background: "var(--hairline)",
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-line-fill",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      background: "linear-gradient(var(--accent-deep, var(--primary-deep)), var(--brand-orange))",
      transformOrigin: "top"
    }
  })));
}

/* ---------- waveform bars (animated) ---------- */
function Waveform({
  active,
  color = "var(--accent, var(--primary))"
}) {
  const bars = [10, 18, 26, 16, 22, 12, 20];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3,
      height: 26
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      borderRadius: 2,
      background: color,
      height: h,
      animation: active ? `wavePulse 1.1s ease-in-out ${i * 0.09}s infinite` : "none",
      opacity: active ? 1 : 0.35,
      transition: "opacity .3s ease"
    }
  })));
}
const SOUNDS = [{
  name: "White noise",
  desc: "Steady & even",
  icon: "AudioWaveform"
}, {
  name: "Rain",
  desc: "Soft, steady rainfall",
  icon: "CloudRain"
}, {
  name: "Ocean",
  desc: "Slow rolling waves",
  icon: "Waves"
}, {
  name: "Brown noise",
  desc: "Deep, low rumble",
  icon: "CircleDashed"
}, {
  name: "Fan sounds",
  desc: "Gentle mechanical hum",
  icon: "Fan"
}];

/* ---------- STEP 1 · choose your sound ---------- */
function Step1() {
  const [sel, setSel] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    className: "how-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "how-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step one"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h2",
    style: {
      margin: "12px 0 0"
    }
  }, "Choose tonight's sound"), /*#__PURE__*/React.createElement("p", {
    className: "aura-body",
    style: {
      color: "var(--charcoal)",
      margin: "16px 0 0",
      maxWidth: 420
    }
  }, "White noise, rain, ocean, brown noise, or a gentle fan hum \u2014 pick the one that quiets your mind tonight. Switch anytime, right from the app.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    className: "how-visual",
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-caption",
    style: {
      color: "var(--steel)",
      textAlign: "center"
    }
  }, "Tonight's sound"), /*#__PURE__*/React.createElement("div", {
    className: "aura-h5",
    style: {
      textAlign: "center",
      margin: "4px 0 20px"
    }
  }, "Pick what helps you drift"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, SOUNDS.map((s, i) => {
    const active = sel === i;
    return /*#__PURE__*/React.createElement("button", {
      key: s.name,
      onClick: () => setSel(i),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: "var(--r-lg)",
        border: active ? "1.5px solid var(--accent, var(--primary))" : "1px solid var(--hairline)",
        background: active ? "var(--card-tint-lavender)" : "var(--surface-soft)",
        cursor: "pointer",
        textAlign: "left",
        transition: "all .25s cubic-bezier(.4,0,.2,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: active ? "var(--canvas)" : "var(--card-tint-gray)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 16,
      color: active ? "var(--accent-deep, var(--primary-deep))" : "var(--steel)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "aura-body-sm-medium",
      style: {
        color: "var(--ink)"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      className: "aura-micro",
      style: {
        color: "var(--steel)"
      }
    }, s.desc)), /*#__PURE__*/React.createElement(Waveform, {
      active: active
    }));
  }))))));
}

/* ---------- STEP 2 · personalise routine ---------- */
function EveningTimeline() {
  const pts = [{
    t: "9:30 PM",
    label: "Volume eases",
    icon: "Volume2"
  }, {
    t: "10:00 PM",
    label: "Lights dim",
    icon: "Lamp"
  }, {
    t: "10:30 PM",
    label: "Timer begins",
    icon: "Timer"
  }, {
    t: "6:30 AM",
    label: "Sunrise wakes you",
    icon: "Sunrise"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "evening-timeline",
    style: {
      position: "relative",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 19,
      height: 2,
      borderRadius: 2,
      background: "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-purple) 45%, var(--brand-orange) 78%, var(--brand-yellow) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${pts.length}, 1fr)`,
      position: "relative"
    }
  }, pts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: i === pts.length - 1 ? "aura-pulse" : "",
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--canvas)",
      border: "1px solid var(--hairline-strong)",
      boxShadow: "var(--elev-1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 17,
    color: "var(--accent-deep, var(--primary-deep))"
  })), /*#__PURE__*/React.createElement("div", {
    className: "aura-micro-uppercase",
    style: {
      color: "var(--stone)"
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    className: "aura-caption",
    style: {
      color: "var(--charcoal)",
      maxWidth: 96
    }
  }, p.label)))));
}
function RoutineRow({
  icon,
  label,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 0",
      borderBottom: "1px solid var(--hairline-soft)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: "var(--steel)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aura-body-sm-medium",
    style: {
      flex: 1,
      color: "var(--ink)"
    }
  }, label), right);
}
function Step2() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "how-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    className: "how-visual",
    style: {
      display: "flex",
      justifyContent: "center",
      order: 2
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-caption",
    style: {
      color: "var(--steel)",
      textAlign: "center"
    }
  }, "Wind-down routine"), /*#__PURE__*/React.createElement("div", {
    className: "aura-h5",
    style: {
      textAlign: "center",
      margin: "4px 0 18px"
    }
  }, "Personalise your night"), /*#__PURE__*/React.createElement(RoutineRow, {
    icon: "Timer",
    label: "Sleep timer",
    right: /*#__PURE__*/React.createElement("span", {
      className: "aura-caption-bold",
      style: {
        color: "var(--accent-deep, var(--primary-deep))"
      }
    }, "45 min")
  }), /*#__PURE__*/React.createElement(RoutineRow, {
    icon: "CalendarClock",
    label: "Schedule",
    right: /*#__PURE__*/React.createElement("span", {
      className: "aura-caption-bold",
      style: {
        color: "var(--ink)"
      }
    }, "10:30 PM\u20136:30 AM")
  }), /*#__PURE__*/React.createElement(RoutineRow, {
    icon: "Volume2",
    label: "Volume",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 78,
        height: 4,
        borderRadius: 2,
        background: "var(--hairline)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "38%",
        borderRadius: 2,
        background: "var(--accent, var(--primary))"
      }
    }))
  }), /*#__PURE__*/React.createElement(RoutineRow, {
    icon: "Lamp",
    label: "Ambient light",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, ["#f0c060", "#e8a0bf", "#7793C7"].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: c,
        border: i === 0 ? "2px solid var(--ink)" : "1px solid var(--hairline)"
      }
    })))
  }), /*#__PURE__*/React.createElement(RoutineRow, {
    icon: "Sunrise",
    label: "Sunrise alarm",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 19,
        borderRadius: 10,
        background: "var(--accent, var(--primary))",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 2,
        right: 2,
        width: 15,
        height: 15,
        borderRadius: "50%",
        background: "#fff"
      }
    }))
  })))), /*#__PURE__*/React.createElement(Reveal, {
    className: "how-copy",
    style: {
      order: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step two"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h2",
    style: {
      margin: "12px 0 0"
    }
  }, "Personalise your ritual"), /*#__PURE__*/React.createElement("p", {
    className: "aura-body",
    style: {
      color: "var(--charcoal)",
      margin: "16px 0 0",
      maxWidth: 420
    }
  }, "Set a sleep timer, a nightly schedule, the volume that fades you out, ambient light that dims with you, and a sunrise that wakes you slowly. Once is enough."))), /*#__PURE__*/React.createElement(EveningTimeline, null));
}

/* ---------- STEP 3 · sleep, wake gently ---------- */
function SunriseArc() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 220,
      height: 110,
      overflow: "hidden",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: "rgba(255,255,255,0.28)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "how-sun",
    style: {
      position: "absolute",
      width: 26,
      height: 26,
      borderRadius: "50%",
      left: "50%",
      bottom: 0,
      marginLeft: -13,
      background: "radial-gradient(circle, #ffe3a8 0%, var(--brand-yellow) 70%)",
      boxShadow: "0 0 24px 6px rgba(240,192,96,0.55)"
    }
  }));
}
function Chip({
  icon,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 14px",
      borderRadius: "var(--r-full)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.16)",
      backdropFilter: "blur(6px)",
      color: "var(--on-dark)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: "var(--on-dark)"
  }), " ", children);
}
function Step3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "how-step3",
    style: {
      position: "relative",
      borderRadius: "var(--r-xxxl)",
      overflow: "hidden",
      background: "linear-gradient(180deg, var(--brand-navy-deep) 0%, var(--brand-navy) 60%, var(--brand-navy-mid) 100%)",
      padding: "72px var(--gutter,40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-drift",
    style: {
      position: "absolute",
      top: "10%",
      left: "12%",
      width: 420,
      height: 420,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(119,147,199,0.30) 0%, transparent 68%)",
      filter: "blur(16px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "aura-drift2",
    style: {
      position: "absolute",
      bottom: "-10%",
      right: "8%",
      width: 380,
      height: 380,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,192,96,0.22) 0%, transparent 66%)",
      filter: "blur(16px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "how-grid",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "how-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-purple-300)"
  }, "Step three"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h2",
    style: {
      margin: "12px 0 0",
      color: "var(--on-dark)"
    }
  }, "Drift off. Wake gently."), /*#__PURE__*/React.createElement("p", {
    className: "aura-body",
    style: {
      color: "var(--on-dark-muted)",
      margin: "16px 0 0",
      maxWidth: 420
    }
  }, "Warm light fades to dark as your sound plays on, steady until morning. A sunrise glow builds slowly over your last thirty minutes \u2014 you wake before an alarm ever needs to."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: "Waves"
  }, "Rain, low volume"), /*#__PURE__*/React.createElement(Chip, {
    icon: "Moon"
  }, "Lights out at 10:30"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    className: "how-visual",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 230
    }
  }, /*#__PURE__*/React.createElement(Glow, {
    size: 340,
    color: "rgba(240,192,96,0.35)",
    style: {
      top: "10%",
      left: "50%",
      marginLeft: -170
    },
    className: "aura-pulse"
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/glow-lamp-cutout.png",
    alt: "Auraluxe device glowing softly on a nightstand",
    style: {
      position: "relative",
      width: "100%",
      display: "block",
      filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.45))"
    }
  })), /*#__PURE__*/React.createElement(SunriseArc, null), /*#__PURE__*/React.createElement("div", {
    className: "aura-micro-uppercase",
    style: {
      color: "var(--on-dark-muted)"
    }
  }, "6:30 AM \xB7 sunrise begins"))));
}

/* ---------- phone bezel (shared shell) ---------- */
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      borderRadius: 42,
      background: "#141414",
      padding: 10,
      boxShadow: "var(--elev-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 32,
      background: "var(--surface-soft)",
      overflow: "hidden",
      minHeight: 500,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: "50%",
      marginLeft: -34,
      width: 68,
      height: 20,
      borderRadius: 12,
      background: "#141414",
      zIndex: 3
    }
  }), children));
}

/* ---------- journey wrapper ---------- */
function Journey() {
  const steps = [Step1, Step2, Step3];
  return /*#__PURE__*/React.createElement("section", {
    id: "journey",
    style: {
      maxWidth: HMAXW,
      margin: "0 auto",
      padding: "var(--sec,104px) var(--gutter,40px)"
    }
  }, steps.map((S, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "how-journey-row",
    style: {
      display: "flex",
      gap: 32,
      marginBottom: i < steps.length - 1 ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement(StepMarker, {
    n: i + 1,
    last: i === steps.length - 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: i < steps.length - 1 ? 88 : 0
    }
  }, /*#__PURE__*/React.createElement(S, null)))));
}
function HowFinalCta({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface)",
      padding: "var(--sec,104px) var(--gutter,40px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    className: "aura-h2",
    style: {
      margin: 0,
      textWrap: "balance"
    }
  }, "Set it once. Sleep better every night."), /*#__PURE__*/React.createElement("p", {
    className: "aura-body",
    style: {
      color: "var(--charcoal)",
      maxWidth: 460,
      margin: "14px auto 0"
    }
  }, "Try Auraluxe for 100 nights. If it isn't calmer, send it back \u2014 we cover return shipping."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta
  }, "Start Sleeping Better - $99.95"))));
}
Object.assign(window, {
  HowNav,
  HowHero,
  Journey,
  HowFinalCta
});