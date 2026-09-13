import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

test('Visionary Summit is a featured project and the small Project Directory stays commented out', () => {
  const html = read('site/projects/index.html');

  const featuredStart = html.indexOf('<div class="featured-projects">');
  const visionary = html.indexOf('id="visionary-summit"');
  const featuredEnd = html.indexOf('<!-- Project Directory hidden until there are more secondary projects -->');

  assert.ok(featuredStart >= 0, 'featured projects container must exist');
  assert.ok(visionary > featuredStart, 'Visionary Summit must be inside the featured projects flow');
  assert.ok(featuredEnd > visionary, 'Visionary Summit must appear before the hidden directory');
  assert.match(html, /href="\/projects\/visionary-summit\/">Read more<\/a>/);
  assert.match(html, /\/experiences\/visionary-summit\/panel-discussion\.jpg/);
  assert.match(
    html,
    /<!-- Project Directory hidden until there are more secondary projects -->[\s\S]*<section class="directory">[\s\S]*<\/section>[\s\S]*<!-- \/Project Directory -->/
  );
});

test('Visionary Summit has its own completed-project preview page instead of an archive route', () => {
  const projectPath = path.join(root, 'site/projects/visionary-summit/index.html');
  assert.equal(fs.existsSync(projectPath), true, 'Visionary Summit project page must exist');

  const html = fs.readFileSync(projectPath, 'utf8');
  assert.match(html, /Visionary Summit/);
  assert.match(html, /Founder/);
  assert.match(html, /Nov 2023/);
  assert.match(html, /May 2025/);
  assert.match(html, /Completed project/i);
  assert.match(html, /\/experiences\/visionary-summit\/panel-discussion\.jpg/);
  assert.doesNotMatch(html, />Archive</i);
});

test('portfolio metadata classifies Visionary Summit as a completed project', () => {
  const portfolio = read('src/content/portfolio.ts');
  const experienceMatch = portfolio.match(/id: "visionary-summit"[\s\S]*?kind: "([^"]+)"/);
  assert.ok(experienceMatch, 'Visionary Summit experience metadata must exist');
  assert.equal(experienceMatch[1], 'project');

  const workMatch = portfolio.match(/slug: "visionary-summit"[\s\S]*?status: "([^"]+)"/);
  assert.ok(workMatch, 'Visionary Summit project metadata must exist');
  assert.equal(workMatch[1], 'completed');

  const schema = read('src/content/schema.ts');
  assert.match(schema, /status: "live" \| "in-progress" \| "research" \| "completed" \| "archived"/);
});

test('static build no longer generates Visionary Summit under the legacy work route', () => {
  const script = read('scripts/build-static.mjs');
  assert.doesNotMatch(script, /\['visionary-summit','Visionary Summit'/);
});
