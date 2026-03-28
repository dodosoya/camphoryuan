# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**牛樟緣 (Camphor Yuan)** — A Taiwanese family-run camphor tree tea brand. This is a static marketing landing page for a direct-to-consumer product sold via LINE/phone. No shopping cart or payment system.

- **Live site:** https://camphoryuan.com/
- **Hosted:** GitHub Pages with custom domain (CNAME: `camphoryuan.com`)
- **Contact/purchase:** LINE official account + phone (no e-commerce)

## Architecture

Single-page static site — everything lives in `index.html`:

- **Tech:** Pure HTML5 + Tailwind CSS v3 (CDN) + Google Fonts
- **Fonts:** Noto Serif TC (Chinese), Lora (English/numbers)
- **Colors:** Forest green `#2D5016`, cream `#F5F0E8`, wood brown `#8B5E3C`, gold `#C8973A`
- **Images:** Served from `assets/` — `hero.jpg`, `story-1/2/3.jpg`, `gallery-1~5.jpg`
- **No build step, no bundler, no JavaScript framework**

## Page Sections (in order)

1. **Hero** — Full-screen camphor forest photo with Ken Burns zoom animation
2. **家族故事 (Family Story)** — Photo + narrative text, responsive 2-col layout
3. **牛樟樹介紹 (Tree Intro)** — Dark green background, 3 feature cards
4. **從山林到茶杯 (Process)** — 4-step process: harvest → wash → roast → package
5. **為什麼選擇牛樟緣 (Benefits)** — 4 icon cards (pesticide-free, mountain, smooth, aroma)
6. **農場實景 (Gallery)** — Photo grid (2-col mobile, 4-col desktop)
7. **聯絡/購買 (Contact)** — LINE QR code + phone CTA, footer

## SEO & Metadata

- Structured data (JSON-LD): `LocalBusiness` + `Product` schemas in `<head>`
- Open Graph tags for LINE/Facebook sharing
- `sitemap.xml` — update `<lastmod>` when content changes significantly
- `robots.txt` — currently allows all crawlers
- `googlec2ef2fdea405d9b4.html` — Google Search Console verification file (do not delete)

## Pending Items (from plan.md)

- [x] LINE official account QR code — `assets/contact-qr-code.jpg` added to contact section
- [ ] Phone number — `<a href="tel:">` is empty, needs real number
- [ ] LINE documentary video for the brand

## Development

Open `index.html` directly in browser — no server needed:

```bash
open index.html
```

To preview on mobile, use Chrome DevTools (F12 → device toolbar) at 375px width (iPhone SE).

Deploy by pushing to `master` branch — GitHub Pages auto-deploys.
