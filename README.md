# Astro Spaceship

A template for publishing Obsidian Vaults with Astrojs

![](src/content/vault/Assets/Screenshots/001.jpg)

## Features

### Sidebar with Table of Contents, Links and BackLinks

![](src/content/vault/Assets/Screenshots/002.jpg)

### Frontmatter blogging fields

![](src/content/vault/Assets/Screenshots/003.jpg)

### Tailwind based dark & light theme. Make it yours.

![](src/content/vault/Assets/Screenshots/004.jpg)

### Installation

Start a new project with `create astro` or just clone this repo.

```sh
npm create astro@latest -- --template aitorllj93/astro-theme-spaceship
```

Replace the content in `src/content/vault` with your own Obsidian Vault.

That's it.

## Customization

* `website.config.mjs`: Global settings such as the Website name and default author
* `styles/global.css`: Tailwind CSS configuration
* `content.config.ts`: Your collections config, including the Obsidian one. Be careful while applying changes here.
* `content`: Your Obsidian Vault + some metadata collections: Authors and Tags

Feel free to modify any of the provided components and pages and adapt them to your needs


## Roadmap

Features in progress:

- [ ] SEO Optimization
- [ ] Callouts
- [ ] File Graph View
- [ ] Global Graph View
- [ ] Tree View Order
- [ ] Tags from Body (Astro Loader)
- [ ] Tags Pages