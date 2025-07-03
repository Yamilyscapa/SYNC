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
    ],
    // Optimize images for better loading performance
    formats: ['webp', 'avif'],
    quality: 85
  },
  // Additional performance optimizations
  vite: {
    ssr: {
      // Prevent hydration mismatches
      noExternal: ['svelte']
    },
    build: {
      // Enable critical CSS inlining
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Better caching strategy
          manualChunks: {
            vendor: ['svelte']
          }
        }
      }
    }
  }
});