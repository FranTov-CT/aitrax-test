const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

test('generates exactly 10 nonempty random text lines', () => {
  const run = () => execFileSync(process.execPath, [path.join(__dirname, 'generate-text.js')], { encoding: 'utf8' });
  const output = run();
  const lines = output.trimEnd().split('\n');
  assert.equal(lines.length, 10);
  assert.ok(lines.every(line => /^[a-f0-9]{32}$/.test(line)));
  assert.equal(new Set(lines).size, 10);
  assert.notEqual(output, run());
});
