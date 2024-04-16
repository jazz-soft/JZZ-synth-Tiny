var JZZ, WAAPI;
try {
  WAAPI = require('node-web-audio-api');
  JZZ = require('jzz');
  require('jzz-midi-smf')(JZZ);
  require('.')(JZZ);
}
catch (e) {
  console.log('Please run `npm install` ...');
  process.exit(0);
}

var file = process.argv[2];
if (typeof file == 'undefined') file = 'test.mid';
var data = require('fs').readFileSync(file, 'binary');
var smf = new JZZ.MIDI.SMF(data);

global.window = { AudioContext: WAAPI.AudioContext };
var player = smf.player();
player.onEnd = function() { console.log('Done!'); JZZ.lib.closeAudioContext(); };

JZZ.synth.Tiny().or('Cannot open MIDI Out!').and(function() {
  player.connect(this);
  player.play();
});
