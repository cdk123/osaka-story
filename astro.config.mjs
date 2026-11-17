import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://osaka-story.sonagicreative.workers.dev',
  build: {
    inlineStylesheets: 'always'
  }
});
