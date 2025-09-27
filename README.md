# Binyam Fantahun — Designer Portfolio

A modern, responsive portfolio website for Binyam Fantahun, an Ethiopian graphic designer specializing in layout design and brand development. Built with semantic HTML, modern CSS, and a touch of JavaScript for interactivity.

## Features
- Clean, professional aesthetic with teal→blue gradient and subtle circular elements
- Responsive grid portfolio with category filters and lightbox modal
- Hover animations and reveal-on-scroll effects
- Fixed, mobile-friendly header with tagline and style switcher (optional)
- Accessible markup, larger hit targets, focus styles
- SEO meta/keywords for discoverability
- Contact form ready for static hosting (Netlify-compatible)

## Structure
```
designer-portfolio/
├─ index.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  └─ img/favicon.svg
```

## Customize
- Branding: `index.html` logo text `Binyam Fantahun` / initials `BF`, page `<title>`, tagline.
- Hero: Replace the placeholder portrait URL in the Hero `img`.
- Portfolio: Duplicate `.portfolio-item` cards and adjust `data-*` attributes.
- Filters: Tabs are in `.tabs`; categories map to `data-category` on items.
- Lightbox: Uses `data-image`, `data-title`, `data-description`.
- Social/Contact: Update `tel:`, Telegram, and email in the footer.
- Colors & type: `assets/css/styles.css` `:root` and body `type-*` classes; optional theme switcher in header.

## Run locally
Just open `index.html` in your browser. No build tools are required.

## Deploy
- Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages
- For Netlify forms, the contact form is already configured with `data-netlify="true"`

## Wireframes

Desktop (approx.)
```
┌───────────────────────────────────────────────────────────────────────────┐
│ LOGO (BF)  Binyam Fantahun  |  Graphic Designer | Brand Developer   NAV  │
├───────────────────────────────────────────────────────────────────────────┤
│ [Hero: portrait]   Hi, I am Binyam — accomplished ... [CTA View Work]     │
│                    Delivered outstanding projects ... [CTA Contact]       │
├───────────────────────────────────────────────────────────────────────────┤
│ About Binyam: Education | Work Experience | Clients | Tools | Learning    │
│ [Cards/blocks in 2 cols]                                                  │
├───────────────────────────────────────────────────────────────────────────┤
│ Portfolio                                                                 │
│ [Tabs: All | Branding | Event | Layout | Social | AI ]                    │
│ [Grid: 3 columns of cards with hover + click to lightbox]                 │
├───────────────────────────────────────────────────────────────────────────┤
│ Contact: form (name/email/message) + footer links                         │
└───────────────────────────────────────────────────────────────────────────┘
```

Mobile (approx.)
```
┌───────────────────────────┐
│ BF  Binyam …  [☰]         │
├───────────────────────────┤
│ Hero: image                                                   │
│ Hi, I am Binyam … [CTA] [CTA]                                 │
├───────────────────────────┤
│ About: stacked cards                                          │
├───────────────────────────┤
│ Portfolio                                                     │
│ [Tabs horizontal scroll]                                      │
│ [Grid: 1 column]                                              │
├───────────────────────────┤
│ Contact form + footer links                                   │
└───────────────────────────┘
```

## Notes
- Images are using Unsplash placeholders—replace with your own visuals.
- This site includes a theme/type switcher; default palette follows Binyam’s teal/blue brand.
