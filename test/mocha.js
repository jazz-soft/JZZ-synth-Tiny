const assert = require('assert');
const WAT = require('web-audio-test');
const JZZ = require('jzz');
const version = require('../package.json').version;
require('..')(JZZ);

global.window = require('web-audio-test');
global.setInterval = function() {};
const _startTime = Date.now();
global.performance = { now: function() { return Date.now() - _startTime; } };

describe('register', function() {
  it('register', function() {
    JZZ.synth.Tiny.register();
    JZZ.synth.Tiny.register('synth');
  });
  it('version', function() {
    assert.equal(JZZ.synth.Tiny.version(), version);
  });
});

describe('web-audio', function() {
  it('create', function() {
    synth = JZZ.synth.Tiny();
  });
  it('play note', function() {
    synth = JZZ.synth.Tiny();
    synth.noteOn(0, 60, 127);
    synth.noteOff(0, 60);
    synth.noteOn(9, 60, 127);
    synth.noteOff(9, 60);
  });
});
