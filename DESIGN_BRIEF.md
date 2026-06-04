# Portfolio Design Brief

**Repo:** `stuart-clark-portfolio` (Vercel-hosted)
**Live URL:** https://stuart-clark-portfolio.vercel.app/
**Owner:** Stuart Clark
**Last reviewed:** 2026-06-03

---

## How to use this brief

You are Claude Code working in this repo. Read this file before making any changes.

Work through the PRs in order. **One PR per section.** Do not bundle. Do not redesign anything not listed. After each PR, stop and let Stuart review the Vercel preview before continuing.

If you are about to touch a file or change a pattern not explicitly named below, **stop and ask first**.

---

## Positioning (the why behind every change)

Stuart is an ML Engineer targeting **remote roles in RegTech, risk-tech, insurtech, and AI governance** (CUBE Global, Quantexa, Napier AI, Corlytics, Suade Labs).

His differentiator is **production ML + 14 years of regulated-domain expertise** — not a career-pivot story. Every change should move the site away from "personal journey" framing and toward "technical authority for regulated environments."

The Projects section copy is already strong (specific metrics, real tech, defensible failure analysis). Do not rewrite it. Build the rest of the site to match that register.

---

## PR 1 — Typos and friction (30 min)

**Scope:** Three text fixes. Nothing else.

- Nav: `Project` → `Projects` (singular → plural)
- Experience section: `local goverment` → `local government`
- Experience section: `enforecement` → `enforcement`
- Projects section: remove the line `"Note: Project materials will be made available upon request"`. If a dissertation PDF exists in the repo, link it directly from the "Dissertation PDF" tile. If not, leave the tile pointing to a `mailto:` or remove the tile.

**Acceptance:** `grep -ri "goverment\|enforecement"` returns nothing. Nav reads "Projects." Friction wall gone.

**Do not:** touch styling, copy, or component structure elsewhere.

---

## PR 2 — Hero CTAs (30 min)

**Scope:** Replace the two hero buttons. Keep all other hero content for now.

- Primary button (currently "Connect on LinkedIn") → **`View Live Demo`** linking to the deployed AWS triage API
- Secondary button (currently "View Projects") → **`Read the Dissertation`** linking to the dissertation PDF (or `#projects` if PDF not yet linked)
- Move the LinkedIn link to the footer/contact section. It should not be the primary hero CTA.

**Acceptance:** Hero CTAs reflect technical work, not networking. LinkedIn still discoverable but not above the fold.

**Do not:** redesign button styles, change hero copy, change the headshot, or touch the rest of the page.

---

## PR 3 — Fix the animation-gating bug (1–2 hrs)

**Scope:** The most important change on this list. Scroll-triggered reveals currently set `opacity: 0` until an IntersectionObserver fires. This means LinkedIn link previews, recruiter screenshots, email/Slack unfurls, and SEO crawlers all see a blank page below the hero.

**Fix:** Change the reveal pattern from opacity-based to transform-only.

- Find the IntersectionObserver / fade-in classes (likely a `motion.div`, `useInView`, or a Tailwind `opacity-0 → opacity-100` pattern).
- Replace with: `transform: translateY(12px); opacity: 1` initial → `transform: translateY(0)` on intersection.
- Content must be **fully visible in the DOM and rendered** at all times. Only the *motion* is conditional.

**Acceptance:**

- View source / browser inspector with JS disabled: every section's text content is visible.
- Take a screenshot at `https://link-preview-tester.com/` or paste the URL into a Slack DM to self — preview shows real content.
- Animations still feel smooth on actual scroll.

**Do not:** add or remove sections, restyle anything, change copy.

---

## PR 4 — Proof strip under hero (1 hr)

**Scope:** Add a single horizontal strip immediately below the hero CTAs, before "About Me."

Content (use exactly these numbers — they're from the dissertation):

```
Live on AWS ECS  ·  180,000 OSHA records  ·  Macro-AUC 0.78  ·  F1 0.81  ·  Open source
```

**Style:** Small monospaced text, generous letter-spacing, separator dots, single horizontal line. No icons, no chips, no colour. Quiet authority.

**Acceptance:** A recruiter scrolling at speed gets a numeric snapshot of credibility within 2 seconds of the hero.

**Do not:** add badges, gradient backgrounds, animated counters, or icons.

---

## PR 5 — Hero copy rewrite (1 hr)

**Scope:** Replace H1, sub, and the "Open to Opportunities" pill copy. Headshot, layout, and component structure stay.

Current:
- H1: "From Safety Expert to AI Engineer"
- Sub: "Bridging 18 years of occupational safety consulting with cutting-edge machine learning to solve real-world problems"

New:
- H1: **ML Engineer for regulated, high-stakes domains**
- Sub: Production NLP and explainable AI, built for RegTech, risk, and compliance. Fourteen years inside the regulations the models have to satisfy.
- Pill: keep `Open to Opportunities` but add specificity: `Open to Opportunities  ·  Remote  ·  UK-based`

**Acceptance:** Hero leads with capability, not career narrative. A RegTech hiring manager scanning for three seconds gets: what he does, who it's for, why he's different.

**Do not:** touch the headshot, the gradient background (we'll do palette in PR 6), or any other section.

---

## PR 6 — Palette and typography drift (2–3 hrs)

**Scope:** Move the visual register from "personal brand / coaching site" toward "instrument-grade / scientific authority." Reference image: `empirical_quiet_plate_xvii.png` (ask Stuart for it; drag into chat).

**Token changes** (do these in your design tokens file, e.g. `tailwind.config.ts` or CSS variables):

| Token | Before (approx) | After |
|---|---|---|
| Page background | light blue gradient | warm off-white `#F3EEE2` |
| Primary text | near-black | warm near-black `#181614` |
| Secondary text | grey-blue | warm graphite `#605A50` |
| Accent | bright blue | one of: iron-red `#AA342C` or oxidised blue `#2C4A66` — used **once per screen**, never decoratively |
| Display font | current serif | `Gloock` or `Crimson Pro Bold` |
| Body font | current sans | keep, or switch to `Instrument Sans` |
| Label / metadata font | current | `Geist Mono` or `JetBrains Mono` |

**Rules:**

- The accent colour is used for **one element per screen**: a single CTA, a single threshold marker, a single emphasis. Not chip backgrounds.
- Replace decorative coloured chips in the Skills section with monospaced text tags on a hairline border.
- Remove the gradient on the hero. Use flat warm off-white.
- Headshot stays circular but lose the blue glow / gradient ring if present.

**Acceptance:** The site feels closer to a Bauhaus + scientific monograph than a coaching landing page. Compare side-by-side with the reference image — palette and tone should rhyme.

**Do not:** redesign layouts, restructure sections, change copy, or add new components. This PR is tokens-only where possible.

---

## What is NOT in scope (do not do these without explicit go-ahead)

- Buying or wiring up a custom domain
- Migrating frameworks
- Adding a blog, dark mode, language switcher, or contact form
- Reworking the Projects section copy (it's already strong)
- Adding analytics, tracking, or cookie banners
- Anything involving `npm install` of new UI libraries

---

## Verification after every PR

1. Run `npm run dev`, open at desktop (1440×900) and mobile (375×812) widths.
2. Screenshot both. Drag screenshots into Claude Code and ask: *"Compare to DESIGN_BRIEF.md PR N acceptance criteria. What's still off?"*
3. Push to the branch. Open the Vercel preview URL on a real device.
4. Check that with JS disabled, content is still visible (PR 3 onward).
5. Only then merge.

---

## Reference assets

- Design philosophy: `empirical_quiet.md`
- Visual reference plate: `empirical_quiet_plate_xvii.png`
- Stuart's CV for content authority: `Stuart_Clark_CV.pdf` (in `Get Job/`)
