/* The Wavy Society — single source of truth for every status label on the site.
   index.html, trust.html, flow.html and token.html all read this file,
   so the site can never contradict itself about what is live. */
window.WAVY_STATUS = [
  { label: "Token", text: "Not launched", state: "pending" },
  { label: "Standard", text: "Bankr Doppler · Base", state: "live" },
  { label: "Manifest", text: "Open", state: "live" },
  { label: "Ship's Store", text: "Open · presale", state: "live" },
  { label: "Life Ledger", text: "Preview — not connected", state: "locked" },
  { label: "Harbor Press", text: "Open — closes at launch", state: "pending" }
];

/* Verified facts. Anything not listed here is not claimed anywhere on the site. */
window.WAVY_META = {
  name: "Wavy Society",
  symbol: "WAVY",
  chain: "Base",
  contract: null, /* no token exists yet — no address to show */
  plannedStandard: "Bankr Doppler standard: 100B supply, 85% liquidity / 15% creator vesting (1 year, 30-day cliff)",
  treasurySafe: "0x594c0Bb58D103d5A603eeA62167A54095d939039",
  treasuryNote: "Treasury Safe is deployed on Base with a single owner. Presale payments land here and nowhere else."
};
