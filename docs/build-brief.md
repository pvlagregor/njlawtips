# Website Build Brief — Claude Code Template

## Project Overview

Build a modern, fast, professional website using the tech stack defined below. This is a Phase 1 foundational build — the site should be structured so that additional features (email marketing integrations, payment processing, advanced pages, etc.) can be added easily in future phases.

## Brand & Design Reference

**All brand styling — colors, fonts, typography, logo usage, and visual identity — is defined in the file `brand-guide.html`.** Open and follow this file for all design decisions. Do not invent colors, fonts, or styling — use exactly what the brand guide specifies.

*If no brand guide is provided, use a clean, modern design with a neutral color palette and professional typography. Ask for brand preferences before proceeding.*

## Tech Stack

- **Framework:** Next.js (App Router)
- **CMS:** Sanity (for content management via visual dashboard)
- **Hosting:** Vercel
- **Styling:** Tailwind CSS (configured to match brand guide colors and fonts)
- **Language:** TypeScript
- **Contact email delivery:** Resend (`npm install resend`) — handles contact form submissions; free tier; only requires an API key
- **Sanity rendering deps:** `@portabletext/react` (renders Sanity rich text in blog posts), `@sanity/image-url` (generates optimized image URLs from Sanity)

> **Tailwind v4 note:** If using Tailwind v4, the config approach is completely different from v3. Colors and fonts go in `@theme {}` inside `globals.css` — NOT in `tailwind.config.ts`. The config file is nearly unused in v4. Check the installed version before configuring.

## Pages to Build

### 1. Homepage
- Hero section with headline, subheadline, and a primary call-to-action button
- Value proposition section explaining what this business/brand does and who it serves
- Key offerings or services section (3-4 items with icons or images)
- Latest blog posts section (pulls 3 most recent posts from Sanity)
- Social proof area (testimonials, logos, or stats — use placeholders)
- Footer with navigation links and social media links

### 2. About Page
- Business/founder story and background
- Mission and what makes the approach different
- Professional photo placement (provide placeholder image area)
- Optional team section if applicable

### 3. Blog
- Blog index page showing all posts with title, date, excerpt, and featured image
- Individual blog post pages with clean, readable typography
- All blog content managed through Sanity Studio (visual dashboard)
- Categories/tags support for organizing posts by topic
- Responsive reading experience

### 4. Contact Page
- Simple contact form (name, email, message)
- Implement with **Resend** from day one — it's free, production-ready, and takes minutes to set up
- Form submits to a Next.js API route (`/api/contact`) which calls Resend and delivers to a configured email address
- Required env vars: `RESEND_API_KEY` (get from resend.com → free account → API Keys) and `CONTACT_EMAIL`
- Initial sends come from `onboarding@resend.dev`; a custom sending domain can be verified later in Resend for branded "from" email
- In a future phase this form can be replaced or extended with CRM/email marketing integrations

## Environment Variables (`.env.local`)

**Never commit this file to git.** Add it to `.gitignore` immediately.

```
NEXT_PUBLIC_SANITY_PROJECT_ID=   # written automatically by npx sanity init
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=                # read token — get from sanity.io/manage → your project → API → Tokens
RESEND_API_KEY=                  # from resend.com → API Keys
CONTACT_EMAIL=                   # email address to receive contact form submissions
NEXT_PUBLIC_SITE_URL=            # add before Vercel deploy (your live domain, e.g. https://example.com)
```

---

## Sanity CMS Setup

### CLI Setup (required before deploying hosted studio)

Two config files are required at the Next.js project root:

- **`sanity.cli.ts`** — CLI settings (projectId, dataset). After first studio deploy, add `deployment.appId` to avoid being prompted for a hostname on subsequent deploys.
- **`sanity.config.ts`** — Studio settings (schema, plugins). Must use **hardcoded values** — not `process.env` — because the Sanity CLI cannot read env vars at deploy time.

Run `npx sanity login` before `npx sanity deploy` (one-time authentication step).

Deploy the hosted studio early in the project: `npx sanity deploy` creates a `*.sanity.studio` URL accessible from any computer without a local dev server running. Test content creation there before setting up Vercel.

Also embed the studio in the Next.js app at the `/studio` route for local development convenience (`'use client'` + `NextStudio` component from `next-sanity`).

### Content Schemas

Set up Sanity Studio with the following content schemas:

### Blog Post Schema
- Title (string)
- Slug (auto-generated from title)
- Featured image
- Publish date
- Author (string, with a default value)
- Excerpt / summary (for blog index and SEO)
- Categories / tags (array of strings)
- Body content (Sanity's rich text / Portable Text — supports headings, bold, italic, links, images, block quotes)

### Site Settings Schema (singleton — only one instance)
- Site title
- Site description
- Social media links
- Contact email

## Navigation

- Header: Logo (left) + nav links (Home, About, Blog, Contact) + primary CTA button
- Footer: Nav links, social media icons, copyright
- Mobile: Hamburger menu with smooth open/close animation

## General Requirements

- **Responsive design** — must look great on desktop, tablet, and mobile
- **Fast performance** — leverage Next.js static generation for blog posts and pages
- **SEO foundations** — proper meta tags, Open Graph tags, semantic HTML, sitemap generation
- **Clean code structure** — organized components, reusable layouts, well-named files
- **Placeholder content** — use realistic placeholder text that reflects the actual subject matter of the business rather than generic lorem ipsum
- **Image placeholders** — use appropriately sized placeholder areas for images with alt text descriptions of what the final images should be
- **Accessibility** — proper heading hierarchy, alt text, keyboard navigation, sufficient color contrast

## Deployment

Recommended order:

1. **Deploy Sanity Studio first:** `npx sanity deploy` → get a `*.sanity.studio` URL. Use it to create test content and verify the CMS works before touching Vercel.
2. **Push code to GitHub.** Make sure `.env.local` is in `.gitignore` — never commit it.
3. **Import to Vercel** at vercel.com/new. If the Next.js app lives in a subfolder (e.g., `website/`), set the **Root Directory** in Vercel to that subfolder — this is required or Vercel won't find the project.
4. **Add all `.env.local` variables** in Vercel project settings → Environment Variables.
5. **Add `NEXT_PUBLIC_SITE_URL`** = your live domain before going live (used for sitemap and Open Graph URLs).
6. Vercel auto-deploys on every push to the main branch after the initial setup.
7. Document how to connect a custom domain when ready.

## Future Phases (Do NOT Build Yet)

Do not build these yet, but structure the codebase so they can be added easily later:

- Email marketing / CRM form integrations and tracking scripts
- Lead magnet and opt-in pages
- Product or service sales pages
- Payment processing (Stripe or similar)
- Member area / gated content
- Advanced landing pages and funnel pages
- Any AI-powered tools or interactive features

## Post-Build Documentation

After building, provide:

**`README.md`** (inside the app folder) covering:
- How to run the project locally
- How to access Sanity Studio (local at `/studio` and hosted at `*.sanity.studio`)
- How to deploy updates (push to GitHub → Vercel auto-deploys)
- Project file structure overview
- How to add new pages in the future
- All environment variables and where to get them

**`reference-guides/` folder** (in the project root) containing:
- `QUICK-REFERENCE.md` — daily workflow cheat sheet: key URLs, dev server commands, deploy commands, troubleshooting table. Aimed at non-developers who just need to know the steps.
- `IMAGES-GUIDE.md` — explains the two image storage types (Sanity CDN for blog images vs. `public/` folder for static site images), with step-by-step instructions for uploading each type and a quick decision guide.
