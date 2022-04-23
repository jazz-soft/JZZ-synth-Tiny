const assert = require('assert');
const JZZ = require('jzz');
const version = require('../package.json').version;
require('..')(JZZ);

describe('register', function() {
  it('register', function() {
    JZZ.synth.Tiny.register();
    JZZ.synth.Tiny.register('synth');
  });
  it('version', function() {
    assert.equal(JZZ.synth.Tiny.version(), version);
  });
});
