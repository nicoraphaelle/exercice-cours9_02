import { defineConfig } from 'vite';
 
export default defineConfig({
    base: "/exercice-cours9-02/",   //nom de mon repo
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html'
            },
        },
    },
});
