#!/usr/bin/env node
/**
 * Build script — generates dist/ for GitHub Pages deployment.
 * Zero dependencies, pure Node.js.
 */

const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const OUT = path.join(SRC, 'dist');

// Clean and recreate dist/
if (fs.existsSync(OUT)) {
  fs.rmSync(OUT, { recursive: true, force: true });
}
fs.mkdirSync(OUT, { recursive: true });

// 1. Copy HTML as index.html
const htmlSrc = path.join(SRC, 'tmux-copy-cheatsheet.html');
const htmlDst = path.join(OUT, 'index.html');
fs.copyFileSync(htmlSrc, htmlDst);
console.log(`  → ${htmlDst}`);

// 2. Copy manifest.json, adjusting start_url
const manifestSrc = path.join(SRC, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestSrc, 'utf-8'));
manifest.start_url = './index.html';
const manifestDst = path.join(OUT, 'manifest.json');
fs.writeFileSync(manifestDst, JSON.stringify(manifest, null, 2) + '\n');
console.log(`  → ${manifestDst}`);

// 3. Copy icon assets
const iconFiles = [
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png'
];
for (const f of iconFiles) {
  const src = path.join(SRC, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(OUT, f));
    console.log(`  → ${OUT}/${f}`);
  }
}

// 4. Copy sw.js, adjusting cache URL
const swSrc = path.join(SRC, 'sw.js');
let sw = fs.readFileSync(swSrc, 'utf-8');
sw = sw.replace(
  "'./tmux-copy-cheatsheet.html'",
  "'./index.html'"
);
const swDst = path.join(OUT, 'sw.js');
fs.writeFileSync(swDst, sw);
console.log(`  → ${swDst}`);

console.log('\n✅ Build complete: dist/ is ready for GitHub Pages.');
