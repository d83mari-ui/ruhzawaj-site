# RuhZawaj

> A faith-centred Muslim matrimonial platform built on privacy, character and sincere marriage intentions.

RuhZawaj is a serious Islamic matrimonial website for practising Muslims seeking halal marriage. Every page on the platform reflects Islamic values — no public photographs, no casual chatting, no dating-app feel. Every profile is manually approved, every user takes an Oath Before Allah before registering, and identity is verified through a secure platform-only video call system (max 3 calls per matched pair) instead of photo exchange.

## What this repository contains

A complete, static, multi-page website. Every page is plain HTML with shared CSS and JavaScript — no build step required.

## Project structure

```
/
├── index.html                  # Homepage (Quran ayah, search, featured profiles, How It Works, Why Different, Founder card, Revert Sisters)
├── about.html                  # About RuhZawaj
├── founder.html                # Meet the Founder — Maria Soares
├── search.html                 # Browse Profiles (12 verified illustrations)
├── oath.html                   # Oath Before Allah (mandatory pre-registration)
├── register.html               # Two-card registration (women free / men £20 one-time)
├── login.html                  # Account login
├── how-it-works.html           # 6-step process overview
├── video-call.html             # Secure Video Call System explained (max 3 calls)
├── resources.html              # Knowledge Centre directory
├── contact.html                # Contact form + departmental emails
├── faq.html                    # FAQ accordion
├── help.html                   # Help Centre guides
├── safety.html                 # Safety Tips, red flags, scam awareness
├── wali.html                   # Wali Guidance (Islamic marriage)
├── support-revert.html         # Support for revert sisters (free lifetime access)
├── privacy.html                # GDPR-compliant Privacy Policy
├── terms.html                  # Terms & Conditions
├── cookies.html                # Cookie Policy
│
├── favicon.png                 # Site favicon (root)
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Shared global stylesheet (design tokens, header, footer, components)
│   ├── js/
│   │   └── main.js             # Shared JavaScript (FAQ accordion, scroll reveal, year stamp)
│   ├── images/
│   │   ├── favicon.png         # Favicon
│   │   ├── logo-mark-gold.png  # Gold hearts logo mark (light bg)
│   │   └── logo-mark-dark.png  # Logo mark (dark bg variant)
│   └── icons/                  # (Reserved for future icon assets)
│
├── README.md                   # This file
└── .gitignore
```

## Main pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage: hero ayah, search bar, featured profiles, How It Works, Why RuhZawaj Is Different, Founder card, Support Revert Sisters |
| `oath.html` | The binding pre-registration oath every user must take |
| `register.html` | Gender-specific registration (free for women, £20 one-time for men) |
| `search.html` | Browse 12 verified profiles (no photographs — Islamic illustrations only) |
| `video-call.html` | Secure video call system: max 3 calls per pair, recording blocked |
| `founder.html` | Maria Soares — Founder & CEO story and platform values |
| `privacy.html` `terms.html` `cookies.html` | Full GDPR-compliant legal pages |

## How to open the website locally

This is a pure static site — no build tools required.

### Option 1 — Open directly
Just double-click `index.html` in your file browser. It will open in your default browser.

### Option 2 — Local web server (recommended)
For best results (avoids browser security quirks with local files), run a tiny local server:

**Python (any version 3.x):**
```bash
cd ruhzawaj-site
python3 -m http.server 8000
```
Then open <http://localhost:8000> in your browser.

**Node.js (if installed):**
```bash
cd ruhzawaj-site
npx serve .
```

**VS Code:**
Install the *Live Server* extension, right-click `index.html`, then *Open with Live Server*.

## How to edit styles

The site uses a clean shared-stylesheet approach.

**For site-wide design changes** (colors, fonts, header, footer, buttons, cards):
Edit `assets/css/styles.css`. The file starts with CSS custom properties (design tokens) — change those to update the entire palette in one place:

```css
:root{
  --plum: #3D0F5C;          /* primary brand purple */
  --gold-light: #D4A843;    /* champagne gold accents */
  --ivory: #FAF5EB;         /* warm light background */
  --navy: #0F0A1E;          /* dark heading text */
  /* ... */
}
```

**For page-specific styling** (homepage hero, search grid, video-call mockup, founder hero, registration cards, oath form, legal-page typography):
Each page keeps its specialised CSS inline inside its own `<style>` block. Edit the relevant HTML file directly.

**For shared scripts** (FAQ accordion, scroll-reveal animation, year auto-stamp):
Edit `assets/js/main.js`. It runs site-wide on every page.

**For page-specific scripts** (oath form validation, register redirect guard, video-call mockup interactions):
These remain inline in the relevant HTML file's `<script>` block.

## Design system

- **Fonts:** Cormorant Garamond (headings), Lora (body), Jost (labels), Amiri (Arabic)
- **Palette:** Royal purple (`#3D0F5C`), Champagne gold (`#D4A843`), Ivory (`#FAF5EB`), Navy text (`#0F0A1E`)
- **Pattern:** Subtle Islamic geometric ornaments at low opacity across hero sections
- **Avatars:** Four faceless premium SVG illustration styles — Female Hijab, Female Niqab, Male Arab (kufi + thobe), Male Non-Arab (suit + styled hair)

## How to deploy later

The whole site is static, so it can be hosted anywhere that serves HTML files.

### Recommended free hosts

**GitHub Pages** (easiest, free, custom-domain capable):
1. Push this repo to GitHub
2. Settings → Pages → Source: branch `main`, folder `/ (root)`
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/`

**Netlify**:
1. Drag & drop the project folder onto <https://app.netlify.com/drop>
2. Get an instant live URL like `https://your-site.netlify.app`
3. Optionally connect your GitHub repo for continuous deployment

**Cloudflare Pages**:
1. Connect your GitHub repo at <https://pages.cloudflare.com>
2. Build command: leave empty. Output directory: `/`

**Custom domain (ruhzawaj.com):**
Once a host is connected, point your domain's DNS at the host's provided records. Both GitHub Pages and Netlify support free SSL via Let's Encrypt.

## Future development roadmap

The current codebase is the foundation. Planned upgrades:

- Backend account creation, oath storage, manual approval workflow
- Stripe / Wise integration for the one-time £20 male registration fee
- Encrypted messaging system gated by mutual interest
- WebRTC-based secure video call with recording/screenshot blocking
- AI moderation pipeline (flagging inappropriate language, harassment, scams)
- Wali-integrated profiles
- Revert sister filters
- Islamic compatibility questionnaires
- Country-based moderation
- Scholar-approved marriage guidance
- Women-only support resources

## License

All rights reserved. © 2026 RuhZawaj.

## Contact

- General: hello@ruhzawaj.com
- Privacy: privacy@ruhzawaj.com
- Safety: safety@ruhzawaj.com
- Wali Support: wali@ruhzawaj.com
