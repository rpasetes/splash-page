# Claude Session Instructions

## On every session start and compact:
1. Read `public/docs/spec.md` — the full design spec (tasi theme, components, phases)
2. Read `public/docs/pr-plan.md` — the PR-based implementation plan

## Development rules:
- Use the `frontend-design` skill for every feature implementation
- Follow the PR plan phases in order
- Adhere to the spec's design tokens, typography, and accessibility requirements
- The site must look complete without WebGL (content-first, effects-later)
- Respect `prefers-reduced-motion` and never autoplay audio
