const assert = require('assert');
const WAT = require('web-audio-test');
const JZZ = require('jzz');
const version = require('../package.json').version;
require('..')(JZZ);

global.window = WAT;
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
    var synth = JZZ.synth.Tiny();
    var info = synth.info();
    assert.equal(info.type, 'Web Audio');
    assert.equal(info.name, 'JZZ.synth.Tiny');
    assert.equal(info.manufacturer, 'virtual');
    assert.equal(info.version, version);
    assert.equal(info.engine, 'none');
    assert.equal(info.sysex, true);
  });
  it('plug', function() {
    JZZ.synth.Tiny.register('synth');
    global.AudioContext = WAT.AudioContext;
    global.webkitAudioContext = WAT.AudioContext;
    var synth = JZZ().openMidiOut('synth');
    synth = JZZ().openMidiOut('synth');
    synth.plug();
    synth.plug({ context: 'dummy' });
    synth.plug({ context: JZZ.lib.getAudioContext() });
  });
  it('play note', function() {
    var synth = JZZ.synth.Tiny();
    synth.noteOn(0, 60, 127);
    synth.noteOff(0, 60);
    synth.noteOn(9, 60, 127);
    synth.noteOff(9, 60);
  });
});
