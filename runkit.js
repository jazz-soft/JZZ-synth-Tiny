// runkit-midi uses jzz-synth-tiny inside the MIDI player
const rkmidi = require('runkit-midi');
const download = require('download');
const midi = await download('https://github.com/jazz-soft/JZZ-synth-Tiny/raw/master/test/all-gm-sounds.mid');
rkmidi(midi);
// click the [▶run] button... ↓