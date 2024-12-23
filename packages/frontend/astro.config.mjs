// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        // port: Number(process.env.FRONTEND_PORT)
        port: 4321,
        host: '0.0.0.0'
    }
});
