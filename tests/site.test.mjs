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

test('ADN detail page uses the third-party validation artifact and labels it independently', () => {
  const html = read('site/projects/adn/index.html');
  assert.match(html, /\/projects\/adn\/third-party-validation\.webp/);
  assert.match(html, /Independent industry commentary/i);
  assert.equal(fs.existsSync(path.join(root, 'public/projects/adn/third-party-validation.webp')), true);
});

test('papers page shows published papers only', () => {
  const html = read('site/papers/index.html');
  for (const removed of [
    'GOTV versus Persuasion in U.S. Battleground States',
    'Sacrifice for the State: Identification or Disillusionment?'
  ]) {
    assert.equal(html.includes(removed), false, `${removed} must not appear on Papers`);
  }
  for (const kept of [
    'Nuclear Proliferation',
    'Autonomous Agent-Driven Analysis of Federal Sentencing Disparities',
    'Why Has International Cooperation on AI Regulation Been Difficult Between the EU and the United States?',
    "How Successful Was India's Foreign Policy Under Jawaharlal Nehru During the Cold War?",
    'How Effectively Do LLM-Driven, Micro-Tailored Political Messages Influence Public Opinion?',
    'What Explains Variation in State Compliance with the Laws of Armed Conflict Under Conditions of Low Reciprocity?'
  ]) {
    assert.ok(html.includes(kept), `${kept} missing`);
  }
});

test('published paper cards link directly to their publication destinations', () => {
  const html = read('site/papers/index.html');
  for (const href of [
    'https://ssrn.com/abstract=6545939',
    'https://ssrn.com/abstract=6662638',
    'https://ssrn.com/abstract=6663358',
    'https://ssrn.com/abstract=6662538',
    'https://ssrn.com/abstract=6546018'
  ]) {
    assert.ok(html.includes(`class="paper-card" href="${href}"`), `paper card must directly link to ${href}`);
  }
});

test('published SSRN papers expose real abstract copy', () => {
  const html = read('site/papers/index.html');
  for (const phrase of [
    'What explains persistent disparities in federal sentencing outcomes across race, citizenship status, and socioeconomic position',
    'International cooperation on artificial intelligence regulation between the European Union and the United States faces two fundamental structural barriers',
    "This paper evaluates the success of India's foreign policy under Jawaharlal Nehru during the Cold War",
    'The emergence of large language models as tools for automated political messaging represents a qualitative shift',
    'This paper explains variation in compliance with the Laws of Armed Conflict under asymmetric conditions where reciprocity is weak or absent'
  ]) {
    assert.ok(html.includes(phrase), `missing verified abstract phrase: ${phrase}`);
  }
});

test('broken hosted viewers are replaced by static SSRN first-page previews', () => {
  const html = read('site/papers/index.html');
  assert.doesNotMatch(html, /docs\.google\.com\/gview/i);
  assert.equal((html.match(/<iframe/g) || []).length, 0, 'Papers page must not depend on iframe PDF viewers');

  const previews = [
    '/research/ai-regulation-eu-us/first-page.svg',
    '/research/nehru-foreign-policy/first-page.svg',
    '/research/llm-political-messaging/first-page.svg',
    '/research/loac-low-reciprocity/first-page.svg'
  ];
  for (const preview of previews) {
    assert.ok(html.includes(`src="${preview}"`), `${preview} must be used as a static preview`);
    assert.equal(fs.existsSync(path.join(root, 'public', preview)), true, `${preview} must exist in public`);
  }
});

test('all six published papers retain the large preview surface', () => {
  const html = read('site/papers/index.html');
  assert.equal((html.match(/<(?:object|img) class="paper-pdf/g) || []).length, 6, 'each paper needs a large preview surface');
  assert.match(html, /\/research\/nuclear-proliferation\/nuclear-proliferation\.pdf#page=39/);
  assert.match(html, /\/research\/federal-sentencing-disparities\/ssrn-6545939\.pdf#page=1/);
});

test('paper layout prioritizes large readable PDF previews', () => {
  const css = read('site/assets/papers.css');
  assert.match(css, /\.paper-pdf\{[^}]*min-height:\s*4\d\dpx/i);
  assert.match(css, /\.paper-card\{[^}]*grid-template-columns:[^;}]*minmax\(0,\.\d+fr\)[^;}]*minmax\(0,1\.\d+fr\)/i);
});

test('nuclear proliferation journal paper links to the supplied journal at page 39', () => {
  const html = read('site/papers/index.html');
  assert.match(html, /6a9223c28e9103b92ebd163d_FINALW26-compressed\.pdf#page=39/);
  assert.match(html, /nuclear-proliferation\.pdf#page=39/);
});

test('build stages the journal PDF before static export', () => {
  const pkg = read('package.json');
  const fetcher = read('scripts/fetch-paper-assets.mjs');
  const script = read('scripts/build-static.mjs');
  assert.match(pkg, /fetch-paper-assets\.mjs/);
  assert.match(fetcher, /nuclear-proliferation\.pdf/);
  assert.match(fetcher, /%PDF-/);
  assert.match(script, /site/);
  assert.match(script, /public/);
  assert.match(script, /dist/);
});
