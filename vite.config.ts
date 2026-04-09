import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 3000,
		// Allow the homelab hostname so Vite accepts requests for it
		allowedHosts: ['baseline-cabinetry.compewtertutor.com'],
		hmr: {
			protocol: 'wss',
			host: 'baseline-cabinetry.compewtertutor.com',
			// Use clientPort so Vite doesn't attempt to bind to the public IP:443 locally.
			clientPort: 443
		}
	}
});
