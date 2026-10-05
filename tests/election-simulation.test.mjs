import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const assets = 'public/projects/election-strategy-simulation';
const detail = 'site/projects/election-strategy-simulation/index.html';

test('all election showcase files match the source provenance manifest', () => {
  const manifest = JSON.parse(read(`${assets}/manifest.json`));
  assert.equal(manifest.repository_visibility, 'private');
  assert.equal(manifest.assets.length, 14);
  for (const asset of manifest.assets) {
    const bytes = fs.readFileSync(path.join(root, assets, asset.path));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), asset.sha256, asset.path);
    assert.equal(bytes.length, asset.bytes, asset.path);
    if (asset.format === 'GIF') {
      assert.equal(asset.frames, 41);
      // Netscape's application extension stores zero repetitions for infinite looping.
      const loop = bytes.indexOf(Buffer.from('NETSCAPE2.0'));
      assert.ok(loop > 0, `${asset.path} must contain a loop extension`);
      assert.equal(bytes[loop + 11], 3);
      assert.equal(bytes[loop + 12], 1);
      assert.equal(bytes.readUInt16LE(loop + 13), 0, `${asset.path} must loop indefinitely`);
    }
  }
});

test('election project links and all four responsive animation/still pairs are reachable', () => {
  const projects = read('site/projects/index.html');
  const html = read(detail);
  assert.match(projects, /id="election-strategy-simulation"/);
  assert.match(projects, /href="\/projects\/election-strategy-simulation\/">Read more/);
  assert.match(read('site/sitemap.xml'), /https:\/\/amazing-aaryan.github.io\/projects\/election-strategy-simulation\//);
  const figures = [...html.matchAll(/<figure[^>]*data-simulation-figure[\s\S]*?<\/figure>/g)];
  assert.equal(figures.length, 4);
  for (const [index, stem] of ['michigan_baseline_abstained_voters', 'michigan_baseline_vote_margin', 'michigan_siloed_abstained_voters', 'michigan_siloed_vote_margin'].entries()) {
    const figure = figures[index][0];
    assert.ok(figure.includes(`media="(prefers-reduced-motion: no-preference)" srcset="/projects/election-strategy-simulation/${stem}.gif"`));
    assert.ok(figure.includes(`src="/projects/election-strategy-simulation/${stem}_week_8.png"`));
    assert.match(figure, /loading="lazy" decoding="async"/);
    assert.match(figure, /alt="[^"]+"/);
  }
  for (const [, url] of html.matchAll(/(?:src|srcset|href)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)) {
    const local = url.endsWith('/') ? `${url}index.html` : url;
    assert.ok(fs.existsSync(path.join(root, 'site', local)) || fs.existsSync(path.join(root, 'public', local)), `missing ${url}`);
  }
});

test('election copy preserves sign, axes, private access, and separate original-chart provenance', () => {
  const html = read(detail);
  assert.match(html, /Horizontal axis: Democratic GOTV budget share/);
  assert.match(html, /Vertical axis: Republican GOTV budget share/);
  assert.match(html, /Vote margin is Republican minus Democratic/);
  assert.match(html, /not validated election forecasts/);
  assert.match(html, /Source on GitHub · private access/);
  assert.match(html, /Graph neural election forecasting is a future research roadmap/);
  assert.match(html, /Original static charts · earlier run/);
  assert.match(html, /not their Week 8 fallbacks/);
  assert.doesNotMatch(html, /raw\.githubusercontent\.com|github\.com\/[^" ]+\/raw\//);
});

function motionHarness(reduced) {
  const source = { media: '(prefers-reduced-motion: no-preference)', getAttribute: () => '/chart.gif' };
  const button = { hidden: true, attributes: {}, setAttribute(key, value) { this.attributes[key] = value; }, addEventListener(type, fn) { this[type] = fn; } };
  const original = {};
  const image = { getAttribute: () => '/week_8.png' };
  const figure = { dataset: {}, querySelector: (selector) => ({ source, img: image, '[data-static-toggle]': button, '[data-simulation-original]': original })[selector] };
  const motion = { matches: reduced, addEventListener(type, fn) { this[type] = fn; } };
  vm.runInNewContext(read('site/assets/election-simulation.js'), {
    window: { matchMedia: () => motion }, document: { querySelectorAll: () => [figure] },
  });
  return { source, button, original, figure, motion };
}

test('animation can switch to its matching still and resume with an accurate full-size link', () => {
  const { source, button, original, figure } = motionHarness(false);
  assert.equal(button.hidden, false);
  assert.equal(source.media, 'all');
  assert.equal(original.href, '/chart.gif');
  button.click();
  assert.equal(source.media, 'not all');
  assert.equal(figure.dataset.staticView, 'true');
  assert.equal(button.attributes['aria-pressed'], 'true');
  assert.equal(original.href, '/week_8.png');
  button.click();
  assert.equal(source.media, 'all');
  assert.equal(button.attributes['aria-pressed'], 'false');
  assert.equal(original.href, '/chart.gif');
});

test('reduced-motion preference selects stills initially and when changed while viewing', () => {
  const { source, button, original, motion } = motionHarness(true);
  assert.equal(source.media, 'not all');
  assert.equal(original.href, '/week_8.png');
  assert.equal(button.attributes['aria-pressed'], 'true');
  motion.change({ matches: false });
  assert.equal(source.media, 'all');
  motion.change({ matches: true });
  assert.equal(source.media, 'not all');
  assert.equal(original.href, '/week_8.png');
});
