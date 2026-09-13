import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

test('full ADN workflow diagram remains available as a segmented Mermaid technical view', () => {
  const full = read('site/projects/adn/workflow-diagram/index.html');
  assert.equal(exists('site/projects/adn/workflow-diagram/index.html'), true);
  for (const source of ['/projects/adn/web-search.mmd', '/projects/adn/structured-metadata.mmd', '/projects/adn/adn-loop.mmd']) {
    assert.match(full, new RegExp(`data-mermaid-source="${source.replaceAll('/', '\\/')}"`));
  }
  assert.match(full, /class="mermaid-full mermaid-segment-stack"/);
  assert.match(full, /\/assets\/mermaid-render\.js/);
});

test('full AgentShare architecture remains available as a segmented Mermaid technical view', () => {
  const full = read('site/projects/agentshare/architecture-diagram/index.html');
  assert.equal(exists('site/projects/agentshare/architecture-diagram/index.html'), true);
  for (const source of ['/projects/agentshare/creator.mmd', '/projects/agentshare/transport.mmd', '/projects/agentshare/recipient.mmd']) {
    assert.match(full, new RegExp(`data-mermaid-source="${source.replaceAll('/', '\\/')}"`));
  }
  assert.match(full, /class="mermaid-full mermaid-segment-stack"/);
  assert.match(full, /\/assets\/mermaid-render\.js/);
});

test('main Projects page uses compact stacked Mermaid previews instead of full-width technical stacks', () => {
  const html = read('site/projects/index.html');
  assert.match(html, /\/projects\/adn\/web-search\.mmd/);
  assert.match(html, /\/projects\/adn\/structured-metadata\.mmd/);
  assert.match(html, /\/projects\/adn\/adn-loop\.mmd/);
  assert.match(html, /\/projects\/agentshare\/creator\.mmd/);
  assert.match(html, /\/projects\/agentshare\/transport\.mmd/);
  assert.match(html, /\/projects\/agentshare\/recipient\.mmd/);
  assert.match(html, /\/projects\/adn\/workflow-diagram-preview\.webp/);
  assert.match(html, /\/projects\/agentshare\/architecture-diagram-preview\.webp/);
  assert.doesNotMatch(html, /diagram-feature/);
  assert.doesNotMatch(html, /project-diagram-stack/);
  assert.doesNotMatch(html, /\/assets\/project-diagrams\.css/);
});

test('ADN detail page keeps third-party validation as supporting evidence', () => {
  const html = read('site/projects/adn/index.html');
  assert.match(html, /\/projects\/adn\/third-party-validation\.webp/);
  assert.match(html, /Independent industry commentary/);
  assert.match(html, /\/projects\/adn\/workflow-diagram\//);
});

test('AgentShare exposes its real GitHub repository on both preview and detail surfaces', () => {
  for (const file of ['site/projects/index.html', 'site/projects/agentshare/index.html']) {
    const html = read(file);
    assert.match(html, /https:\/\/github\.com\/amazing-aaryan\/AgentShare/);
  }
});
