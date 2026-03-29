// ─────────────────────────────────────────────────────────────────────────────
// WORKPTS — WEEKLY BOSS ROSTER
// ─────────────────────────────────────────────────────────────────────────────
// Want to add a boss? Fork this repo, add your boss object below, and open a PR.
//
// Fields:
//   id          unique slug, kebab-case
//   name        display name shown in the terminal
//   health      total HP pool (suggested range: 2000–20000)
//   description flavour text shown under the boss name
//   weakness    difficulty that deals 1.5x damage: "easy"|"medium"|"hard"|"expert"
//   reward      total bonus point pool distributed to players on kill
//   lore        (optional) extra lore line shown on `boss` command
// ─────────────────────────────────────────────────────────────────────────────

const BOSSES = [
  {
    id: "the-procrastinator",
    name: "The Procrastinator",
    health: 5000,
    description: "An ancient evil that delays all progress. Feeds on pending tasks.",
    weakness: "hard",
    reward: 2000,
    lore: "Every unchecked checkbox makes it stronger."
  },
  {
    id: "meeting-moloch",
    name: "Meeting Moloch",
    health: 8000,
    description: "Consumes entire days in pointless standups and syncs.",
    weakness: "expert",
    reward: 3500,
    lore: "Has been known to schedule a meeting to discuss the meeting."
  },
  {
    id: "the-context-switcher",
    name: "The Context Switcher",
    health: 6500,
    description: "Forces constant interruptions. No deep work survives its presence.",
    weakness: "medium",
    reward: 2800,
    lore: "It has 47 browser tabs open. All pinned."
  },
  {
    id: "scope-creep",
    name: "Scope Creep",
    health: 10000,
    description: "Started as a small request. Now it wants a full rewrite.",
    weakness: "hard",
    reward: 4500,
    lore: "\"Just one more thing\" — Scope Creep, always."
  },
  {
    id: "the-estimator",
    name: "The Estimator",
    health: 7000,
    description: "Promised it would only take two weeks. That was six months ago.",
    weakness: "easy",
    reward: 3000,
    lore: "Invented the phrase 'it's 90% done'."
  },
  {
    id: "legacy-daemon",
    name: "Legacy Daemon",
    health: 12000,
    description: "Ancient code that nobody understands but everyone is afraid to touch.",
    weakness: "expert",
    reward: 5500,
    lore: "Written in 2003. The original author has not been seen since."
  },
  {
    id: "notification-swarm",
    name: "Notification Swarm",
    health: 4000,
    description: "A thousand tiny interruptions. Each one feels urgent. None are.",
    weakness: "easy",
    reward: 1800,
    lore: "Slack, email, and phone all buzzing in perfect disharmony."
  },
  {
    id: "the-perfectionist",
    name: "The Perfectionist",
    health: 9000,
    description: "Prevents shipping. Nothing is ever good enough to deploy.",
    weakness: "medium",
    reward: 4000,
    lore: "Has been 'polishing' the same PR for three weeks."
  }
];

// Make available as a module (for Node) or global (for browser via <script>)
if (typeof module !== 'undefined') module.exports = BOSSES;
