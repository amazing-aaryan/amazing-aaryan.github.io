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
    source: '/projects/adn/workflow.mmd',
    file: 'public/projects/adn/workflow.mmd',
    previewFallback: '/projects/adn/workflow-diagram-preview.webp',
    pages: ['site/projects/index.html', 'site/projects/adn/index.html', 'site/projects/adn/workflow-diagram/index.html'],
  },
  {
    name: 'AgentShare',
    source: '/projects/agentshare/architecture.mmd',
    file: 'public/projects/agentshare/architecture.mmd',
    previewFallback: '/projects/agentshare/architecture-diagram-preview.webp',
    pages: ['site/projects/index.html', 'site/projects/agentshare/index.html', 'site/projects/agentshare/architecture-diagram/index.html'],
  },
];

test('ADN and AgentShare ship editable Mermaid source files', () => {
  for (const diagram of diagrams) {
    assert.equal(exists(diagram.file), true, `${diagram.file} must exist`);
    const source = read(diagram.file);
    assert.match(source, /flowchart\s+(LR|TB)/i, `${diagram.name} must be a Mermaid flowchart`);
    assert.match(source, /classDef|style/i, `${diagram.name} should define its visual treatment`);
  }
});

test('portfolio previews and project pages render Mermaid instead of raster as the primary diagram', () => {
  for (const diagram of diagrams) {
    for (const page of diagram.pages) {
      const html = read(page);
      assert.match(html, new RegExp(`data-mermaid-source="${diagram.source.replaceAll('/', '\\/')}"`), `${page} must load ${diagram.source}`);
      assert.match(html, /class="[^"]*\bmermaid-diagram\b[^"]*"/);
      assert.match(html, /\/assets\/mermaid-render\.js/);
    }
  }
});

test('Mermaid renderer is pinned, renders SVG, and preserves raster fallbacks on failure', () => {
  assert.equal(exists('site/assets/mermaid-render.js'), true, 'Mermaid renderer must exist');
  const js = read('site/assets/mermaid-render.js');
  assert.match(js, /mermaid@11\.4\.1/);
  assert.match(js, /mermaid\.render/);
  assert.match(js, /fetch\(/);
  assert.match(js, /catch|try\s*\{/);
  assert.match(js, /mermaid-fallback/);
});

test('Mermaid preview surfaces remain 16:9 and SVG scales without rasterization', () => {
  const css = read('site/assets/project-previews.css');
  assert.match(css, /\.mermaid-preview\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*9/is);
  assert.match(css, /\.mermaid-diagram\s+svg\s*\{[^}]*width:\s*100%[^}]*height:\s*100%/is);
  assert.match(css, /\.mermaid-full\s+svg\s*\{[^}]*width:\s*100%[^}]*height:\s*auto/is);
});
