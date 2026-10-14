import { defineConfig } from 'astro/config';
import releaseIntegration from './scripts/release/integration.mjs';
export default defineConfig({ integrations: [releaseIntegration()], site: process.env.SITE_URL || 'https://thailivenow.com' });
