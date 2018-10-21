(function(global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
    define('JZZ.synth.Tiny', ['JZZ'], factory);
  }
  else {
    factory(JZZ);
  }
})(this, function(JZZ) {

  if (!JZZ) return;
  if (!JZZ.synth) JZZ.synth = {};
  if (JZZ.synth.Tiny) return;

  var _version = '0.0.0';

//#include webaudio-tinysynth

  var _ac = JZZ.lib.getAudioContext();

  var _synth = {};
  var _noname = [];
  var _engine = {};

  _engine._info = function(name) {
    if (!name) name = 'JZZ.synth.Tiny';
    return {
      type: 'Web Audo',
      name: name,
      manufacturer: 'virtual',
      version: _version
    };
  };

  _engine._openOut = function(port, name) {
    if (!_ac) { port._crash('AudioContext not supported'); return; }
    var synth;
    if (typeof name !== 'undefined') {
      name = '' + name;
      if (!_synth[name]) _synth[name] = new Synth();
      synth = _synth[name];
    }
    else {
      synth = new WebAudioTinySynth();
      _noname.push(synth);
    }
    port.plug = function(dest) {
      if (dest && (dest.context instanceof AudioContext || dest.context instanceof webkitAudioContext)) {
        synth.setAudioContext(dest.context, dest);
      }
    };
    port._info = _engine._info(name);
    port._receive = function(msg) { synth.send(msg); };
    port._resume();
  };

  JZZ.synth.Tiny = function(name) {
    return JZZ.lib.openMidiOut(name, _engine);
  };

  JZZ.synth.Tiny.register = function(name) {
    return _ac ? JZZ.lib.registerMidiOut(name, _engine) : false;
  };

  JZZ.synth.Tiny.version = function() { return _version; };

});