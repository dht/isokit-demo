import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

// https://vitejs.dev/config/

export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        outDir: 'dist',
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
        visualizer(),
    ],
    resolve: {
        alias: {
            isokit: `${cwd}/packages/isokit/src`,
        },
    },
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
