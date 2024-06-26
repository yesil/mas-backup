import { build } from 'esbuild';
// import { nodeExternalsPlugin } from "esbuild-node-externals";

build({
    entryPoints: ['src/Properties.jsx'],
    format: 'esm',
    bundle: true,
    outfile: 'dist/aue-properties.js',
    sourcemap: true,
    loader: {
        '.js': 'jsx',
    },
    define: {
        'process.env.NODE_ENV': '"production"',
    },
}).catch(() => process.exit(1));
