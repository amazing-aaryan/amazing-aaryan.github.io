import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

const diagrams = [
  {
    name: 'ADN',
    sources: ['/projects/adn/web-search.mmd', '/projects/adn/structured-metadata.mmd', '/projects/adn/adn-loop.mmd'],
    files: ['public/projects/adn/web-search.mmd', 'public/projects/adn/structured-metadata.mmd', 'public/projects/adn/adn-loop.mmd'],
    pages: ['site/projects/index.html', 'site/projects/adn/index.html', 'site/projects/adn/workflow-diagram/index.html'],
  },
  {
    name: 'AgentShare',
    sources: ['/projects/agentshare/creator.mmd', '/projects/agentshare/transport.mmd', '/projects/agentshare/recipient.mmd'],
    files: ['public/projects/agentshare/creator.mmd', 'public/projects/agentshare/transport.mmd', 'public/projects/agentshare/recipient.mmd'],
    pages: ['site/projects/index.html', 'site/projects/agentshare/index.html', 'site/projects/agentshare/architecture-diagram/index.html'],
  },
];

test('ADN and AgentShare ship editable Mermaid segment source files', () => {
  for (const diagram of diagrams) {
    for (const file of diagram.files) {
      assert.equal(exists(file), true, `${file} must exist`);
      const source = read(file);
      assert.match(source, /flowchart\s+(LR|TB)/i, `${file} must be a Mermaid flowchart`);
      assert.match(source, /classDef|style/i, `${file} should define its visual treatment`);
    }
  }
});

test('portfolio previews and project pages render segmented Mermaid instead of raster as the primary diagram', () => {
  for (const diagram of diagrams) {
    for (const page of diagram.pages) {
      const html = read(page);
      assert.match(html, /class="[^"]*\bmermaid-segment-stack\b[^"]*"/);
      for (const source of diagram.sources) {
        assert.match(html, new RegExp(`data-mermaid-source="${source.replaceAll('/', '\\/')}"`), `${page} must load ${source}`);
      }
      assert.match(html, /\/assets\/mermaid-render\.js/);
    }
  }
});

test('Mermaid renderer is pinned, renders SVG, and preserves one raster fallback for each stack', () => {
  assert.equal(exists('site/assets/mermaid-render.js'), true, 'Mermaid renderer must exist');
  const js = read('site/assets/mermaid-render.js');
  assert.match(js, /mermaid@11\.4\.1/);
  assert.match(js, /mermaid\.render/);
  assert.match(js, /fetch\(/);
  assert.match(js, /catch|try\s*\{/);
  assert.match(js, /mermaid-stack-fallback/);
});

test('Mermaid preview surfaces remain 16:9 and SVG segments scale without rasterization', () => {
  const css = read('site/assets/project-previews.css');
  assert.match(css, /\.mermaid-preview\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*9/is);
  assert.match(css, /\.mermaid-segment\s+svg\s*\{[^}]*width:\s*100%[^}]*height:\s*100%/is);
});
