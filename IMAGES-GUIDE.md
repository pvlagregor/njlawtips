# NJ Law Tips — Image Management Guide

---

## Two types of images, two different workflows

| Image type | Examples | Where it lives | Who manages it |
|---|---|---|---|
| Blog post images | Featured photos for articles | Sanity cloud (cdn.sanity.io) | Anyone with Sanity login |
| Static site images | Logo, about page photo, backgrounds | `website/public/` folder | Developer |

---

## Part 1 — Blog Post Images (Sanity Studio)

These images are uploaded directly in the CMS. No code changes needed.

### How to add a featured image to a blog post

1. Go to `https://nj-law-tips.sanity.studio/` or `http://localhost:3000/studio` (if dev server is running)
2. Open or create a blog post
3. Click the **Featured Image** field
4. Click **Upload** and select your image file
5. Fill in the **Alt text** field (describes the image for accessibility/SEO — e.g. "Car accident on New Jersey highway")
6. Click **Publish**

The image is stored on Sanity's servers and served via their CDN automatically. You do not need to store it anywhere locally.

### Image recommendations for blog posts
- **Format:** JPG or WebP preferred; PNG works too
- **Size:** 1200×630px is ideal (good for blog display and social sharing)
- **File size:** Keep under 1–2MB for the upload — Sanity's CDN automatically resizes and optimizes images on delivery (the site requests specific dimensions like 700×400, so visitors never download the full original)
- **Naming:** Descriptive names are fine (Sanity renames internally)

---

## Part 2 — Static Site Images (public/ folder)

These are images that are part of the website design itself — not content that changes post to post.

### Folder structure

```
website/
└── public/
    ├── images/
    │   ├── about/          ← headshot, office photos
    │   ├── home/           ← hero backgrounds, section images
    │   └── blog/           ← any static blog graphics (not Sanity-uploaded)
    ├── icons/              ← logo, favicons, custom icons
    └── favicon.ico         ← site favicon (auto-detected by Next.js)
```

### How to add a static image

1. Copy the image file into the appropriate subfolder under `website/public/`
   - Example: drop `headshot.jpg` into `public/images/about/`
2. Tell Claude Code the filename and where you want it to appear
   - Example: *"I added `headshot.jpg` to `public/images/about/` — add it to the About page"*
3. Claude Code will write the code to display it

### How images are referenced in code

Images in `public/` are referenced by their path starting after `public/`:

```
public/images/about/headshot.jpg  →  src="/images/about/headshot.jpg"
public/icons/logo.svg             →  src="/icons/logo.svg"
public/favicon.ico                →  auto-used as site favicon
```

### File size for static images

You do **not** need to manually compress or resize static images. This site uses Next.js's `<Image>` component, which automatically resizes, converts to WebP, and caches images at serve time. Just keep uploads at a reasonable size (under 1–2MB) and Next.js handles the rest.

### Favicon

Drop a `favicon.ico` file directly into `website/public/`. Next.js picks it up automatically — no code change needed.

---

## Image naming best practices

- Use lowercase letters only
- Use hyphens instead of spaces: `car-accident-attorney.jpg` not `Car Accident Attorney.jpg`
- Be descriptive: `nj-highway-accident.jpg` not `img001.jpg`
- Avoid special characters: no `&`, `#`, `%`, parentheses

---

## Quick decision guide

**Adding a photo to a blog article?**
→ Upload in Sanity Studio. Done.

**Adding the site logo?**
→ Drop file in `public/icons/`, tell Claude Code the filename.

**Adding a photo to the About page?**
→ Drop file in `public/images/about/`, tell Claude Code the filename.

**Replacing the favicon?**
→ Drop `favicon.ico` into `public/`. Done.

**Adding a background image to the homepage?**
→ Drop file in `public/images/home/`, tell Claude Code the filename and which section.
