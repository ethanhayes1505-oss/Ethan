# Atelier — Shopify Theme

A clean, minimal Shopify theme (Online Store 2.0). Every image spot ships with a
placeholder — upload your own photos later through the Shopify theme editor, no
code changes needed.

## What's included

- **Homepage** — hero banner, featured collection, shop-by-category grid, story
  section (image + text), newsletter signup
- **Shop** — product page with variant picker and quantity stepper, collection
  pages with sorting and pagination, all-collections page
- **Cart, search, 404, blog, articles, contact page**
- **Customer accounts** — login, register, order history, addresses, password reset
- **Gift card and password (coming soon) pages**

## How to install

1. Download this repository as a ZIP (GitHub → **Code → Download ZIP**), or zip
   the folder contents yourself.
2. In Shopify admin go to **Online Store → Themes → Add theme → Upload ZIP file**.
3. Click **Customize** to open the theme editor.

Alternatively, connect the repo directly: **Add theme → Connect from GitHub**.

## Making it yours (no code needed)

Everything below is done in **Online Store → Themes → Customize**:

- **Photos** — click any image block (hero, story section, category cards) and
  upload your photo. Product photos come from your products themselves
  (**Products → add images**).
- **Logo** — click the header, upload a logo image (or leave blank to show your
  shop name as text).
- **Colors & fonts** — Theme settings (paint-roller icon) → Colors / Typography.
- **Announcement bar** — edit or clear the free-shipping message in the header group.
- **Menus** — set up navigation under **Online Store → Navigation** (the theme
  uses your Main menu by default).
- **Contact page** — create a page in **Online Store → Pages** and assign it the
  `contact` template.

## Structure

Standard Shopify theme layout: `layout/`, `templates/`, `sections/`,
`snippets/`, `assets/`, `config/`, `locales/`. All homepage sections are
reorderable and removable in the editor, and you can add more (rich text,
image with text, featured collection, etc.) from the section picker.
