import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

test('ADN stacks Web/Search, Structured Metadata, and ADN sections vertically', () => {
  const source = read('public/projects/adn/workflow.mmd');
  assert.match(source, /^flowchart TB/m);
  assert.match(source, /W0\s*~~~\s*M0/);
  assert.match(source, /M0\s*~~~\s*D0/);
});

test('AgentShare stacks Creator, Transport, and Recipient sections vertically', () => {
  const source = read('public/projects/agentshare/architecture.mmd');
  assert.match(source, /^flowchart TB/m);
  assert.match(source, /subgraph TRANSPORT\[/);
  assert.match(source, /C4\s*-->\|"ONE CAPABILITY LINK/);
  assert.match(source, /BLIND RELAY[\s\S]*?-->\s*D\[Decrypt locally\]/);
  assert.match(source, /direction LR/g);
});
