import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import injectSocketIO from "./src/lib/server/socket_handler";

export default defineConfig({
	plugins: [
    sveltekit(),
    // {
    //   name: 'sveltekit-socket-io',
    //   configureServer(server) {
    //     injectSocketIO(server.httpServer); // <- call the function here
    //   }
    // },
  ]
});
