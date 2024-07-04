import { build } from 'esbuild';
import fs from 'node:fs';

import { execSync } from 'node:child_process';

// Get the current commit hash
const commitHash = execSync('git rev-parse HEAD').toString().trim();
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

console.log(`you're building from branch ${branch} with commit ${commitHash}`);

const { metafile } = await build({
    alias: {
        react: '../mocks/react.js',
    },
    banner: {
        js: `// branch: ${branch} commit: ${commitHash} ${new Date().toUTCString()}`,
    },
    bundle: true,
    entryPoints: ['./src/mas.js'],
    format: 'esm',
    metafile: true,
    minify: true,
    outfile: '../mas.js',
    platform: 'browser',
    target: ['es2020'],
});

fs.writeFileSync('stats.json', JSON.stringify(metafile));
