# jvcByte — Clothing Brand UI Templates

A collection of 8 responsive eCommerce templates built for clothing brands. Includes fully-featured Bootstrap-based layouts and clean hand-coded minimalist designs — all branded for jvcByte.

Live site: [https://jvcbyte.github.io/clothing_brand_ui_templates](https://jvcbyte.github.io/clothing_brand_ui_templates)

---

## Templates

| # | Name | Style | Tech |
|---|------|-------|------|
| 1 | Classic Fashion | Full-width hero slider, countdown deals, multi-section layout | Bootstrap 4 |
| 2 | Modern Marketplace | Structured header, category grid, sidebar filters | Bootstrap 4 |
| 3 | Minimal Lifestyle | Whitespace-driven, editorial feel, newsletter popup | Bootstrap 4 |
| 4 | Urban Boutique | Dark-accented skin, Instagram feed, newsletter popup | Bootstrap 4 |
| 5 | Luxury Fashion | Full-screen scroll sections, Playfair Display typography | Bootstrap 4 |
| 6 | Noir | Dark editorial, animated ticker, serif headlines, gold accent | Vanilla CSS |
| 7 | Studio | Split-screen hero, tabbed product grid, light & minimal | Vanilla CSS |
| 8 | Warm | Earthy palette, full-width hero, promise strip, newsletter | Vanilla CSS |

---

## Pages (Templates 1–5)

Each Bootstrap template includes:

- `index.html` — Homepage
- `category.html` — Shop / Category listing
- `product.html` — Product detail
- `cart.html` — Shopping cart
- `wishlist.html` — Wishlist
- `login.html` — Login / Register
- `blog.html` — Blog listing
- `about.html` — About page
- `contact.html` — Contact page

Templates 6–8 are single-page showcases.

---

## Structure

```
index.html                        ← Showcase landing page
portotheme.com_1/                 ← Template 1
portotheme.com_2/                 ← Template 2
portotheme.com_3/                 ← Template 3 (newsletter popup enabled)
portotheme.com_4/                 ← Template 4 (newsletter popup enabled)
portotheme.com_5/                 ← Template 5
template6/                        ← Template 6 — Noir
template7/                        ← Template 7 — Studio
template8/                        ← Template 8 — Warm
.github/workflows/deploy.yml      ← GitHub Pages auto-deploy
```

---

## Local Preview

```bash
python -m http.server 8000
# open http://localhost:8000
```

Or just open `index.html` directly in your browser.

---

## Deploy (GitHub Pages)

This repo deploys automatically via GitHub Actions on every push to `main`.

To enable:
1. Go to repo **Settings → Pages**
2. Set source to **GitHub Actions**
3. Push to `main` — the workflow handles the rest

---

## Tech

- Bootstrap 4 (templates 1–5)
- Vanilla HTML/CSS (templates 6–8)
- Line Awesome icons
- Custom jvcByte icon font
- GitHub Actions for CI/CD
