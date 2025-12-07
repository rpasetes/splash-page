# portfolio website PR plan (content-first, effects-later)

this plan assumes a vite + react + ts stack and treats webgl, fish, and audio as progressive enhancements.

## non-negotiable principles

- ship identity and core content before visual effects.
- the site must feel complete with **zero** webgl.
- respect `prefers-reduced-motion` by disabling water/fish effects.
- audio is **opt-in only** and must never autoplay.
- three/tone/framer-motion-heavy features are lazy-loaded.

## layer model

1. **content layer** (always on)  
   hero, blurb, photo, social CTAs, portfolio content.

2. **base visual layer** (cheap)  
   shoreline gradient, sand texture, subtle css polish.

3. **effects layer** (optional)  
   ripple shader, click splash, rare fish, audio ambience.

## implementation phases (re-ordered)

### phase 1: foundation
- vite + react + typescript scaffold
- eslint/prettier + tsconfig paths
- css variables + typography
- file structure baseline
- vercel deployment + preview builds

### phase 2: real content + core identity layer
- static hero layout (responsive)
- add primary social CTAs
  - resume (hosted pdf on-site)
  - github
  - linkedin
  - x/twitter
- integrate actual hero photo asset
- implement the real blurb with hidden links mapped
- placeholder portfolio section

> goal: by the end of phase 2, the site already looks like *your* site and is shareable with recruiters.

### phase 3: base visual polish
- sand texture background + shoreline gradient
- photo treatment (mask/feathered edge as progressive enhancement)
- subtle motion for UI elements (reduced-motion safe)

### phase 4: effects gating framework
- central gating for:
  - `prefers-reduced-motion`
  - device class (desktop/tablet/phone)
  - optional low-power heuristics
- lazy-load effects bundle

### phase 5: water effects (start simple)
- fullscreen overlay with `pointer-events: none`
- **convincing ripple shader** on cursor movement
- click "splash" burst
- performance stabilization

### phase 6: ambient life
- fish spawning system (rare “did i just see that?” cadence)
- natural bezier swim paths + cursor avoidance
- pause when tab hidden / offscreen

### phase 7: audio (optional, user-initiated)
- audio provider + toggle UI
- gentle wave ambience loop
- splash sound hooks

### phase 8: portfolio expansion
- project data structure
- cards + lazy images
- scroll-triggered reveals
- optional deep-water visual transition

## resume hosting rules

- store at a stable path, e.g.:
  - `public/resume/russell-pasetes-resume.pdf`
- link from the hero CTA.
- avoid renaming the file/path after shipping.
- if you update frequently, keep the path stable but append a query param in the link, e.g.:
  - `/resume/russell-pasetes-resume.pdf?v=2025-12`

## social links

- github: https://github.com/rpasetes
- linkedin: https://www.linkedin.com/in/russell-pasetes-065a11160/
- x/twitter: https://x.com/rslantonie
- resume: on-site hosted pdf

## pr checklist

### pr 0 — setup
**branch:** `chore/setup-vite-react-ts`  
**labels:** `chore`, `foundation`

- [ ] scaffold vite + react + ts
- [ ] add eslint/prettier
- [ ] configure tsconfig paths + aliases
- [ ] add base folder structure
- [ ] add vercel config + preview deploy

**acceptance**
- [ ] local dev runs
- [ ] production build passes
- [ ] preview url renders app shell

---

### pr 1 — tasi design tokens + typography
**branch:** `feat/tasi-tokens-typography`  
**labels:** `design`, `foundation`

- [ ] add tasi + sand css variables
- [ ] implement type scale + base text styles
- [ ] set font loading strategy (no render blocking)

**acceptance**
- [ ] components use tokens, not hard-coded colors
- [ ] no obvious layout shift from fonts

---

### pr 2 — hero layout + page skeleton
**branch:** `feat/hero-layout`  
**labels:** `ui`, `content`

- [ ] build responsive hero layout (desktop two-column, mobile stack)
- [ ] add placeholder portfolio section below fold

**acceptance**
- [ ] looks correct across common breakpoints
- [ ] sane max-width on ultra-wide screens

---

### pr 3 — foundational social CTAs + resume pdf hosting
**branch:** `feat/social-ctas-resume-hosting`  
**labels:** `content`, `ui`, `assets`

- [ ] add hero CTA group with:
  - [ ] resume (on-site pdf)
  - [ ] github
  - [ ] linkedin
  - [ ] x/twitter
- [ ] wire real URLs:
  - [ ] https://github.com/rpasetes
  - [ ] https://www.linkedin.com/in/russell-pasetes-065a11160/
  - [ ] https://x.com/rslantonie
- [ ] add placeholder resume pdf at:
  - [ ] `public/resume/russell-pasetes-resume.pdf`
- [ ] add accessible labels for icon-only buttons
- [ ] external links include `rel="noreferrer noopener"`

**acceptance**
- [ ] resume link works in preview build
- [ ] CTAs are above the fold on mobile
- [ ] hero feels “shareable” without effects

**edge cases**
- [ ] do not use a brittle filename like `resume-final.pdf`
- [ ] treat the resume path as an API

---

### pr 4 — hero photo asset v1
**branch:** `feat/hero-photo-asset`  
**labels:** `ui`, `assets`

- [ ] integrate hero photo asset
- [ ] ensure responsive sizing
- [ ] avoid CLS (reserve space)

**acceptance**
- [ ] looks good without any animation
- [ ] fallback styling if clip-path/mask unsupported

---

### pr 5 — real blurb + hidden link mapping
**branch:** `feat/blurb-hidden-links`  
**labels:** `content`, `a11y`

- [ ] render the exact blurb text
- [ ] implement hidden link spans mapped to destinations
- [ ] hover **and keyboard focus** reveal styling
- [ ] touch behavior doesn’t hide critical navigation

**acceptance**
- [ ] all links are discoverable via tab
- [ ] focus styles are obvious and consistent

---

### pr 6 — sand/shoreline base background
**branch:** `feat/shoreline-background`  
**labels:** `design`, `ui`

- [ ] implement gradient + sand texture base
- [ ] verify text contrast

**acceptance**
- [ ] background sells “shoreline” even with no canvas

---

### pr 7 — effects gating
**branch:** `feat/effects-provider`  
**labels:** `architecture`, `performance`

- [ ] central gating rules
- [ ] dynamic import of effects modules
- [ ] device-class modes:
  - [ ] desktop full
  - [ ] tablet reduced
  - [ ] phone static/minimal

**acceptance**
- [ ] initial bundle excludes three/tone
- [ ] no flash-of-effects when prefs disable them

---

### pr 8 — water canvas v1 (convincing ripples)
**branch:** `feat/water-ripple-v1`  
**labels:** `effects`, `performance`

- [ ] fullscreen quad overlay (`pointer-events: none`)
- [ ] cursor-driven ripple + decay
- [ ] handle resize + DPR capping
- [ ] handle webgl unavailability

**acceptance**
- [ ] stable 60fps desktop on reasonable hardware
- [ ] clean fallback to base background

---

### pr 9 — click splash
**branch:** `feat/water-splash`  
**labels:** `effects`

- [ ] click burst ripple
- [ ] optional subtle particles (only if cheap)

**acceptance**
- [ ] does not interfere with buttons/links

---

### pr 10 — ambient fish
**branch:** `feat/ambient-fish`  
**labels:** `effects`

- [ ] rare spawns with randomized intervals
- [ ] bezier swim paths
- [ ] cursor avoidance
- [ ] pause on tab hidden

**acceptance**
- [ ] effect is subtle and non-distracting
- [ ] disabled under reduced motion

---

### pr 11 — audio opt-in
**branch:** `feat/audio-toggle`  
**labels:** `audio`, `a11y`

- [ ] add audio provider + toggle UI
- [ ] gentle wave loop
- [ ] hook splash sound

**acceptance**
- [ ] zero autoplay
- [ ] handles iOS user-gesture requirements
- [ ] remembers preference in localStorage

---

### pr 12 — portfolio design + real content
**branch:** `feat/portfolio-content`
**labels:** `content`, `ui`, `design`

**design implementation:**
- [ ] restore portfolio section in App.tsx
- [ ] design portfolio card layout (visual treatment, spacing, grid)
- [ ] implement "deeper water" visual transition from hero
- [ ] add scroll-triggered reveals / animations
- [ ] ensure responsive grid (desktop → tablet → mobile)
- [ ] lazy-load project images
- [ ] add hover states / interactions

**content addition:**
- [ ] define project data model (title, description, tech stack, links, image)
- [ ] add real project data (replace placeholders)
- [ ] add project images to public/images/projects/
- [ ] wire project links (github, live demo, etc.)
- [ ] add optional filter/sort if useful

**acceptance**
- [ ] content stands alone without effects
- [ ] portfolio feels like "diving deeper" from hero
- [ ] cards are visually cohesive with tasi theme
- [ ] responsive across all breakpoints
- [ ] images lazy-load efficiently

---

### pr 13 — perf + QA hardening
**branch:** `chore/perf-polish`  
**labels:** `performance`, `qa`

- [ ] ensure three resources are disposed on unmount
- [ ] throttle pointer sampling
- [ ] debounce resize
- [ ] pause rAF loops when hidden/offscreen
- [ ] quick lighthouse sanity pass

**acceptance**
- [ ] hero LCP dominated by text/photo, not effects
- [ ] no memory leaks on navigation/refresh

## edge-case checklist (global)

- [ ] webgl unavailable → effects disabled, base background still looks intentional
- [ ] webgl context loss → reinit or disable cleanly
- [ ] high dpi → cap DPR for effects
- [ ] touch devices → avoid hover-only affordances
- [ ] reduced motion → disable water + fish
- [ ] slow network → lazy-load heavy assets
- [ ] audio blocked → handle resume() rejection
- [ ] resize storms → debounce
- [ ] external links → safe rel attributes
