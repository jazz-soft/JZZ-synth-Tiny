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
    JZZ({engine: 'none'})
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
    synth.program(1, 47);
    synth.noteOn(1, 60, 127);
    synth.noteOff(1, 60);
    synth.program(2, 55);
    synth.noteOn(2, 60, 127);
    synth.noteOff(2, 60);
  });
  it('pitch bend', function() {
    var synth = JZZ.synth.Tiny();
    synth.pitchBendF(1, 0.5);
    synth.noteOn(1, 60, 127);
    synth.pitchBendF(1, 0);
    synth.noteOff(1, 60);
  });
  it('modulation', function() {
    var synth = JZZ.synth.Tiny();
    synth.modF(1, 0.5);
    synth.noteOn(1, 60, 127);
    synth.modF(1, 0);
    synth.noteOff(1, 60);
  });
  it('volume', function() {
    var synth = JZZ.synth.Tiny();
    synth.volumeF(1, 0.5);
    synth.noteOn(1, 60, 127);
    synth.volumeF(1, 0);
    synth.noteOff(1, 60);
  });
  it('pan', function() {
    var synth = JZZ.synth.Tiny();
    synth.panF(1, 0.5);
    synth.noteOn(1, 60, 127);
    synth.panF(1, 0);
    synth.noteOff(1, 60);
  });
  it('expression', function() {
    var synth = JZZ.synth.Tiny();
    synth.expressionF(1, 0.5);
    synth.noteOn(1, 60, 127);
    synth.expressionF(1, 0);
    synth.noteOff(1, 60);
  });
  it('sustain', function() {
    var synth = JZZ.synth.Tiny();
    synth.damper(1, true);
    synth.noteOn(1, 60, 127);
    synth.damper(1, false);
    synth.noteOff(1, 60);
  });
  it('rpn/nrpn', function() {
    var synth = JZZ.synth.Tiny();
    synth.rpn(2, 0);
    synth.dataIncr(2);
    synth.dataDecr(2);
    synth.nrpn(2, 0);
    synth.dataIncr(2);
    synth.dataDecr(2);
  });
  it('reset', function() {
    var synth = JZZ.synth.Tiny();
    synth.allNotesOff(0);
    synth.allSoundOff(0);
    synth.omni(0);
    synth.resetAllControllers(0);
    synth.noteOn(0, 60, 127);
    synth.allNotesOff(0);
    synth.active();
    synth.reset();
  });
  it('rpn pitch bend range', function() {
    var synth = JZZ.synth.Tiny();
    synth.rpnPitchBendRangeF(1, 1.25);
  });
  it('rpn tuning', function() {
    var synth = JZZ.synth.Tiny();
    synth.rpnTuningF(1, 1.25);
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
  it('scale tuning', function() {
    var synth = JZZ.synth.Tiny();
    synth.gsOctaveTuningF(5, 'Ab', 0.5);
  });
  it('drum part change', function() {
    var synth = JZZ.synth.Tiny();
    synth.sxGS([0x40, 0x17, 0x15, 0x01]); // drum part
    synth.sxGS([0x40, 0x20, 0x20, 0x00]); // dummy
    synth.sxGS([0x40, 0x17, 0x20, 0x01]); // dummy
  });
});
