import posthog from "posthog-js";

// Public project key (safe to ship in the browser).
posthog.init("phc_qggRJMgEH2rGukxhrNrHieAGQYyYApondAFzVL2nj3Us", {
  api_host: "https://us.i.posthog.com",
  defaults: "2025-05-24",
  capture_pageview: "history_change",
  autocapture: true,
});
