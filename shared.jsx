/* =========================================================
   Auraluxe landing — shared primitives
   Exposes: Icon, Logo, Button, Eyebrow, Tag, Glow, Stars, Reveal
   Calm, periwinkle-accented, Poppins + DM Sans.
   ========================================================= */

function Icon({ name, size = 20, sw = 1.75, color = "currentColor", style }) {
  const lib = (window.lucide && window.lucide.icons) || {};
  const node = lib[name] || [];
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={style} aria-hidden="true"
    >
      {node.map((child, i) => {
        const [tag, attrs] = child;
        return React.createElement(tag, { key: i, ...attrs });
      })}
    </svg>
  );
}

function Logo({ dark = false, height = 28 }) {
  const src = dark ? "assets/mark-white.png" : "assets/mark.png";
  const color = dark ? "#ffffff" : "var(--aura-logo-blue)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
      <img src={src} alt="" style={{ height: height, width: height, objectFit: "contain" }} />
      <span style={{
        fontFamily: "var(--font-head)", fontWeight: 500,
        fontSize: height * 0.74, letterSpacing: "0.4px", color,
      }}>Auraluxe</span>
    </div>
  );
}

function Button({ variant = "primary", children, onClick, size = "md", style, icon, iconRight }) {
  const base = {
    fontFamily: "var(--font-body)", fontSize: size === "lg" ? 15.5 : 14.5, fontWeight: 500,
    lineHeight: 1.3, borderRadius: "var(--btn-radius, var(--r-md))",
    padding: size === "lg" ? "15px 28px" : "11px 20px",
    border: "1px solid transparent", cursor: "pointer",
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
    transition: "background .2s cubic-bezier(.4,0,.2,1), transform .2s cubic-bezier(.4,0,.2,1), box-shadow .2s cubic-bezier(.4,0,.2,1), border-color .2s ease",
    whiteSpace: "nowrap",
  };
  const variants = {
    primary: { background: "var(--accent, var(--primary))", color: "#fff", boxShadow: "0 1px 2px rgba(15,15,15,0.06)" },
    secondary: { background: "transparent", color: "var(--ink)", borderColor: "var(--hairline-strong)" },
    onDark: { background: "#fff", color: "var(--ink)" },
    secondaryOnDark: { background: "rgba(255,255,255,0.06)", color: "#fff", borderColor: "rgba(255,255,255,0.32)" },
    ghost: { background: "transparent", color: "var(--ink)", padding: "9px 14px" },
  };
  const [hover, setHover] = React.useState(false);
  const hoverFx = {
    primary: { background: "var(--accent-deep, var(--primary-pressed))", transform: "translateY(-1px)", boxShadow: "var(--elev-2)" },
    secondary: { background: "var(--surface)" },
    onDark: { background: "#f0eeec", transform: "translateY(-1px)" },
    secondaryOnDark: { background: "rgba(255,255,255,0.14)" },
    ghost: { background: "var(--surface)" },
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...(hover ? hoverFx[variant] : {}), ...style }}
    >
      {icon && <Icon name={icon} size={size === "lg" ? 18 : 16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "lg" ? 18 : 16} />}
    </button>
  );
}

function Eyebrow({ children, color = "var(--accent, var(--primary))", style }) {
  return (
    <div style={{
      fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 600,
      letterSpacing: "1.4px", textTransform: "uppercase", color, ...style,
    }}>{children}</div>
  );
}

function Tag({ children, dark = false }) {
  return (
    <span style={{
      fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 500,
      letterSpacing: "0.2px", borderRadius: "var(--r-full)", padding: "5px 13px",
      border: dark ? "1px solid rgba(255,255,255,0.22)" : "1px solid var(--hairline)",
      color: dark ? "rgba(255,255,255,0.82)" : "var(--steel)",
      background: dark ? "rgba(255,255,255,0.04)" : "var(--surface-soft)",
      display: "inline-flex", alignItems: "center", gap: 7,
    }}>{children}</span>
  );
}

function Stars({ size = 15, color = "var(--brand-yellow)" }) {
  return (
    <div style={{ display: "flex", gap: 2 }} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="Star" size={size} color={color} sw={0} style={{ fill: color }} />
      ))}
    </div>
  );
}

// soft radial glow — the brand's signature motif
function Glow({ size = 480, color = "rgba(119,147,199,0.45)", style, className }) {
  return (
    <div className={className} style={{
      position: "absolute", width: size, height: size, borderRadius: "50%",
      background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
      filter: "blur(10px)", pointerEvents: "none", ...style,
    }} />
  );
}

/* Scroll-reveal wrapper — gentle fade + rise via a pure CSS animation.
   No JS visibility gating, no observers/rAF (the preview embed is hostile to
   both): the @auraReveal keyframe with fill-mode:both always settles to the
   visible end-state, so content can never get stuck hidden. Reduced-motion is
   handled in CSS. The `y` and class are kept for API compatibility. */
function Reveal({ children, delay = 0, y = 18, as = "div", style, className }) {
  const Comp = as;
  const cls = "aura-reveal" + (className ? " " + className : "");
  return (
    <Comp className={cls} style={{
      ...style,
      animationDelay: `${delay}ms`,
      "--reveal-y": `${y}px`,
    }}>{children}</Comp>
  );
}

Object.assign(window, { Icon, Logo, Button, Eyebrow, Tag, Stars, Glow, Reveal });

/* ---------- Shopify checkout (cart permalink) ---------- */
const SHOP = {
  domain: "auraluxe1.myshopify.com",   // swap to shop.auraluxe.com once the branded domain is live
  variant: "48519605813539",           // Glow Lamp variant id
  discount: "SPRING20",                // auto-applied at checkout; "" to disable
  skipCart: true,                      // go straight to checkout instead of the cart page
};
function buyNow(qty = 1) {
  const p = new URLSearchParams();
  if (SHOP.discount) p.set("discount", SHOP.discount);
  if (SHOP.skipCart) p.set("return_to", "/checkout");
  const q = p.toString();
  window.location.href = `https://${SHOP.domain}/cart/${SHOP.variant}:${qty}` + (q ? "?" + q : "");
}

Object.assign(window, { SHOP, buyNow });

