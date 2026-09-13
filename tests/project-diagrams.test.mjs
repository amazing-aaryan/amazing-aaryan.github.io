import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

test('ADN uses the supplied workflow diagram as its primary expandable visual', () => {
  const html = read('site/projects/index.html');
  assert.match(html, /href="\/projects\/adn\/workflow-diagram\/"/);
  assert.match(html, /Agent Demand Network \(ADN\)/);
  for (let i = 1; i <= 4; i += 1) {
    assert.match(html, new RegExp(`src="/projects/adn/workflow-diagram-${i}\\.webp"`));
    assert.equal(exists(`public/projects/adn/workflow-diagram-${i}.webp`), true);
  }
  assert.equal(exists('site/projects/adn/workflow-diagram/index.html'), true);
});

test('AgentShare is a featured portfolio project with the supplied architecture diagram', () => {
  const html = read('site/projects/index.html');
  assert.match(html, /id="agentshare"/);
  assert.match(html, /AgentShare/);
  assert.match(html, /Aug 2026 [–-] Present/);
  assert.match(html, /href="\/projects\/agentshare\/architecture-diagram\/"/);
  assert.match(html, /https:\/\/github\.com\/amazing-aaryan\/AgentShare/);
  for (let i = 1; i <= 4; i += 1) {
    assert.match(html, new RegExp(`src="/projects/agentshare/architecture-diagram-${i}\\.webp"`));
    assert.equal(exists(`public/projects/agentshare/architecture-diagram-${i}.webp`), true);
  }
  assert.equal(exists('site/projects/agentshare/architecture-diagram/index.html'), true);
});

test('project diagrams use a dedicated large full-width treatment without cropping', () => {
  const html = read('site/projects/index.html');
  const css = read('site/assets/project-diagrams.css');
  assert.match(html, /project-diagram-link/);
  assert.match(html, /project-diagram-stack/);
  assert.match(html, /project-diagram/);
  assert.match(html, /\/assets\/project-diagrams\.css/);
  assert.match(css, /\.project-diagram\s*\{[^}]*width:\s*100%[^}]*height:\s*auto[^}]*object-fit:\s*contain/is);
  assert.match(css, /\.project-diagram-stack\s*\{[^}]*gap:\s*0/is);
  assert.match(css, /\.diagram-feature\s*\{[^}]*grid-template-columns:\s*1fr/is);
});

test('ADN keeps the existing third-party validation as supporting evidence', () => {
  const html = read('site/projects/index.html');
  assert.match(html, /\/projects\/adn\/third-party-validation\.webp/);
  assert.match(html, /Independent industry commentary/);
});
