# zqh0421.github.io

Personal site of Chloe Qianhui Zhao, built with [Astro](https://docs.astro.build) and Tailwind CSS.

## Run it locally

Uses [nvm](https://github.com/nvm-sh/nvm) for Node (version in `.nvmrc`) and [pnpm](https://pnpm.io).

```sh
nvm use          # switch to the project's Node version
pnpm install     # once, or after package.json changes
pnpm dev         # preview at http://localhost:4321 — updates as you edit
pnpm build       # production build into dist/ (what gets deployed)
```

## Where things live

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Bio, search description, links, CV, Path so far | `src/content/profile.ts`               |
| Research themes (tags + filters)             | `src/content/themes.ts`                |
| Publications and news                        | `src/lib/local-data.ts` (moving to Sanity) |
| Colors and fonts                             | `src/styles/global.css` (`@theme` block) |
| Homepage / Publications page layout          | `src/pages/index.astro`, `src/pages/publications.astro` |
| Header, footer, one publication, news list   | `src/components/`                      |
| Profile photo                                | `src/assets/qianhui.jpg` (resized automatically at build) |

On the homepage, only publications with `featured: true` are shown; the Publications page shows all of them.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

- **Every push to `v3` goes live** in about a minute. Watch progress in the repo's **Actions** tab.
- To redeploy without changing code: Actions → "Deploy site (v3)" → **Run workflow** (shows up once `v3` is the default branch).
- Don't push to `v2` anymore: its old workflow would overwrite the live site with the old version.
- To roll back to the old site: Actions → pick the last successful v2 "Build and Deploy" run → **Re-run all jobs**.
