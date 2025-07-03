import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [svelte()],
  image: {
    // Enable remote image optimization for specific domains
    remotePatterns: [
      {
        protocol: 'https'
      }
    ]
  }
});