import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const target = 'public/research/nuclear-proliferation/nuclear-proliferation.pdf';
const url = 'https://cdn.prod.website-files.com/6657747affa93b41147cd15b/6a9223c28e9103b92ebd163d_FINALW26-compressed.pdf';
const destination = path.join(root, target);

if (fs.existsSync(destination) && fs.statSync(destination).size > 1024) {
  console.log(`Using existing ${target}`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(destination), { recursive: true });
console.log(`Fetching ${target}`);
const response = await fetch(url, {
  headers: {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36',
    accept: 'application/pdf,application/octet-stream;q=0.9,*/*;q=0.8',
  },
  redirect: 'follow',
});
if (!response.ok) {
  throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
}

const bytes = Buffer.from(await response.arrayBuffer());
if (bytes.length < 1024 || bytes.subarray(0, 5).toString() !== '%PDF-') {
  throw new Error(`Downloaded asset is not a valid PDF: ${url}`);
}
fs.writeFileSync(destination, bytes);
