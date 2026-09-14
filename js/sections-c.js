/* =========================================================
   Auraluxe landing - section C
   LifestyleMosaic: one large warm lifestyle card +
   two navy accent cards. Editorial, aspirational.
   Imagery: Unsplash (warm/dim bedroom vibe) with a local
   asset fallback so nothing ever breaks.
   ========================================================= */

function NowPlayingPill({
  label,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.22)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "var(--r-full)",
      padding: "7px 16px 7px 7px",
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "#fff",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 15,
    color: "var(--brand-navy)",
    sw: 0,
    style: {
      fill: "var(--brand-navy)",
      marginLeft: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "rgba(255,255,255,0.6)"
    }
  }, sub)));
}
function LifestyleMosaic({
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
  const fallback = (e, src) => {
    if (e.currentTarget.dataset.fb) return;
    e.currentTarget.dataset.fb = 1;
    e.currentTarget.src = src;
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--canvas)",
      padding: "var(--sec, 104px) var(--gutter, 40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: window.MAXW,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: "0 0 52px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Off the clock"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h1 section-h",
    style: {
      color: "var(--ink)",
      margin: "0 0 16px",
      textWrap: "balance"
    }
  }, "Where the day finally slows down"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      color: "var(--slate)",
      lineHeight: 1.6,
      margin: 0,
      textWrap: "pretty"
    }
  }, "The last hour before sleep belongs to you. Auraluxe turns it into something to look forward to."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "mosaic-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.22fr 1fr",
      gap: 22,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("article", {
    className: "mosaic-hero",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-xxxl)",
      minHeight: 560,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "#fff",
      boxShadow: "var(--elev-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mosaic-bedroom-night.jpg",
    alt: "A warm, dim bedroom at night with soft amber lamplight",
    onError: e => fallback(e, "assets/bedroom-nursery.jpg"),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 42%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(12,18,32,0.04) 0%, rgba(12,18,32,0.30) 44%, rgba(12,18,32,0.86) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "44px 44px 42px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-purple-300)",
    style: {
      marginBottom: 14
    }
  }, "A space to recover"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-head)",
      fontSize: 32,
      fontWeight: 600,
      margin: "0 0 12px",
      letterSpacing: "-0.8px",
      lineHeight: 1.16,
      maxWidth: 420
    }
  }, "Make the bedroom yours again"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "rgba(255,255,255,0.84)",
      lineHeight: 1.6,
      margin: "0 0 26px",
      maxWidth: 440
    }
  }, "Dim the light, drop the noise, and let the room tell your body it's safe to rest. No screens, no spillover from the day - just the quiet you've been meaning to get back to."), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: e => go(e, "#how")
  }, "Build your ritual"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("article", {
    className: "mosaic-navy",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-xxxl)",
      background: "var(--brand-navy)",
      minHeight: 269,
      display: "flex",
      boxShadow: "var(--elev-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "34px 0 34px 34px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: "62%"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-head)",
      fontSize: 24,
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 10px",
      letterSpacing: "-0.5px",
      lineHeight: 1.18
    }
  }, "Put the day to rest"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "rgba(255,255,255,0.74)",
      lineHeight: 1.55,
      margin: 0
    }
  }, "Quiet a racing mind with a steady wall of sound and a low, warm light that softens the noise of the day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(NowPlayingPill, {
    label: "Gentle rain",
    sub: "playing all night"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "46%",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mosaic-resting.jpg",
    alt: "A calm person resting with eyes closed in warm light",
    onError: e => fallback(e, "assets/bedroom-bassinet.jpg"),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, var(--brand-navy) 0%, rgba(13,31,60,0.55) 36%, rgba(13,31,60,0.18) 100%)"
    }
  }))), /*#__PURE__*/React.createElement("article", {
    className: "mosaic-navy",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-xxxl)",
      background: "var(--brand-navy-deep)",
      minHeight: 269,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 34,
      boxShadow: "var(--elev-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura-pulse",
    style: {
      position: "absolute",
      top: -60,
      right: -40,
      width: 280,
      height: 280,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(119,147,199,0.30) 0%, transparent 68%)",
      filter: "blur(8px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "aura-drift",
    style: {
      position: "absolute",
      bottom: -70,
      left: -50,
      width: 240,
      height: 240,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,192,96,0.16) 0%, transparent 68%)",
      filter: "blur(8px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 46,
      height: 46,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MoonStar",
    size: 22,
    color: "var(--brand-purple-300)",
    sw: 1.6
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-head)",
      fontSize: 24,
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 10px",
      letterSpacing: "-0.5px",
      lineHeight: 1.18
    }
  }, "Unplug every night"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "rgba(255,255,255,0.74)",
      lineHeight: 1.55,
      margin: 0,
      maxWidth: 340
    }
  }, "Phone-free nights - soothing soundscapes and a soft, warm light, all from the device itself, never a screen.")), /*#__PURE__*/React.createElement("a", {
    href: "#features",
    onClick: e => go(e, "#features"),
    className: "link-accent",
    style: {
      position: "relative",
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--brand-purple-300)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      marginTop: 20
    }
  }, "Explore the library ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 16
  }))))))));
}

/* ---------- EXPERIENCE TIMELINE ---------- */
function Timeline() {
  const steps = [{
    t: "9:30 pm",
    icon: "Lamp",
    title: "Warm light begins",
    body: "The room dims on its own cue."
  }, {
    t: "9:45 pm",
    icon: "CloudRain",
    title: "Rain sounds fade in",
    body: "A steady hush settles over the house."
  }, {
    t: "10:05 pm",
    icon: "MoonStar",
    title: "You're asleep",
    body: "No screens, no scrolling, no effort."
  }, {
    t: "6:45 am",
    icon: "Sunrise",
    title: "Sunrise begins",
    body: "Light warms gradually, 30 minutes ahead."
  }, {
    t: "7:00 am",
    icon: "Sun",
    title: "Wake naturally",
    body: "No alarm. Just morning, arriving gently."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--canvas)",
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
      maxWidth: 620,
      margin: "0 auto 68px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "One ordinary night"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h1 section-h",
    style: {
      color: "var(--ink)",
      margin: 0,
      textWrap: "balance"
    }
  }, "A better night starts here."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "timeline-row",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 46,
      left: "10%",
      right: "10%",
      height: 1,
      background: "var(--hairline-strong)"
    }
  }), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 92,
      height: 92,
      borderRadius: "50%",
      background: "linear-gradient(160deg, #eef1f8, #f7efe8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      boxShadow: "var(--elev-2)",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 34,
    color: "var(--accent-deep, var(--primary-deep))",
    sw: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.6px",
      color: "var(--accent, var(--primary))",
      marginBottom: 8,
      fontFeatureSettings: '"tnum"'
    }
  }, s.t), /*#__PURE__*/React.createElement("h3", {
    className: "aura-h5",
    style: {
      color: "var(--ink)",
      margin: "0 0 6px",
      fontSize: 17
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--slate)",
      lineHeight: 1.5,
      margin: 0,
      maxWidth: 160
    }
  }, s.body)))))));
}

/* ---------- COMPARISON TABLE ---------- */
function Comparison() {
  const cols = ["Phone", "Alarm clock", "Other sunrise alarm", "Auraluxe"];
  const rows = [{
    label: "White noise",
    v: [true, false, true, true]
  }, {
    label: "Sunrise alarm",
    v: [false, false, true, true]
  }, {
    label: "No notifications",
    v: [false, true, true, true]
  }, {
    label: "App control",
    v: [true, false, true, true]
  }, {
    label: "Bedside design",
    v: [false, true, true, true]
  }, {
    label: "Routine automation",
    v: [false, false, false, true]
  }, {
    label: "One device",
    v: [false, false, true, true]
  }, {
    label: "Australian support",
    v: [false, false, false, true]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-soft)",
      padding: "var(--sec, 104px) var(--gutter, 40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 560,
      margin: "0 auto 56px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Why Auraluxe"), /*#__PURE__*/React.createElement("h2", {
    className: "aura-h1 section-h",
    style: {
      color: "var(--ink)",
      margin: 0,
      textWrap: "balance"
    }
  }, "Everything else, in one device"))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cmp-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      minWidth: 640,
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--r-xl)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--hairline)"
    }
  }), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      padding: "18px 12px",
      textAlign: "center",
      fontFamily: "var(--font-head)",
      fontSize: 15,
      fontWeight: 600,
      color: i === 3 ? "var(--accent-deep, var(--primary-deep))" : "var(--ink)",
      background: i === 3 ? "var(--card-tint-lavender)" : "transparent",
      borderBottom: "1px solid var(--hairline)"
    }
  }, c)), rows.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "15px 20px",
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--charcoal)",
      borderBottom: "1px solid var(--hairline-soft)",
      display: "flex",
      alignItems: "center"
    }
  }, r.label), r.v.map((ok, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "15px 12px",
      textAlign: "center",
      borderBottom: "1px solid var(--hairline-soft)",
      background: i === 3 ? "var(--card-tint-lavender)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, ok ? /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 18,
    color: i === 3 ? "var(--accent-deep, var(--primary-deep))" : "var(--brand-teal)",
    sw: 2.2
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "Minus",
    size: 16,
    color: "var(--hairline-strong)",
    sw: 2
  }))))))))));
}
Object.assign(window, {
  LifestyleMosaic,
  Timeline,
  Comparison
});