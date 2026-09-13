import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

const projects = [
  {
    name: 'ADN',
    segments: [
      '/projects/adn/web-search.mmd',
      '/projects/adn/structured-metadata.mmd',
      '/projects/adn/adn-loop.mmd',
    ],
    files: [
      'public/projects/adn/web-search.mmd',
      'public/projects/adn/structured-metadata.mmd',
      'public/projects/adn/adn-loop.mmd',
    ],
    pages: [
      'site/projects/index.html',
      'site/projects/adn/index.html',
      'site/projects/adn/workflow-diagram/index.html',
    ],
  },
  {
    name: 'AgentShare',
    segments: [
      '/projects/agentshare/creator.mmd',
      '/projects/agentshare/transport.mmd',
      '/projects/agentshare/recipient.mmd',
    ],
    files: [
      'public/projects/agentshare/creator.mmd',
      'public/projects/agentshare/transport.mmd',
      'public/projects/agentshare/recipient.mmd',
    ],
    pages: [
      'site/projects/index.html',
      'site/projects/agentshare/index.html',
      'site/projects/agentshare/architecture-diagram/index.html',
    ],
  },
];

test('ADN and AgentShare are split into three independent Mermaid segment sources', () => {
  for (const project of projects) {
    for (const file of project.files) {
      assert.equal(exists(file), true, `${file} must exist`);
      assert.match(read(file), /^flowchart\s+(LR|TB)/m, `${file} must be a Mermaid flowchart`);
    }
  }
});

test('all project diagram surfaces stack three Mermaid segments vertically instead of rendering one combined graph', () => {
  for (const project of projects) {
    for (const page of project.pages) {
      const html = read(page);
      assert.match(html, /class="[^"]*\bmermaid-segment-stack\b[^"]*"/, `${page} needs a vertical segment stack`);
      for (const source of project.segments) {
        assert.match(html, new RegExp(`data-mermaid-source="${source.replaceAll('/', '\\/')}"`), `${page} must load ${source}`);
      }
    }
  }
});

test('segment stacks use CSS grid rows so each Mermaid diagram gets its own full-width band', () => {
  const css = read('site/assets/project-previews.css');
  assert.match(css, /\.mermaid-segment-stack\s*\{[^}]*display:\s*grid[^}]*grid-template-columns:\s*1fr[^}]*grid-template-rows:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/is);
  assert.match(css, /\.mermaid-segment\s*\{[^}]*min-width:\s*0/is);
  assert.match(css, /\.mermaid-segment\s+svg\s*\{[^}]*width:\s*100%[^}]*height:\s*100%/is);
});

test('segment stacks keep one raster fallback and reveal SVG segments only when every segment renders', () => {
  const js = read('site/assets/mermaid-render.js');
  assert.match(js, /mermaid-segment-stack/);
  assert.match(js, /mermaid-stack-fallback/);
  assert.match(js, /every\(/);
});
