import { test } from 'node:test';
import assert from 'node:assert/strict';
import { escapeXml, clip, ago, render } from './terminal.mjs';

test('commit messages cannot inject markup into the SVG', () => {
  const svg = render({ repoCount: 1, total: 0, days: [{ date: '2026-11-01', contributionCount: 0 }],
    repos: [{ name: 'r', description: '<script>x</script> & "q"', pushedAt: new Date().toISOString() }] });
  assert.ok(!svg.includes('<script>'));
  assert.equal(escapeXml(`<&>"'`), '&lt;&amp;&gt;&quot;&apos;');
});

test('clip keeps the first line and truncates', () => {
  assert.equal(clip('abcdef\nsecond', 4), 'abc…');
  assert.equal(clip('ab', 4), 'ab');
});

test('ago', () => {
  const now = Date.parse('2026-11-07T12:00:00Z');
  assert.equal(ago('2026-11-07T01:00:00Z', now), 'today');
  assert.equal(ago('2026-11-05T11:00:00Z', now), '2 days ago');
});
