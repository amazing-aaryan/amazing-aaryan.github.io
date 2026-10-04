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
  ['wwi-service-dataset', '/projects/wwi-service-dataset/'],
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

test('autoplay project videos have static poster frames for first paint', () => {
  const html = read('site/projects/index.html');
  for (const [file, video, poster] of [
    ['site/projects/index.html', '/projects/irene/demo.mp4', '/projects/irene/demo-poster.jpg'],
    ['site/projects/index.html', '/projects/scheduling-automation/demo.mp4', '/projects/scheduling-automation/demo-poster.jpg'],
    ['site/projects/irene/index.html', '/projects/irene/demo.mp4', '/projects/irene/demo-poster.jpg'],
    ['site/projects/scheduling/index.html', '/projects/scheduling-automation/demo.mp4', '/projects/scheduling-automation/demo-poster.jpg'],
  ]) {
    assert.match(read(file), new RegExp(`src="${video.replaceAll('/', '\\/')}" poster="${poster.replaceAll('/', '\\/')}"`));
  }
  for (const poster of ['public/projects/irene/demo-poster.jpg', 'public/projects/scheduling-automation/demo-poster.jpg']) {
    assert.equal(exists(poster), true, `${poster} must exist`);
  }
});

test('NoScroll screenshots preserve their complete 4:5 compositions', () => {
  const css = read('site/assets/product-carousel.css');
  assert.match(css, /\.screen-slide img\s*\{[^}]*object-fit:\s*contain/is);
  for (const file of ['site/projects/index.html', 'site/projects/noscroll/index.html']) {
    const html = read(file);
    const noscroll = file === 'site/projects/index.html'
      ? html.match(/<section[^>]*id="noscroll"[\s\S]*?<\/section>/)?.[0]
      : html;
    assert.ok(noscroll, 'NoScroll project section must exist');
    assert.match(noscroll, /data-screen-carousel/);
    assert.equal((noscroll.match(/data-screen-slide\s/g) || []).length, 3);
    assert.doesNotMatch(html, /noscroll-collage|noscroll-article-media/);
  }
  for (const asset of ['public/projects/noscroll-app/blocker.png', 'public/projects/noscroll-app/reader.png', 'public/projects/noscroll-app/quote-share.png']) {
    assert.equal(exists(asset), true, `${asset} must exist`);
  }
});

test('ADN and AgentShare use the normal alternating featured-project layout with single-image previews', () => {
  const html = read('site/projects/index.html');
  for (const [id, src, asset] of [
    ['adn', '/projects/adn/workflow-diagram-fallback.svg', 'public/projects/adn/workflow-diagram-fallback.svg'],
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
    assert.match(html, /class="[^"]*\bproject-story-slot\b[^"]*"/);
    assert.match(html, /href="\/projects\/(?:#[^"]*)?"/);
  }
});

test('WWI write-up keeps measured Ohio scope separate from unverified casualty judgments', () => {
  const html = read('site/projects/wwi-service-dataset/index.html');
  assert.match(html, /249,597/);
  assert.match(html, /6,679/);
  assert.match(html, /not a verified count of distinct people who died/);
  assert.match(html, /require human review/);
  assert.doesNotMatch(html, /(?:3M|3 million|3,000,000)/i);
  assert.doesNotMatch(html, /github\.com\/Camikii|advisor_review\.xlsx|Ohio_all_volumes_dead\.csv/);
});
