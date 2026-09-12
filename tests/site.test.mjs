import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

test('primary four-page information architecture exists', () => {
  for (const file of ['site/index.html', 'site/experiences/index.html', 'site/projects/index.html', 'site/papers/index.html']) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `${file} must exist`);
  }
});

test('all primary pages expose the same four navigation destinations', () => {
  for (const file of ['site/index.html', 'site/experiences/index.html', 'site/projects/index.html', 'site/papers/index.html']) {
    const html = read(file);
    for (const href of ['/', '/experiences/', '/projects/', '/papers/']) {
      assert.ok(html.includes(`href="${href}"`), `${file} missing ${href}`);
    }
  }
});

test('render-only fictional experiences and projects are absent', () => {
  const corpus = ['site/index.html', 'site/experiences/index.html', 'site/projects/index.html', 'site/papers/index.html'].map(read).join('\n');
  for (const forbidden of ['OpenAI', 'World Bank', 'Harvard University', 'Climate Policy Insights', 'Civic Data Explorer']) {
    assert.equal(corpus.includes(forbidden), false, `${forbidden} must not appear`);
  }
});

test('about page keeps the AI agent surface inert', () => {
  const html = read('site/index.html');
  assert.match(html, /Talk to my AI Agent About me/);
  assert.match(html, /Ask me anything/);
  assert.doesNotMatch(html, /api\/chat|fetch\s*\(/i);
});

test('projects page features ADN after the existing three approved projects', () => {
  const html = read('site/projects/index.html');
  const irene = html.indexOf('IRENE AI Logistics Platform');
  const noscroll = html.indexOf('NoScroll');
  const scheduling = html.indexOf('Scheduling Automation System');
  const adn = html.indexOf('Agent Demand Network (ADN)');
  assert.ok(irene >= 0 && noscroll > irene && scheduling > noscroll && adn > scheduling);
});

test('ADN project uses the third-party validation artifact and labels it independently', () => {
  const html = read('site/projects/index.html');
  assert.match(html, /\/projects\/adn\/third-party-validation\.webp/);
  assert.match(html, /Independent industry commentary/i);
  assert.equal(fs.existsSync(path.join(root, 'public/projects/adn/third-party-validation.webp')), true);
});

test('papers page contains core real research titles', () => {
  const html = read('site/papers/index.html');
  for (const title of [
    'GOTV versus Persuasion in U.S. Battleground States',
    'Sacrifice for the State: Identification or Disillusionment?',
    'Autonomous Agent-Driven Analysis of Federal Sentencing Disparities',
    'Why Has International Cooperation on AI Regulation Been Difficult Between the EU and the United States?'
  ]) {
    assert.ok(html.includes(title), `${title} missing`);
  }
});

test('deployment build script stages site and public into dist', () => {
  const script = read('scripts/build-static.mjs');
  assert.match(script, /site/);
  assert.match(script, /public/);
  assert.match(script, /dist/);
});
