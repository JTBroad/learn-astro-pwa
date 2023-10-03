import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
    integrations: [
      AstroPWA({
        /* your pwa options */
        devOptions: {
            enabled: false
        },
        includeAssets: ['favicon.svg'],
        manifest: {
            name: 'My Awesome App',
            short_name: 'MyApp',
            description: 'My Awesome App description',
            theme_color: '#ffffff',
            icons: [
              {
                src: 'favicon.svg',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: 'favicon.svg',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          }
      })
    ]
  })
