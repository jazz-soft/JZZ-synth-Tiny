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
  it('synth', function() {
    var synth = JZZ.synth.Tiny();
    var v1 = synth.getSynth(60);
    synth.setSynth(60, v1);
    var v2 = synth.getSynth(60, true);
    synth.setSynth(60, v2, true);
  });
  it('play note', function() {
    var synth = JZZ.synth.Tiny();
    synth.noteOn(0, 60, 127);
    synth.noteOn(0, 60, 0);
    synth.noteOff(0, 60);
    synth.noteOn(9, 60, 127);
    synth.noteOn(9, 0, 127);
    synth.noteOff(9, 60);
  });
  it('program', function() {
    var synth = JZZ.synth.Tiny();
    synth.program(1, 8);
  });
  it('pitch bend', function() {
    var synth = JZZ.synth.Tiny();
    synth.pitchBendF(1, 0.5);
    synth.noteOn(1, 60);
    synth.pitchBendF(1, 0);
  });
  it('reset', function() {
    var synth = JZZ.synth.Tiny();
    synth.allNotesOff(0);
    synth.allSoundOff(0);
    synth.omni(0);
    synth.resetAllControllers(0);
  });
  it('master volume', function() {
    var synth = JZZ.synth.Tiny();
    synth.sxMasterVolumeF(0.9);
    synth.gsMasterVolumeF(0.9);
    synth.xgMasterVolumeF(0.9);
  });
  it('master tuning', function() {
    var synth = JZZ.synth.Tiny();
    synth.sxMasterTuningF(1.5);
    synth.gsMasterTuningF(1.5);
    synth.xgMasterTuningF(1.5);
  });
  it('rpn tuning', function() {
    var synth = JZZ.synth.Tiny();
    synth.rpnTuning(1, 1, 1);
  });
});
