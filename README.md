# zqh0421.github.io

Personal site of Chloe Qianhui Zhao, built with [Astro](https://docs.astro.build) and Tailwind CSS.

## Run it locally

Requires Node.js 22.12 or newer.

```sh
npm install      # once, or after package.json changes
npm run dev      # preview at http://localhost:4321 — updates as you edit
npm run build    # production build into dist/ (what gets deployed)
```

## Where things live

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Bio, headline, links, CV link, Path so far   | `src/content/profile.ts`               |
| Research themes (tags + filters)             | `src/content/themes.ts`                |
| Publications and news                        | `src/lib/local-data.ts` (moving to Sanity) |
| Colors and fonts                             | `src/styles/global.css` (`@theme` block) |
| Homepage / Publications page layout          | `src/pages/index.astro`, `src/pages/publications.astro` |
| Header, footer, one publication, news list   | `src/components/`                      |
| Profile photo                                | `src/assets/qianhui.jpg` (resized automatically at build) |

On the homepage, only publications with `featured: true` are shown; the Publications page shows all of them.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.
It currently runs only when started by hand from the Actions tab.
