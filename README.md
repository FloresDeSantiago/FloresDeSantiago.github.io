# afds.me

My personal site and portfolio, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It's live at [afds.me](https://afds.me).

## Development

Requires Node.js 22 or newer.

```sh
npm install      # install dependencies
npm run dev      # start the dev server at localhost:4321
npm run build    # build the site into dist/
npm run preview  # preview the built site locally
```

## Structure

```
src/
├── content/        # project and blog Markdown files
├── content.config.ts  # frontmatter schemas
├── components/     # Nav, Prose (Markdown typography), EntryNav (prev/next links)
├── layouts/        # Base, List, Project and Blog layouts
├── lib/content.ts  # sorting and date helpers
├── pages/          # routes
└── styles/         # global CSS and Tailwind theme
public/             # served as-is: images, Resume.pdf, favicon, CNAME
```

## Deployment

The site is hosted on GitHub Pages. The custom domain is set by `public/CNAME`, which must stay in place.

## Adding Content

Projects and blog posts are Markdown files. The filename becomes the URL, so `home-lab.md` is served at `/projects/home-lab/`.

### Projects

Create a file in `src/content/projects/`:

```markdown
---
title: Project Name        # required
year: 2026                 # required
order: 1                   # optional: breaks ties within a year, lower comes first
tags: [Hardware, Python]   # optional
summary: One-line summary. # optional: shown under the title
---

Write-up goes here.
```

Projects are sorted newest year first, then by `order`, then alphabetically.

### Blog Posts

Create a file in `src/content/blog/`:

```markdown
---
title: Post Title    # required
date: 2026-09-24     # required
tags: []             # optional
summary: ...         # optional
draft: true          # optional: hides the post until set to false
---
```

### Images

Put images in `public/projects/<slug>/` and reference them from the root:

```markdown
![Alt text describing the image](/projects/<slug>/image.png)
```

Images on consecutive lines, with no blank line between them, are displayed side by side as a row.
