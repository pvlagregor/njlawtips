# Website Update Process

---

## Step 1 — Make Changes with Claude Code

Describe what you want changed. Claude Code reads and edits the files directly.

Examples:
- "Change the hero headline to ___"
- "Add a new blog category for slip and fall"
- "Update the phone number in the footer"

---

## Step 2 — (Optional) Preview Locally

```
cd website
npm run dev
```

Open http://localhost:3000 to see changes before pushing live.

Stop the server when done: `Ctrl + C`

---

## Step 3 — Push Changes Live

From the `website` folder:

```
git add .
git commit -m "Description of what changed"
git push
```

Vercel auto-deploys on every push to `main`. Your live site at njlawtips.com updates within about a minute.

---

## Quick Version (When You're Confident)

1. Tell Claude Code what to change
2. Run from `website` folder:
```
git add . && git commit -m "Description" && git push
```
3. Done — live in ~1 minute

---

## Notes

- **Blog content** (new posts, editing posts) does NOT require this process — use Sanity Studio instead (https://nj-law-tips.sanity.studio/ or njlawtips.com/studio)
- **Code changes** (layout, styling, new pages, components) DO require this process
- You do NOT need to touch Vercel's dashboard for routine updates — the auto-deploy handles it
- If a deploy fails, check the Vercel dashboard (Deployments tab) for error logs
