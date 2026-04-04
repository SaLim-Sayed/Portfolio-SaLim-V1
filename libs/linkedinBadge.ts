/** LinkedIn profile badge script — reload so embeds pick up updated DOM (e.g. theme change). */
const BADGE_SCRIPT_PREFIX = "https://platform.linkedin.com/badges/js/profile.js";

export function reloadLinkedInBadgeScript(): void {
  if (typeof document === "undefined") return;

  document.querySelectorAll("script").forEach((el) => {
    const src = el.getAttribute("src");
    if (src && src.startsWith(BADGE_SCRIPT_PREFIX)) {
      el.remove();
    }
  });

  const s = document.createElement("script");
  s.src = `${BADGE_SCRIPT_PREFIX}?t=${Date.now()}`;
  s.async = true;
  s.defer = true;
  s.type = "text/javascript";
  document.body.appendChild(s);
}
