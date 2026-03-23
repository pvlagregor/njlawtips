# Website Subproject

Next.js 16 application with Sanity CMS, Tailwind v4, and Resend email.

## Tech Stack

- **Framework:** Next.js 16 (App Router) / React 19 / TypeScript
- **CMS:** Sanity v5 (headless CMS + embedded Studio at `/studio`)
- **Styling:** Tailwind CSS v4 — colors and fonts defined in `@theme {}` inside `src/app/globals.css`, NOT in `tailwind.config.ts`
- **Email:** Resend (contact form delivery via `/api/contact`)
- **Spam protection:** Cloudflare Turnstile + honeypot field on contact form
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel (auto-deploys on push to main)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, ValueProp, ServiceCards, LatestPosts, SocialProof |
| `/about` | About page — mission, story, differentiators |
| `/blog` | Blog index — post cards grid |
| `/blog/[slug]` | Blog post — article with CTA |
| `/contact` | Contact form with Turnstile CAPTCHA |
| `/privacy-policy` | Privacy policy |
| `/studio` | Embedded Sanity Studio |

## Code Structure

```
src/
├── app/              Pages (App Router)
├── components/
│   ├── layout/       Header, Footer, MobileMenu
│   ├── home/         Hero, ValueProp, ServiceCards, LatestPosts, SocialProof
│   ├── blog/         PostCard, PostBody
│   └── ui/           Button
├── sanity/
│   ├── client.ts     Sanity client config
│   ├── queries.ts    GROQ queries
│   ├── image.ts      Image URL helper (urlFor)
│   └── schema/       Document schemas (blogPost, siteSettings)
└── types/            TypeScript interfaces
```

## Conventions

- All pages use the App Router pattern in `src/app/`
- Components organized by domain: `layout/`, `home/`, `blog/`, `ui/`
- Static images go in `public/images/` organized by section (`about/`, `home/`, `blog/`)
- Use Next.js `<Image>` component for all images
- Tailwind v4: theme values live in `globals.css @theme {}`, not a config file

## Environment Variables (`.env.local` — never commit)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (`production`) |
| `SANITY_API_TOKEN` | Sanity read token |
| `RESEND_API_KEY` | Resend email API key |
| `CONTACT_EMAIL` | Email for contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Live domain (for sitemap/OG tags) |

## Development

```bash
cd website
npm run dev
```

- Local site: http://localhost:3000
- Local Studio: http://localhost:3000/studio
- Use **cmd terminal**, not PowerShell (avoids execution policy errors)
- Push to `main` triggers auto-deploy on Vercel

## Reference Docs

- `QUICK-REFERENCE.md` — Daily workflow cheat sheet
- `IMAGES-GUIDE.md` — Image management (Sanity vs. static)
- `docs/build-brief.md` — Original build specification
- `docs/update-process.md` — How to push changes live

## Related Subprojects

- Brand guide: `../shared/brand/brand-guide.html`
- Blog content plan: `../blog/content-plan.md`
- Generated images: `../marketing/images/generated/`
