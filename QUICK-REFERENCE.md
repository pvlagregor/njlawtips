# NJ Law Tips — Quick Reference

---

## Key URLs

| What | URL |
|---|---|
| Live site (after deploy) | https://njlawtips.com |
| Sanity Studio (cloud) | https://nj-law-tips.sanity.studio/ |
| Sanity project dashboard | https://sanity.io/manage |
| Local site preview | http://localhost:3000 |
| Local Sanity Studio | http://localhost:3000/studio |

---

## Daily Content Workflow (no dev server needed)

**Write or edit a blog post:**
1. Go to https://nj-law-tips.sanity.studio/
2. Log in with your Sanity account
3. Click **Blog Post** → Create or open existing
4. Fill in fields → scroll down → click **Publish**

**Upload a blog image:**
- Done inside the blog post editor — click the Featured Image field → Upload

---

## Local Development

**Start the dev server:**
```
cd website
npm run dev
```
Site: http://localhost:3000 · Studio: http://localhost:3000/studio

**Stop the dev server:** `Ctrl + C` → Y to confirm

**Use cmd, not PowerShell** (avoids execution policy errors)

---

## Making Code Changes

1. Start dev server (`npm run dev`)
2. Edit files in `website/src/`
3. Changes appear instantly in the browser (hot reload)
4. Stop server when done (`Ctrl + C`)

**Ask Claude Code to make changes** — describe what you want; it reads and edits the files directly

---

## Adding Images to the Site

**Blog post images** → Upload in Sanity Studio (no code needed)

**Static site images** (logo, about photo, etc.):
1. Drop image file into `website/public/images/`
2. Tell Claude Code the filename and where you want it

---

## Redeploying the Sanity Studio

Only needed after schema changes (adding new fields, etc.):
```
cd website
npx sanity deploy
```

---

## Deploying the Website to Vercel (when ready)

1. Push `website/` to a GitHub repo
2. Import at vercel.com/new → set Root Directory to `website`
3. Add all `.env.local` variables in Vercel project settings
4. Deploy — auto-deploys on every push to main

---

## Project Folder Structure

```
NJLawTips/
├── shared/           ← Common resources (brand guide, etc.)
├── website/          ← Next.js app (all code)
│   ├── src/app/            ← Pages
│   ├── src/components/     ← UI components
│   ├── src/sanity/         ← CMS config & queries
│   ├── public/             ← Static images & files
│   ├── .env.local          ← API keys (never share/commit)
│   ├── sanity.config.ts    ← Sanity Studio config
│   └── sanity.cli.ts       ← Sanity CLI config
├── blog/             ← Content planning & publishing guides
├── marketing/        ← AI-generated images & assets
└── README.md         ← Full project documentation
```

---

## Environment Variables (`.env.local`)

| Variable | What it's for |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (production) |
| `SANITY_API_TOKEN` | Sanity read token |
| `RESEND_API_KEY` | Resend email API key |
| `CONTACT_EMAIL` | Email to receive contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Live domain (add before deploying) |

**Keep `.env.local` private — never commit it to GitHub**

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm` not found / script error | Use `cmd` terminal, not PowerShell |
| Studio not loading locally | Make sure dev server is running (`npm run dev`) |
| Blog post not showing on site | Make sure it's **Published** in Sanity (not just saved) |
| Contact form not sending | Check `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env.local` |
| Schema changes not in hosted studio | Run `npx sanity deploy` |
