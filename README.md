# NJ Law Tips — Website

A Next.js website for NJ Law Tips, a New Jersey personal injury legal guidance resource.

**Tech stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Sanity CMS · Resend

---

## Getting Started Locally

### 1. Install dependencies

```bash
cd website
npm install
```

### 2. Set up environment variables

Fill in `.env.local` with your values:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=   # from sanity init or sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=                # optional — needed for private datasets
RESEND_API_KEY=                  # from resend.com (free account)
CONTACT_EMAIL=                   # email to receive contact form submissions
NEXT_PUBLIC_SITE_URL=            # your live domain (for sitemap)
```

### 3. Initialize Sanity (first-time setup)

```bash
npx sanity@latest init --env .env.local
```

This opens your browser to log in to Sanity, creates a new project, and writes your Project ID to `.env.local`.

### 4. Run locally

```bash
npm run dev
```

- Site: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## Creating & Editing Blog Posts

1. Navigate to http://localhost:3000/studio
2. Click **Blog Post** → **Create**
3. Fill in: Title, Slug (auto-generates), Excerpt, Featured Image, Categories, Body
4. Click **Publish**
5. The post appears on the blog index at `/blog` and has its own page at `/blog/[slug]`

---

## Contact Form (Resend)

The contact form POSTs to `/api/contact`, which uses the Resend API to email `CONTACT_EMAIL`.

To activate:
1. Create a free account at resend.com
2. Go to **API Keys** → create a key
3. Paste it into `.env.local` as `RESEND_API_KEY`
4. Set `CONTACT_EMAIL` to the inbox you want to receive submissions

> **Note:** On Resend's free tier, the `from` address must be `onboarding@resend.dev` until you verify a custom domain. Update the `from` field in `src/app/api/contact/route.ts` after adding your domain.

---

## Deploying to Vercel (when ready)

1. Push the `website` folder to a GitHub repository
2. Import the repo at vercel.com/new
3. Set the **Root Directory** to `website`
4. Add all environment variables from `.env.local` to the Vercel project settings
5. Deploy — Vercel auto-deploys on every push to main

**Custom domain:** Vercel project → Domains → add your domain → follow DNS instructions.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (Header + Footer)
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx
│   ├── blog/page.tsx            # Blog index
│   ├── blog/[slug]/page.tsx     # Individual blog post
│   ├── contact/page.tsx         # Contact form (client component)
│   ├── api/contact/route.ts     # Resend email API route
│   ├── studio/[[...tool]]/      # Embedded Sanity Studio
│   ├── sitemap.ts               # Auto-generated XML sitemap
│   └── globals.css              # Tailwind v4 theme + brand colors
├── components/
│   ├── layout/                  # Header, Footer, MobileMenu
│   ├── home/                    # Hero, ValueProp, ServiceCards, LatestPosts, SocialProof
│   ├── blog/                    # PostCard, PostBody
│   └── ui/                      # Button
├── sanity/
│   ├── client.ts                # Sanity client
│   ├── image.ts                 # urlFor() helper
│   ├── queries.ts               # GROQ queries
│   ├── sanity.config.ts         # Studio configuration
│   └── schema/                  # blogPost, siteSettings schemas
└── types/index.ts               # Shared TypeScript types
```

---

## Adding New Pages

1. Create `src/app/your-page/page.tsx`
2. Export a default React component (async for data fetching)
3. Export a `metadata` object for SEO
4. Add the route to nav links in `src/components/layout/Header.tsx` and `Footer.tsx`
5. Add to `src/app/sitemap.ts`
