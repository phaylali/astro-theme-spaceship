
import { defineConfig } from 'astro/config';

import { create } from './spaceship/shell';

import websiteConfig from './website.config.json';

export default defineConfig({
  ...create(websiteConfig),
});