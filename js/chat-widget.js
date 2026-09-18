/* Floating contact widget — composes an email to Auraluxe support. Self-injects on load. */
(function () {
  var TO = "hello@auraluxe.com.au";
  if (window.__auraChat) return;
  window.__auraChat = true;

  var css = '' +
    '.aura-chat-launch{position:fixed;right:24px;bottom:24px;z-index:130;display:inline-flex;align-items:center;gap:10px;height:56px;padding:0 22px 0 18px;border:none;border-radius:var(--r-full);background:var(--primary);color:var(--on-primary,#fff);font-family:var(--font-body);font-size:15px;font-weight:500;letter-spacing:.1px;cursor:pointer;box-shadow:0 10px 30px rgba(13,31,60,.22);transition:transform .2s cubic-bezier(.4,0,.2,1),background .2s cubic-bezier(.4,0,.2,1),box-shadow .2s cubic-bezier(.4,0,.2,1)}' +
    '.aura-chat-launch:hover{background:var(--primary-deep);box-shadow:0 14px 36px rgba(13,31,60,.26)}' +
    '.aura-chat-launch:active{transform:scale(.98)}' +
    '.aura-chat-launch[hidden]{display:none}' +
    '.aura-chat-panel{position:fixed;right:24px;bottom:24px;z-index:131;width:352px;max-width:calc(100vw - 32px);max-height:calc(100dvh - 48px);overflow:hidden auto;background:var(--canvas);border-radius:var(--r-xxl);box-shadow:0 24px 60px rgba(13,31,60,.28);font-family:var(--font-body);animation:auraChatRise .3s cubic-bezier(.4,0,.2,1)}' +
    '@keyframes auraChatRise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
    '.aura-chat-head{position:relative;background:var(--brand-navy);color:var(--on-dark);padding:22px 52px 22px 24px}' +
    '.aura-chat-head h3{font-family:var(--font-head);font-weight:600;font-size:19px;letter-spacing:-.5px;margin:0}' +
    '.aura-chat-head p{font-size:13.5px;line-height:1.5;color:var(--on-dark-muted);margin:6px 0 0}' +
    '.aura-chat-x{position:absolute;top:16px;right:16px;width:32px;height:32px;display:grid;place-items:center;border:none;border-radius:var(--r-full);background:rgba(255,255,255,.12);color:#fff;cursor:pointer;transition:background .18s ease}' +
    '.aura-chat-x:hover{background:rgba(255,255,255,.2)}' +
    '.aura-chat-body{padding:20px 24px 24px;display:flex;flex-direction:column;gap:12px}' +
    '.aura-chat-body label{font-size:12px;font-weight:500;letter-spacing:.2px;color:var(--steel);display:block;margin-bottom:6px}' +
    '.aura-chat-body input,.aura-chat-body textarea{width:100%;font-family:var(--font-body);font-size:14.5px;color:var(--ink);background:var(--surface);border:1px solid var(--hairline);border-radius:var(--r-md);padding:11px 13px;outline:none;transition:border-color .18s ease}' +
    '.aura-chat-body textarea{min-height:96px;resize:vertical;line-height:1.5}' +
    '.aura-chat-body input:focus,.aura-chat-body textarea:focus{border-color:var(--primary);box-shadow:0 0 0 1px var(--primary)}' +
    '.aura-chat-send{margin-top:4px;width:100%;min-height:48px;border:none;border-radius:var(--r-md);background:var(--primary);color:var(--on-primary,#fff);font-family:var(--font-body);font-size:15px;font-weight:500;cursor:pointer;transition:background .18s cubic-bezier(.4,0,.2,1)}' +
    '.aura-chat-send:hover{background:var(--primary-deep)}' +
    '.aura-chat-send:active{background:var(--primary-pressed)}' +
    '.aura-chat-note{font-size:11.5px;line-height:1.5;color:var(--stone);margin:0}' +
    '.aura-chat-note a{color:var(--link-blue);text-decoration:none}' +
    '.aura-chat-note a:hover{text-decoration:underline}' +
    '.aura-chat-done{padding:28px 24px 26px;text-align:center}' +
    '.aura-chat-done .ring{width:46px;height:46px;margin:0 auto;border-radius:var(--r-full);display:grid;place-items:center;background:var(--card-tint-mint);color:var(--brand-green)}' +
    '.aura-chat-done h4{font-family:var(--font-head);font-weight:600;font-size:18px;letter-spacing:-.4px;color:var(--ink);margin:14px 0 0}' +
    '.aura-chat-done p{font-size:14px;line-height:1.55;color:var(--charcoal);margin:8px 0 0}' +
    '@media (max-width:860px){.aura-chat-launch{right:16px;bottom:96px;height:52px;padding:0 18px 0 15px;font-size:14.5px}.aura-chat-panel{right:16px;bottom:16px}}' +
    '@media (prefers-reduced-motion:reduce){.aura-chat-panel{animation:none}}';

  var s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);

  var ICON_CHAT = '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';
  var ICON_X = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var ICON_CHECK = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

  var launch = document.createElement("button");
  launch.className = "aura-chat-launch";
  launch.type = "button";
  launch.setAttribute("aria-label", "Message Auraluxe");
  launch.innerHTML = ICON_CHAT + "<span>Questions?</span>";

  var panel = document.createElement("div");
  panel.className = "aura-chat-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Message Auraluxe");
  panel.hidden = true;
  panel.innerHTML = '' +
    '<div class="aura-chat-head"><h3>Ask us anything</h3><p>A small team in Australia. We usually reply within a day.</p>' +
    '<button class="aura-chat-x" type="button" aria-label="Close">' + ICON_X + '</button></div>' +
    '<form class="aura-chat-body" novalidate>' +
    '<div><label for="aura-chat-name">Your name</label><input id="aura-chat-name" name="name" autocomplete="name" placeholder="Jamie"></div>' +
    '<div><label for="aura-chat-email">Email</label><input id="aura-chat-email" name="email" type="email" autocomplete="email" placeholder="you@example.com"></div>' +
    '<div><label for="aura-chat-msg">How can we help?</label><textarea id="aura-chat-msg" name="message" placeholder="Shipping, sounds, sleep questions - anything."></textarea></div>' +
    '<button class="aura-chat-send" type="submit">Send your note</button>' +
    '<p class="aura-chat-note">This opens your email app with the note ready to send to <a href="mailto:' + TO + '">' + TO + '</a>.</p>' +
    '</form>';

  document.body.appendChild(launch);
  document.body.appendChild(panel);

  var form = panel.querySelector("form");
  var closeBtn = panel.querySelector(".aura-chat-x");

  function open() { panel.hidden = false; launch.hidden = true; panel.querySelector("#aura-chat-name").focus(); }
  function close() { panel.hidden = true; launch.hidden = false; }

  launch.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) close(); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var msg = form.message.value.trim();
    if (!msg) { form.message.focus(); return; }
    var subject = "Auraluxe enquiry" + (name ? " from " + name : "");
    var body = msg + "\n\n--\n" + (name ? name + "\n" : "") + (email ? email + "\n" : "") + "Sent from " + window.location.href;
    window.location.href = "mailto:" + TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    panel.innerHTML = '<div class="aura-chat-head"><h3>Thanks for writing</h3><p>We read every note.</p>' +
      '<button class="aura-chat-x" type="button" aria-label="Close">' + ICON_X + '</button></div>' +
      '<div class="aura-chat-done"><div class="ring">' + ICON_CHECK + '</div>' +
      '<h4>Your email is ready to send</h4>' +
      '<p>Your mail app should have opened with the note filled in. If it didn\'t, write to <a href="mailto:' + TO + '" style="color:var(--link-blue)">' + TO + '</a>.</p></div>';
    panel.querySelector(".aura-chat-x").addEventListener("click", close);
  });
})();
