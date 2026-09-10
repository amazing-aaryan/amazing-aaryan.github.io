import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
const site = path.join(root, 'site');
const publicDir = path.join(root, 'public');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function copyTree(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, { recursive: true, force: true });
}

// The existing public directory remains the source of truth for verified media.
// Flatten it into the static site's web root so /profile, /projects, /research,
// and /documents URLs remain stable.
copyTree(publicDir, out);
copyTree(site, out);

fs.writeFileSync(path.join(out, '.nojekyll'), '\n');
console.log(`Built static portfolio to ${out}`);
