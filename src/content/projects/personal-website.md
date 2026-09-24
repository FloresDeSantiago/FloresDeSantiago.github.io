---
title: Personal Website
year: 2026
order: 3
tags: [Astro, Tailwind CSS, Web Development]
summary: The portfolio website you are looking at.
---

## Rebuild

The first version of this website was built on a free Bootstrap 5 template. It did its job: it got afds.me online with my experience, education and projects. But it had problems. Every new project meant duplicating an HTML file and editing it by hand, and because the layout was built around a résumé, the projects were easy to miss.

With that in mind, I wanted to rebuild the site as a portfolio that shows the range of projects I work on.

## Stack

I went with Astro and Tailwind CSS. Astro fit because I only needed static HTML pages, and this is a content-heavy site that doesn't need all the bells and whistles of other frameworks. Its content collections let me write each project or blog post as a Markdown file and have Astro pick up the rest. Tailwind let me style everything directly in the markup, without maintaining a separate stylesheet.

Each piece of content is a Markdown file with frontmatter at the top that Astro builds around. Projects are sorted by year, newest to oldest, so the newest work shows up first. I'm setting up GitHub Actions to deploy the site automatically whenever I push.
