import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

const projectRoutes = [
  ['irene', '/projects/irene/'],
  ['noscroll', '/projects/noscroll/'],
  ['scheduling', '/projects/scheduling/'],
  ['adn', '/projects/adn/'],
  ['agentshare', '/projects/agentshare/'],
];

test('every featured project exposes a primary Read more link to its project page', () => {
  const html = read('site/projects/index.html');
  for (const [id, href] of projectRoutes) {
    const section = html.match(new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`));
    assert.ok(section, `missing featured project ${id}`);
    assert.match(section[0], new RegExp(`class="link-pill primary-cta" href="${href.replaceAll('/', '\\/')}"[^>]*>[^<]*(?:<[^>]+>[^<]*)*Read more`, 'i'));
  }
});

test('featured project media uses a consistent 16:9 preview frame', () => {
  assert.equal(exists('site/assets/project-previews.css'), true, 'project preview stylesheet must exist');
  const css = read('site/assets/project-previews.css');
  assert.match(css, /\.featured-project\s+\.project-media\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*9[^}]*height:\s*auto/is);
});

test('ADN and AgentShare use the normal alternating featured-project layout with single-image previews', () => {
  const html = read('site/projects/index.html');
  for (const [id, src, asset] of [
    ['adn', '/projects/adn/workflow-diagram-preview.webp', 'public/projects/adn/workflow-diagram-preview.webp'],
    ['agentshare', '/projects/agentshare/architecture-diagram-preview.webp', 'public/projects/agentshare/architecture-diagram-preview.webp'],
  ]) {
    const section = html.match(new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`));
    assert.ok(section, `missing featured project ${id}`);
    assert.doesNotMatch(section[0], /diagram-feature/);
    assert.match(section[0], new RegExp(`src="${src.replaceAll('/', '\\/')}"`));
    assert.doesNotMatch(section[0], /diagram-[1-4]\.webp/);
    assert.equal(exists(asset), true, `${asset} must exist`);
  }
});

test('AgentShare keeps its direct repository action while IRENE no longer links to a generic GitHub profile', () => {
  const html = read('site/projects/index.html');
  const agentShare = html.match(/<section[^>]*id="agentshare"[\s\S]*?<\/section>/)?.[0] ?? '';
  const irene = html.match(/<section[^>]*id="irene"[\s\S]*?<\/section>/)?.[0] ?? '';
  assert.match(agentShare, /https:\/\/github\.com\/amazing-aaryan\/AgentShare/);
  assert.doesNotMatch(irene, /github\.com\/amazing-aaryan(?:"|\/)/);
});

test('each Read more destination is a project-blog preview page', () => {
  for (const [slug] of projectRoutes) {
    const file = `site/projects/${slug}/index.html`;
    assert.equal(exists(file), true, `${file} must exist`);
    const html = read(file);
    assert.match(html, /class="project-article"/);
    assert.match(html, /class="project-story-slot"/);
    assert.match(html, /href="\/projects\/"/);
  }
});
