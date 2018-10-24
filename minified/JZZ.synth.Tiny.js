!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define("JZZ.synth.Tiny",["JZZ"],e):e(JZZ)}(0,function(e){if(e&&(e.synth||(e.synth={}),!e.synth.Tiny)){var s="1.0.1",a=e.lib.getAudioContext(),n={},i=[],r={_info:function(t){return t||(t="JZZ.synth.Tiny"),{type:"Web Audo",name:t,manufacturer:"virtual",version:s}},_openOut:function(t,e){var s;a?(void 0!==e?(n[e=""+e]||(n[e]=new o),s=n[e]):(s=new o,i.push(s)),t.plug=function(t){t&&(t.context instanceof AudioContext||t.context instanceof webkitAudioContext)&&s.setAudioContext(t.context,t)},t._info=r._info(e),t._receive=function(t){s.send(t)},t._resume()):t._crash("AudioContext not supported")}};e.synth.Tiny=function(t){return e.lib.openMidiOut(t,r)},e.synth.Tiny.register=function(t){return!!a&&e.lib.registerMidiOut(t,r)},e.synth.Tiny.version=function(){return s}}function o(t){for(var i in this.__proto__=this.sy={is:"webaudio-tinysynth",properties:{masterVol:{type:Number,value:.5,observer:"setMasterVol"},reverbLev:{type:Number,value:.3,observer:"setReverbLev"},quality:{type:Number,value:1,observer:"setQuality"},debug:{type:Number,value:0},src:{type:String,value:null,observer:"loadMIDIUrl"},loop:{type:Number,value:0},internalcontext:{type:Number,value:1},tsmode:{type:Number,value:0},voices:{type:Number,value:64},useReverb:{type:Number,value:1}},program:[{name:"Acoustic Grand Piano"},{name:"Bright Acoustic Piano"},{name:"Electric Grand Piano"},{name:"Honky-tonk Piano"},{name:"Electric Piano 1"},{name:"Electric Piano 2"},{name:"Harpsichord"},{name:"Clavi"},{name:"Celesta"},{name:"Glockenspiel"},{name:"Music Box"},{name:"Vibraphone"},{name:"Marimba"},{name:"Xylophone"},{name:"Tubular Bells"},{name:"Dulcimer"},{name:"Drawbar Organ"},{name:"Percussive Organ"},{name:"Rock Organ"},{name:"Church Organ"},{name:"Reed Organ"},{name:"Accordion"},{name:"Harmonica"},{name:"Tango Accordion"},{name:"Acoustic Guitar (nylon)"},{name:"Acoustic Guitar (steel)"},{name:"Electric Guitar (jazz)"},{name:"Electric Guitar (clean)"},{name:"Electric Guitar (muted)"},{name:"Overdriven Guitar"},{name:"Distortion Guitar"},{name:"Guitar harmonics"},{name:"Acoustic Bass"},{name:"Electric Bass (finger)"},{name:"Electric Bass (pick)"},{name:"Fretless Bass"},{name:"Slap Bass 1"},{name:"Slap Bass 2"},{name:"Synth Bass 1"},{name:"Synth Bass 2"},{name:"Violin"},{name:"Viola"},{name:"Cello"},{name:"Contrabass"},{name:"Tremolo Strings"},{name:"Pizzicato Strings"},{name:"Orchestral Harp"},{name:"Timpani"},{name:"String Ensemble 1"},{name:"String Ensemble 2"},{name:"SynthStrings 1"},{name:"SynthStrings 2"},{name:"Choir Aahs"},{name:"Voice Oohs"},{name:"Synth Voice"},{name:"Orchestra Hit"},{name:"Trumpet"},{name:"Trombone"},{name:"Tuba"},{name:"Muted Trumpet"},{name:"French Horn"},{name:"Brass Section"},{name:"SynthBrass 1"},{name:"SynthBrass 2"},{name:"Soprano Sax"},{name:"Alto Sax"},{name:"Tenor Sax"},{name:"Baritone Sax"},{name:"Oboe"},{name:"English Horn"},{name:"Bassoon"},{name:"Clarinet"},{name:"Piccolo"},{name:"Flute"},{name:"Recorder"},{name:"Pan Flute"},{name:"Blown Bottle"},{name:"Shakuhachi"},{name:"Whistle"},{name:"Ocarina"},{name:"Lead 1 (square)"},{name:"Lead 2 (sawtooth)"},{name:"Lead 3 (calliope)"},{name:"Lead 4 (chiff)"},{name:"Lead 5 (charang)"},{name:"Lead 6 (voice)"},{name:"Lead 7 (fifths)"},{name:"Lead 8 (bass + lead)"},{name:"Pad 1 (new age)"},{name:"Pad 2 (warm)"},{name:"Pad 3 (polysynth)"},{name:"Pad 4 (choir)"},{name:"Pad 5 (bowed)"},{name:"Pad 6 (metallic)"},{name:"Pad 7 (halo)"},{name:"Pad 8 (sweep)"},{name:"FX 1 (rain)"},{name:"FX 2 (soundtrack)"},{name:"FX 3 (crystal)"},{name:"FX 4 (atmosphere)"},{name:"FX 5 (brightness)"},{name:"FX 6 (goblins)"},{name:"FX 7 (echoes)"},{name:"FX 8 (sci-fi)"},{name:"Sitar"},{name:"Banjo"},{name:"Shamisen"},{name:"Koto"},{name:"Kalimba"},{name:"Bag pipe"},{name:"Fiddle"},{name:"Shanai"},{name:"Tinkle Bell"},{name:"Agogo"},{name:"Steel Drums"},{name:"Woodblock"},{name:"Taiko Drum"},{name:"Melodic Tom"},{name:"Synth Drum"},{name:"Reverse Cymbal"},{name:"Guitar Fret Noise"},{name:"Breath Noise"},{name:"Seashore"},{name:"Bird Tweet"},{name:"Telephone Ring"},{name:"Helicopter"},{name:"Applause"},{name:"Gunshot"}],drummap:[{name:"Acoustic Bass Drum"},{name:"Bass Drum 1"},{name:"Side Stick"},{name:"Acoustic Snare"},{name:"Hand Clap"},{name:"Electric Snare"},{name:"Low Floor Tom"},{name:"Closed Hi Hat"},{name:"High Floor Tom"},{name:"Pedal Hi-Hat"},{name:"Low Tom"},{name:"Open Hi-Hat"},{name:"Low-Mid Tom"},{name:"Hi-Mid Tom"},{name:"Crash Cymbal 1"},{name:"High Tom"},{name:"Ride Cymbal 1"},{name:"Chinese Cymbal"},{name:"Ride Bell"},{name:"Tambourine"},{name:"Splash Cymbal"},{name:"Cowbell"},{name:"Crash Cymbal 2"},{name:"Vibraslap"},{name:"Ride Cymbal 2"},{name:"Hi Bongo"},{name:"Low Bongo"},{name:"Mute Hi Conga"},{name:"Open Hi Conga"},{name:"Low Conga"},{name:"High Timbale"},{name:"Low Timbale"},{name:"High Agogo"},{name:"Low Agogo"},{name:"Cabasa"},{name:"Maracas"},{name:"Short Whistle"},{name:"Long Whistle"},{name:"Short Guiro"},{name:"Long Guiro"},{name:"Claves"},{name:"Hi Wood Block"},{name:"Low Wood Block"},{name:"Mute Cuica"},{name:"Open Cuica"},{name:"Mute Triangle"},{name:"Open Triangle"}],program1:[[{w:"sine",v:.4,d:.7,r:.1},{w:"triangle",v:3,d:.7,s:.1,g:1,a:.01,k:-1.2}],[{w:"triangle",v:.4,d:.7,r:.1},{w:"triangle",v:4,t:3,d:.4,s:.1,g:1,k:-1,a:.01}],[{w:"sine",d:.7,r:.1},{w:"triangle",v:4,f:2,d:.5,s:.5,g:1,k:-1}],[{w:"sine",d:.7,v:.2},{w:"triangle",v:4,t:3,f:2,d:.3,g:1,k:-1,a:.01,s:.5}],[{w:"sine",v:.35,d:.7},{w:"sine",v:3,t:7,f:1,d:1,s:1,g:1,k:-.7}],[{w:"sine",v:.35,d:.7},{w:"sine",v:8,t:7,f:1,d:.5,s:1,g:1,k:-.7}],[{w:"sawtooth",v:.34,d:2},{w:"sine",v:8,f:.1,d:2,s:1,r:2,g:1}],[{w:"triangle",v:.34,d:1.5},{w:"square",v:6,f:.1,d:1.5,s:.5,r:2,g:1}],[{w:"sine",d:.3,r:.3},{w:"sine",v:7,t:11,d:.03,g:1}],[{w:"sine",d:.3,r:.3},{w:"sine",v:11,t:6,d:.2,s:.4,g:1}],[{w:"sine",v:.2,d:.3,r:.3},{w:"sine",v:11,t:5,d:.1,s:.4,g:1}],[{w:"sine",v:.2,d:.6,r:.6},{w:"triangle",v:11,t:5,f:1,s:.5,g:1}],[{w:"sine",v:.3,d:.2,r:.2},{w:"sine",v:6,t:5,d:.02,g:1}],[{w:"sine",v:.3,d:.2,r:.2},{w:"sine",v:7,t:11,d:.03,g:1}],[{w:"sine",v:.2,d:1,r:1},{w:"sine",v:11,t:3.5,d:1,r:1,g:1}],[{w:"triangle",v:.2,d:.5,r:.2},{w:"sine",v:6,t:2.5,d:.2,s:.1,r:.2,g:1}],[{w:"w9999",v:.22,s:.9},{w:"w9999",v:.22,t:2,f:2,s:.9}],[{w:"w9999",v:.2,s:1},{w:"sine",v:11,t:6,f:2,s:.1,g:1,h:.006,r:.002,d:.002},{w:"w9999",v:.2,t:2,f:1,h:0,s:1}],[{w:"w9999",v:.2,d:.1,s:.9},{w:"w9999",v:.25,t:4,f:2,s:.5}],[{w:"w9999",v:.3,a:.04,s:.9},{w:"w9999",v:.2,t:8,f:2,a:.04,s:.9}],[{w:"sine",v:.2,a:.02,d:.05,s:1},{w:"sine",v:6,t:3,f:1,a:.02,d:.05,s:1,g:1}],[{w:"triangle",v:.2,a:.02,d:.05,s:.8},{w:"square",v:7,t:3,f:1,d:.05,s:1.5,g:1}],[{w:"square",v:.2,a:.02,d:.2,s:.5},{w:"square",v:1,d:.03,s:2,g:1}],[{w:"square",v:.2,a:.02,d:.1,s:.8},{w:"square",v:1,a:.3,d:.1,s:2,g:1}],[{w:"sine",v:.3,d:.5,f:1},{w:"triangle",v:5,t:3,f:-1,d:1,s:.1,g:1}],[{w:"sine",v:.4,d:.6,f:1},{w:"triangle",v:12,t:3,d:.6,s:.1,g:1,f:-1}],[{w:"triangle",v:.3,d:1,f:1},{w:"triangle",v:6,f:-1,d:.4,s:.5,g:1,t:3}],[{w:"sine",v:.3,d:1,f:-1},{w:"triangle",v:11,f:1,d:.4,s:.5,g:1,t:3}],[{w:"sine",v:.4,d:.1,r:.01},{w:"sine",v:7,g:1}],[{w:"triangle",v:.4,d:1,f:1},{w:"square",v:4,f:-1,d:1,s:.7,g:1}],[{w:"triangle",v:.35,d:1,f:1},{w:"square",v:7,f:-1,d:.3,s:.5,g:1}],[{w:"sine",v:.2,t:1.5,a:.005,h:.2,d:.6},{w:"sine",v:11,t:5,f:2,d:1,s:.5,g:1}],[{w:"sine",d:.3},{w:"sine",v:4,t:3,d:1,s:1,g:1}],[{w:"sine",d:.3},{w:"sine",v:4,t:3,d:1,s:1,g:1}],[{w:"w9999",d:.3,v:.7,s:.5},{w:"sawtooth",v:1.2,d:.02,s:.5,g:1,h:0,r:.02}],[{w:"sine",d:.3},{w:"sine",v:4,t:3,d:1,s:1,g:1}],[{w:"triangle",v:.3,t:2,d:1},{w:"triangle",v:15,t:2.5,d:.04,s:.1,g:1}],[{w:"triangle",v:.3,t:2,d:1},{w:"triangle",v:15,t:2.5,d:.04,s:.1,g:1}],[{w:"triangle",d:.7},{w:"square",v:.4,t:.5,f:1,d:.2,s:10,g:1}],[{w:"triangle",d:.7},{w:"square",v:.4,t:.5,f:1,d:.2,s:10,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,d:11,s:.2,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,d:11,s:.2,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,t:.5,d:11,s:.2,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,t:.5,d:11,s:.2,g:1}],[{w:"sine",v:.4,a:.1,d:11},{w:"sine",v:6,f:2.5,d:.05,s:1.1,g:1}],[{w:"sine",v:.3,d:.1,r:.1},{w:"square",v:4,t:3,d:1,s:.2,g:1}],[{w:"sine",v:.3,d:.5,r:.5},{w:"sine",v:7,t:2,f:2,d:1,r:1,g:1}],[{w:"triangle",v:.6,h:.03,d:.3,r:.3,t:.5},{w:"n0",v:8,t:1.5,d:.08,r:.08,g:1}],[{w:"sawtooth",v:.3,a:.03,s:.5},{w:"sawtooth",v:.2,t:2,f:2,d:1,s:2}],[{w:"sawtooth",v:.3,f:-2,a:.03,s:.5},{w:"sawtooth",v:.2,t:2,f:2,d:1,s:2}],[{w:"sawtooth",v:.2,a:.02,s:1},{w:"sawtooth",v:.2,t:2,f:2,a:1,d:1,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1},{w:"sawtooth",v:.2,f:2,a:.02,d:1,s:1}],[{w:"triangle",v:.3,a:.03,s:1},{w:"sine",v:3,t:5,f:1,d:1,s:1,g:1}],[{w:"sine",v:.4,a:.03,s:.9},{w:"sine",v:1,t:2,f:3,d:.03,s:.2,g:1}],[{w:"triangle",v:.6,a:.05,s:.5},{w:"sine",v:1,f:.8,d:.2,s:.2,g:1}],[{w:"square",v:.15,a:.01,d:.2,r:.2,t:.5,h:.03},{w:"square",v:4,f:.5,d:.2,r:11,a:.01,g:1,h:.02},{w:"square",v:.15,t:4,f:1,a:.02,d:.15,r:.15,h:.03},{g:3,w:"square",v:4,f:-.5,a:.01,h:.02,d:.15,r:11}],[{w:"square",v:.2,a:.01,d:1,s:.6,r:.04},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.5,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.04,d:1,s:.4,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.15,a:.04,s:1},{w:"sine",v:2,d:.1,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.5,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.6,r:.08},{w:"sine",v:1,f:.2,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:.5,s:.7,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.5,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:2,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"square",v:.2,a:.02,d:2,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"sine",v:.4,a:.02,d:.7,s:.5},{w:"square",v:5,t:2,d:.2,s:.5,g:1}],[{w:"sine",v:.3,a:.05,d:.2,s:.8},{w:"sawtooth",v:6,f:.1,d:.1,s:.3,g:1}],[{w:"sine",v:.3,a:.03,d:.2,s:.4},{w:"square",v:7,f:.2,d:1,s:.1,g:1}],[{w:"square",v:.2,a:.05,d:.1,s:.8},{w:"square",v:4,d:.1,s:1.1,g:1}],[{w:"sine",a:.02,d:2},{w:"sine",v:6,t:2,d:.04,g:1}],[{w:"sine",v:.7,a:.03,d:.4,s:.4},{w:"sine",v:4,t:2,f:.2,d:.4,g:1}],[{w:"sine",v:.7,a:.02,d:.4,s:.6},{w:"sine",v:3,t:2,d:0,s:1,g:1}],[{w:"sine",v:.4,a:.06,d:.3,s:.3},{w:"sine",v:7,t:2,d:.2,s:.2,g:1}],[{w:"sine",a:.02,d:.3,s:.3},{w:"sawtooth",v:3,t:2,d:.3,g:1}],[{w:"sine",v:.4,a:.02,d:2,s:.1},{w:"sawtooth",v:8,t:2,f:1,d:.5,g:1}],[{w:"sine",v:.7,a:.03,d:.5,s:.3},{w:"sine",v:.003,t:0,f:4,d:.1,s:.002,g:1}],[{w:"sine",v:.7,a:.02,d:2},{w:"sine",v:1,t:2,f:1,d:.02,g:1}],[{w:"square",v:.3,d:1,s:.5},{w:"square",v:1,f:.2,d:1,s:.5,g:1}],[{w:"sawtooth",v:.3,d:2,s:.5},{w:"square",v:2,f:.1,s:.5,g:1}],[{w:"triangle",v:.5,a:.05,d:2,s:.6},{w:"sine",v:4,t:2,g:1}],[{w:"triangle",v:.3,a:.01,d:2,s:.3},{w:"sine",v:22,t:2,f:1,d:.03,s:.2,g:1}],[{w:"sawtooth",v:.3,d:1,s:.5},{w:"sine",v:11,t:11,a:.2,d:.05,s:.3,g:1}],[{w:"sine",v:.3,a:.06,d:1,s:.5},{w:"sine",v:7,f:1,d:1,s:.2,g:1}],[{w:"sawtooth",v:.3,a:.03,d:.7,s:.3,r:.2},{w:"sawtooth",v:.3,t:.75,d:.7,a:.1,s:.3,r:.2}],[{w:"triangle",v:.3,a:.01,d:.7,s:.5},{w:"square",v:5,t:.5,d:.7,s:.5,g:1}],[{w:"triangle",v:.3,a:.02,d:.3,s:.3,r:.3},{w:"square",v:3,t:4,f:1,a:.02,d:.1,s:1,g:1},{w:"triangle",v:.08,t:.5,a:.1,h:0,d:.1,s:.5,r:.1,b:0,c:0}],[{w:"sine",v:.3,a:.05,d:1,s:.7,r:.3},{w:"sine",v:2,f:1,d:.3,s:1,g:1}],[{w:"square",v:.3,a:.03,d:.5,s:.3,r:.1},{w:"square",v:4,f:1,a:.03,d:.1,g:1}],[{w:"triangle",v:.3,a:.08,d:1,s:.3,r:.1},{w:"square",v:2,f:1,d:.3,s:.3,g:1,t:4,a:.08}],[{w:"sine",v:.3,a:.05,d:1,s:.3,r:.1},{w:"sine",v:.1,t:2.001,f:1,d:1,s:50,g:1}],[{w:"triangle",v:.3,a:.03,d:.7,s:.3,r:.2},{w:"sine",v:12,t:7,f:1,d:.5,s:1.7,g:1}],[{w:"sine",v:.3,a:.05,d:1,s:.3,r:.1},{w:"sawtooth",v:22,t:6,d:.06,s:.3,g:1}],[{w:"triangle",v:.3,a:.05,d:11,r:.3},{w:"triangle",v:1,d:1,s:8,g:1}],[{w:"sawtooth",v:.3,d:4,s:.8,r:.1},{w:"square",v:1,t:2,f:8,a:1,d:1,s:1,r:.1,g:1}],[{w:"triangle",v:.3,d:1,s:.5,t:.8,a:.2,p:1.25,q:.2},{w:"sawtooth",v:.2,a:.2,d:.3,s:1,t:1.2,p:1.25,q:.2}],[{w:"sine",v:.3,d:1,s:.3},{w:"square",v:22,t:11,d:.5,s:.1,g:1}],[{w:"sawtooth",v:.3,a:.04,d:1,s:.8,r:.1},{w:"square",v:1,t:.5,d:1,s:2,g:1}],[{w:"triangle",v:.3,d:1,s:.3},{w:"sine",v:22,t:6,d:.6,s:.05,g:1}],[{w:"sine",v:.6,a:.1,d:.05,s:.4},{w:"sine",v:5,t:5,f:1,d:.05,s:.3,g:1}],[{w:"sine",a:.1,d:.05,s:.4,v:.8},{w:"sine",v:5,t:5,f:1,d:.05,s:.3,g:1}],[{w:"square",v:.3,a:.1,d:.1,s:.4},{w:"square",v:1,f:1,d:.3,s:.1,g:1}],[{w:"sawtooth",v:.3,d:.5,r:.5},{w:"sawtooth",v:11,t:5,d:.05,g:1}],[{w:"square",v:.3,d:.2,r:.2},{w:"square",v:7,t:3,d:.05,g:1}],[{w:"triangle",d:.2,r:.2},{w:"square",v:9,t:3,d:.1,r:.1,g:1}],[{w:"triangle",d:.3,r:.3},{w:"square",v:6,t:3,d:1,r:1,g:1}],[{w:"triangle",v:.4,d:.2,r:.2},{w:"square",v:22,t:12,d:.1,r:.1,g:1}],[{w:"sine",v:.25,a:.02,d:.05,s:.8},{w:"square",v:1,t:2,d:.03,s:11,g:1}],[{w:"sine",v:.3,a:.05,d:11},{w:"square",v:7,t:3,f:1,s:.7,g:1}],[{w:"square",v:.3,a:.05,d:.1,s:.8},{w:"square",v:4,d:.1,s:1.1,g:1}],[{w:"sine",v:.4,d:.3,r:.3},{w:"sine",v:7,t:9,d:.1,r:.1,g:1}],[{w:"sine",v:.7,d:.1,r:.1},{w:"sine",v:22,t:7,d:.05,g:1}],[{w:"sine",v:.6,d:.15,r:.15},{w:"square",v:11,t:3.2,d:.1,r:.1,g:1}],[{w:"sine",v:.8,d:.07,r:.07},{w:"square",v:11,t:7,r:.01,g:1}],[{w:"triangle",v:.7,t:.5,d:.2,r:.2,p:.95},{w:"n0",v:9,g:1,d:.2,r:.2}],[{w:"sine",v:.7,d:.1,r:.1,p:.9},{w:"square",v:14,t:2,d:.005,r:.005,g:1}],[{w:"square",d:.15,r:.15,p:.5},{w:"square",v:4,t:5,d:.001,r:.001,g:1}],[{w:"n1",v:.3,a:1,s:1,d:.15,r:0,t:.5}],[{w:"sine",t:12.5,d:0,r:0,p:.5,v:.3,h:.2,q:.5},{g:1,w:"sine",v:1,t:2,d:0,r:0,s:1},{g:1,w:"n0",v:.2,t:2,a:.6,h:0,d:.1,r:.1,b:0,c:0}],[{w:"n0",v:.2,a:.05,h:.02,d:.02,r:.02}],[{w:"n0",v:.4,a:1,d:1,t:.25}],[{w:"sine",v:.3,a:.1,d:1,s:.5},{w:"sine",v:4,t:0,f:1.5,d:1,s:1,r:.1,g:1},{g:1,w:"sine",v:4,t:0,f:2,a:.6,h:0,d:.1,s:1,r:.1,b:0,c:0}],[{w:"square",v:.3,t:.25,d:11,s:1},{w:"square",v:12,t:0,f:8,d:1,s:1,r:11,g:1}],[{w:"n0",v:.4,t:.5,a:1,d:11,s:1,r:.5},{w:"square",v:1,t:0,f:14,d:1,s:1,r:11,g:1}],[{w:"sine",t:0,f:1221,a:.2,d:1,r:.25,s:1},{g:1,w:"n0",v:3,t:.5,d:1,s:1,r:1}],[{w:"sine",d:.4,r:.4,p:.1,t:2.5,v:1},{w:"n0",v:12,t:2,d:1,r:1,g:1}]],program0:[[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"sawtooth",v:.3,d:.7}],[{w:"sawtooth",v:.3,d:.7}],[{w:"sine",v:.5,d:.3,r:.3}],[{w:"triangle",v:.5,d:.3,r:.3}],[{w:"square",v:.2,d:.3,r:.3}],[{w:"square",v:.2,d:.3,r:.3}],[{w:"sine",v:.5,d:.1,r:.1}],[{w:"sine",v:.5,d:.1,r:.1}],[{w:"square",v:.2,d:1,r:1}],[{w:"sawtooth",v:.3,d:.7,r:.7}],[{w:"sine",v:.5,a:.01,s:1}],[{w:"sine",v:.7,d:.02,s:.7}],[{w:"square",v:.2,s:1}],[{w:"triangle",v:.5,a:.01,s:1}],[{w:"square",v:.2,a:.02,s:1}],[{w:"square",v:.2,a:.02,s:1}],[{w:"square",v:.2,a:.02,s:1}],[{w:"square",v:.2,a:.05,s:1}],[{w:"triangle",v:.5,d:.5}],[{w:"square",v:.2,d:.6}],[{w:"square",v:.2,d:.6}],[{w:"triangle",v:.8,d:.6}],[{w:"triangle",v:.4,d:.05}],[{w:"square",v:.2,d:1}],[{w:"square",v:.2,d:1}],[{w:"sine",v:.4,d:.6}],[{w:"triangle",v:.7,d:.4}],[{w:"triangle",v:.7,d:.7}],[{w:"triangle",v:.7,d:.7}],[{w:"triangle",v:.7,d:.7}],[{w:"square",v:.3,d:.2}],[{w:"square",v:.3,d:.2}],[{w:"square",v:.3,d:.1,s:.2}],[{w:"sawtooth",v:.4,d:.1,s:.2}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.3,d:.1}],[{w:"sawtooth",v:.3,d:.5,r:.5}],[{w:"triangle",v:.6,d:.1,r:.1,h:.03,p:.8}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"triangle",v:.3,a:.03,s:1}],[{w:"sine",v:.3,a:.03,s:1}],[{w:"triangle",v:.3,a:.05,s:1}],[{w:"sawtooth",v:.5,a:.01,d:.1}],[{w:"square",v:.3,a:.05,d:.2,s:.6}],[{w:"square",v:.3,a:.05,d:.2,s:.6}],[{w:"square",v:.3,a:.05,d:.2,s:.6}],[{w:"square",v:.2,a:.05,d:.01,s:1}],[{w:"square",v:.3,a:.05,s:1}],[{w:"square",v:.3,s:.7}],[{w:"square",v:.3,s:.7}],[{w:"square",v:.3,s:.7}],[{w:"square",v:.3,a:.02,d:2}],[{w:"square",v:.3,a:.02,d:2}],[{w:"square",v:.3,a:.03,d:2}],[{w:"square",v:.3,a:.04,d:2}],[{w:"square",v:.3,a:.02,d:2}],[{w:"square",v:.3,a:.05,d:2}],[{w:"square",v:.3,a:.03,d:2}],[{w:"square",v:.3,a:.03,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"square",v:.3,s:.7}],[{w:"sawtooth",v:.4,s:.7}],[{w:"triangle",v:.5,s:.7}],[{w:"sawtooth",v:.4,s:.7}],[{w:"sawtooth",v:.4,d:12}],[{w:"sine",v:.4,a:.06,d:12}],[{w:"sawtooth",v:.4,d:12}],[{w:"sawtooth",v:.4,d:12}],[{w:"sawtooth",v:.3,d:12}],[{w:"triangle",v:.5,d:12}],[{w:"square",v:.3,d:12}],[{w:"triangle",v:.5,a:.08,d:11}],[{w:"sawtooth",v:.5,a:.05,d:11}],[{w:"sawtooth",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"square",v:.3,d:11}],[{w:"sawtooth",v:.5,a:.04,d:11}],[{w:"sawtooth",v:.5,d:11}],[{w:"triangle",v:.5,a:.8,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"square",v:.3,d:11}],[{w:"sawtooth",v:.3,d:1,r:1}],[{w:"sawtooth",v:.5,d:.3}],[{w:"sawtooth",v:.5,d:.3,r:.3}],[{w:"sawtooth",v:.5,d:.3,r:.3}],[{w:"square",v:.3,d:.2,r:.2}],[{w:"square",v:.3,a:.02,d:2}],[{w:"sawtooth",v:.2,a:.02,d:.7}],[{w:"triangle",v:.5,d:1}],[{w:"sawtooth",v:.3,d:.3,r:.3}],[{w:"sine",v:.8,d:.1,r:.1}],[{w:"square",v:.2,d:.1,r:.1,p:1.05}],[{w:"sine",v:.8,d:.05,r:.05}],[{w:"triangle",v:.5,d:.1,r:.1,p:.96}],[{w:"triangle",v:.5,d:.1,r:.1,p:.97}],[{w:"square",v:.3,d:.1,r:.1}],[{w:"n1",v:.3,a:1,s:1,d:.15,r:0,t:.5}],[{w:"triangle",v:.5,d:.03,t:0,f:1332,r:.001,p:1.1}],[{w:"n0",v:.2,t:.1,d:.02,a:.05,h:.02,r:.02}],[{w:"n0",v:.4,a:1,d:1,t:.25}],[{w:"sine",v:.3,a:.8,d:1,t:0,f:1832}],[{w:"triangle",d:.5,t:0,f:444,s:1}],[{w:"n0",v:.4,d:1,t:0,f:22,s:1}],[{w:"n0",v:.5,a:.2,d:11,t:0,f:44}],[{w:"n0",v:.5,t:.25,d:.4,r:.4}]],drummap1:[[{w:"triangle",t:0,f:70,v:1,d:.05,h:.03,p:.9,q:.1},{w:"n0",g:1,t:6,v:17,r:.01,h:0,p:0}],[{w:"triangle",t:0,f:88,v:1,d:.05,h:.03,p:.5,q:.1},{w:"n0",g:1,t:5,v:42,r:.01,h:0,p:0}],[{w:"n0",f:222,p:0,t:0,r:.01,h:0}],[{w:"triangle",v:.3,f:180,d:.05,t:0,h:.03,p:.9,q:.1},{w:"n0",v:.6,t:0,f:70,h:.02,r:.01,p:0},{g:1,w:"square",v:2,t:0,f:360,r:.01,b:0,c:0}],[{w:"square",f:1150,v:.34,t:0,r:.03,h:.025,d:.03},{g:1,w:"n0",t:0,f:13,h:.025,d:.1,s:1,r:.1,v:1}],[{w:"triangle",f:200,v:1,d:.06,t:0,r:.06},{w:"n0",g:1,t:0,f:400,v:12,r:.02,d:.02}],[{w:"triangle",f:100,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.4,h:.015,d:.005,r:.005}],[{w:"n1",f:390,v:.25,r:.01,t:0}],[{w:"triangle",f:120,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.5,h:.015,d:.005,r:.005}],[{w:"n1",v:.25,f:390,r:.03,t:0,h:.005,d:.03}],[{w:"triangle",f:140,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"n1",v:.25,f:390,t:0,d:.2,r:.2},{w:"n0",v:.3,t:0,c:0,f:440,h:.005,d:.05}],[{w:"triangle",f:155,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"triangle",f:180,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"n1",v:.3,f:1200,d:.2,r:.2,h:.05,t:0},{w:"n1",t:0,v:1,d:.1,r:.1,p:1.2,f:440}],[{w:"triangle",f:220,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"n1",f:500,v:.15,d:.4,r:.4,h:0,t:0},{w:"n0",v:.1,t:0,r:.01,f:440}],[{w:"n1",v:.3,f:800,d:.2,r:.2,h:.05,t:0},{w:"square",t:0,v:1,d:.1,r:.1,p:.1,f:220,g:1}],[{w:"sine",f:1651,v:.15,d:.2,r:.2,h:0,t:0},{w:"sawtooth",g:1,t:1.21,v:7.2,d:.1,r:11,h:1},{g:1,w:"n0",v:3.1,t:.152,d:.002,r:.002}],null,[{w:"n1",v:.3,f:1200,d:.2,r:.2,h:.05,t:0},{w:"n1",t:0,v:1,d:.1,r:.1,p:1.2,f:440}],null,[{w:"n1",v:.3,f:555,d:.25,r:.25,h:.05,t:0},{w:"n1",t:0,v:1,d:.1,r:.1,f:440,a:.005,h:.02}],[{w:"sawtooth",f:776,v:.2,d:.3,t:0,r:.3},{g:1,w:"n0",v:2,t:0,f:776,a:.005,h:.02,d:.1,s:1,r:.1,c:0},{g:11,w:"sine",v:.1,t:0,f:22,d:.3,r:.3,b:0,c:0}],[{w:"n1",f:440,v:.15,d:.4,r:.4,h:0,t:0},{w:"n0",v:.4,t:0,r:.01,f:440}],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[{w:"sine",f:1720,v:.3,d:.02,t:0,r:.02},{w:"square",g:1,t:0,f:2876,v:6,d:.2,s:1,r:.2}],[{w:"sine",f:1720,v:.3,d:.25,t:0,r:.25},{w:"square",g:1,t:0,f:2876,v:6,d:.2,s:1,r:.2}]],drummap0:[[{w:"triangle",t:0,f:110,v:1,d:.05,h:.02,p:.1}],[{w:"triangle",t:0,f:150,v:.8,d:.1,p:.1,h:.02,r:.01}],[{w:"n0",f:392,v:.5,d:.01,p:0,t:0,r:.05}],[{w:"n0",f:33,d:.05,t:0}],[{w:"n0",f:100,v:.7,d:.03,t:0,r:.03,h:.02}],[{w:"n0",f:44,v:.7,d:.02,p:.1,t:0,h:.02}],[{w:"triangle",f:240,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:440,v:.2,r:.01,t:0}],[{w:"triangle",f:270,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:440,v:.2,d:.04,r:.04,t:0}],[{w:"triangle",f:300,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:440,v:.2,d:.1,r:.1,h:.02,t:0}],[{w:"triangle",f:320,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"triangle",f:360,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:150,v:.2,d:.1,r:.1,h:.05,t:0,p:.1}],[{w:"triangle",f:400,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:150,v:.2,d:.1,r:.01,h:.05,t:0,p:.1}],[{w:"n0",f:150,v:.2,d:.1,r:.01,h:.05,t:0,p:.1}],[{w:"n0",f:440,v:.3,d:.1,p:.9,t:0,r:.1}],[{w:"n0",f:200,v:.2,d:.05,p:.9,t:0}],[{w:"n0",f:440,v:.3,d:.12,p:.9,t:0}],[{w:"sine",f:800,v:.4,d:.06,t:0}],[{w:"n0",f:150,v:.2,d:.1,r:.01,h:.05,t:0,p:.1}],[{w:"n0",f:33,v:.3,d:.2,p:.9,t:0}],[{w:"n0",f:300,v:.3,d:.14,p:.9,t:0}],[{w:"sine",f:200,d:.06,t:0}],[{w:"sine",f:150,d:.06,t:0}],[{w:"sine",f:300,t:0}],[{w:"sine",f:300,d:.06,t:0}],[{w:"sine",f:250,d:.06,t:0}],[{w:"square",f:300,v:.3,d:.06,p:.8,t:0}],[{w:"square",f:260,v:.3,d:.06,p:.8,t:0}],[{w:"sine",f:850,v:.5,d:.07,t:0}],[{w:"sine",f:790,v:.5,d:.07,t:0}],[{w:"n0",f:440,v:.3,a:.05,t:0}],[{w:"n0",f:440,v:.3,a:.05,t:0}],[{w:"triangle",f:1800,v:.4,p:.9,t:0,h:.03}],[{w:"triangle",f:1800,v:.3,p:.9,t:0,h:.13}],[{w:"n0",f:330,v:.3,a:.02,t:0,r:.01}],[{w:"n0",f:330,v:.3,a:.02,t:0,h:.04,r:.01}],[{w:"n0",f:440,v:.3,t:0}],[{w:"sine",f:800,t:0}],[{w:"sine",f:700,t:0}],[{w:"n0",f:330,v:.3,t:0}],[{w:"n0",f:330,v:.3,t:0,h:.1,r:.01,p:.7}],[{w:"sine",t:0,f:1200,v:.3,r:.01}],[{w:"sine",t:0,f:1200,v:.3,d:.2,r:.2}]],ready:function(){this.pg=[],this.vol=[],this.ex=[],this.bend=[],this.rpnidx=[],this.brange=[],this.sustain=[],this.notetab=[],this.rhythm=[],this.maxTick=0,this.playTick=0,this.playing=0,this.releaseRatio=3.5;for(var t=0;t<16;++t)this.pg[t]=0,this.vol[t]=3e4/16129,this.bend[t]=0,this.brange[t]=256,this.rhythm[t]=0;this.rhythm[9]=1,this.preroll=.2,this.relcnt=0,setInterval(function(){if(3<=++this.relcnt){this.relcnt=0;for(var t=this.notetab.length-1;0<=t;--t){var e=this.notetab[t];this.actx.currentTime>e.e&&(this._pruneNote(e),this.notetab.splice(t,1))}}if(this.playing&&0<this.song.ev.length)for(var s=this.song.ev[this.playIndex];this.actx.currentTime+this.preroll>this.playTime;)if(65361==s.m[0]?(this.song.tempo=s.m[1],this.tick2Time=240/this.song.tempo/this.song.timebase):this.send(s.m,this.playTime),++this.playIndex,this.playIndex>=this.song.ev.length){if(!this.loop){this.playTick=this.maxTick,this.playing=0;break}s=this.song.ev[this.playIndex=0],this.playTick=s.t}else s=this.song.ev[this.playIndex],this.playTime+=(s.t-this.playTick)*this.tick2Time,this.playTick=s.t}.bind(this),60),console.log("internalcontext:"+this.internalcontext),this.internalcontext&&(window.AudioContext=window.AudioContext||window.webkitAudioContext,this.setAudioContext(new AudioContext)),this.isReady=1},setMasterVol:function(t){null!=t&&(this.masterVol=t),this.out&&(this.out.gain.value=this.masterVol)},setReverbLev:function(t){null!=t&&(this.reverbLev=t);var e=parseFloat(this.reverbLev);this.rev&&!isNaN(e)&&(this.rev.gain.value=8*e)},setLoop:function(t){this.loop=t},setVoices:function(t){this.voices=t},getPlayStatus:function(){return{play:this.playing,maxTick:this.maxTick,curTick:this.playTick}},locateMIDI:function(t){var e,s=this.playing;for(this.stopMIDI(),e=0;e<this.song.ev.length&&t>this.song.ev[e].t;++e){var a=this.song.ev[e],n=15&a.m[0];switch(240&a.m[0]){case 176:switch(a.m[1]){case 1:this.setModulation(n,a.m[2]);break;case 7:this.setChVol(n,a.m[2]);break;case 10:this.setPan(n,a.m[2]);break;case 11:this.setExpression(n,a.m[2]);break;case 64:this.setSustain(n,a.m[2])}break;case 192:this.pg[15&a.m[0]]=a.m[1]}65361==a.m[0]&&(this.song.tempo=a.m[1])}this.song.ev[e]?(this.playIndex=e,this.playTick=this.song.ev[e].t):(this.playIndex=0,this.playTick=this.maxTick),s&&this.playMIDI()},getTimbreName:function(t,e){return 0==t?this.program[e].name:this.drummap[e-35].name},loadMIDIUrl:function(t){if(t){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.loadMIDI=this.loadMIDI.bind(this),e.onload=function(t){200==this.status&&this.loadMIDI(this.response)},e.send()}},reset:function(){for(var t=0;t<16;++t)this.setProgram(t,0),this.setBendRange(t,256),this.setChVol(t,100),this.setPan(t,64),this.resetAllControllers(t),this.allSoundOff(t),this.rhythm[t]=0;this.rhythm[9]=1},stopMIDI:function(){for(var t=this.playing=0;t<16;++t)this.allSoundOff(t)},playMIDI:function(){if(this.song){var t=this.actx.createOscillator();t.connect(this.actx.destination),t.frequency.value=0,t.start(0),t.stop(this.actx.currentTime+.001),this.playTick>=this.maxTick&&(this.playTick=0,this.playIndex=0),this.playTime=this.actx.currentTime+.1,this.tick2Time=240/this.song.tempo/this.song.timebase,this.playing=1}},loadMIDI:function(t){function e(t,e){return(t[e]<<8)+t[e+1]}function s(t,e){return(t[e]<<24)+(t[e+1]<<16)+(t[e+2]<<8)+t[e+3]}function w(t,e,s){return String.fromCharCode.apply(null,t.slice(e,e+s))}function d(t,e){var s,a;for(s=0,l=1;128&(a=t[e]);)s=(s<<7)+(127&a),++l,++e;return(s<<7)+a}function a(t,e,s,a){var n,i,r=s[a];switch(l=1,0==(128&r)&&(r=c,l=0),240&(c=r)){case 192:case 208:t.ev.push({t:e,m:[r,s[a+l]]}),l+=1;break;case 240:switch(r){case 240:case 247:var o=d(s,a+1);u=1+l;var h=Array.from(s.slice(a+u,a+u+o));h.unshift(240),t.ev.push({t:e,m:h}),l+=o+1;break;case 255:o=d(s,a+2);switch(u=2+l,l=o+l+2,s[a+1]){case 2:t.copyright+=w(s,a+u,l-3);break;case 1:case 3:case 4:case 9:t.text=w(s,a+u,l-u);break;case 47:return 1;case 81:var v=Math.floor(6e7/(((n=s)[i=a+3]<<16)+(n[i+1]<<8)+n[i+2]));t.ev.push({t:e,m:[65361,v]})}}break;default:t.ev.push({t:e,m:[r,s[a+l],s[a+l+1]]}),l+=2}return 0}this.stopMIDI();var n=new Uint8Array(t),l=0,u=0,c=144,i=0,r=n.slice(0,4);if("77,84,104,100"==r.toString()){var o=s(n,4),h=(e(n,8),e(n,10));this.maxTick=0;var v=4*e(n,12);i=o+8,this.song={copyright:"",text:"",tempo:120,timebase:v,ev:[]};for(var g=0;g<h;++g){if(r=n.slice(i,i+4),o=s(n,i+4),"77,84,114,107"==r.toString()){var m=0,f=0;for(this.notetab.length=0;;){m+=d(n,i+8+f),f+=l;var p=a(this.song,m,n,i+8+f);if(f+=l,p)break}m>this.maxTick&&(this.maxTick=m)}i+=o+8}this.song.ev.sort(function(t,e){return t.t-e.t}),this.reset(),this.locateMIDI(0)}},setQuality:function(t){var e;for(null!=t&&(this.quality=t),e=0;e<128;++e)this.setTimbre(0,e,this.program0[e]);for(e=0;e<this.drummap0.length;++e)this.setTimbre(1,e+35,this.drummap0[e]);if(this.quality){for(e=0;e<this.program1.length;++e)this.setTimbre(0,e,this.program1[e]);for(e=0;e<this.drummap.length;++e)this.drummap1[e]&&this.setTimbre(1,e+35,this.drummap1[e])}},setTimbre:function(t,e,s){var a={g:0,w:"sine",t:1,f:0,v:.5,a:0,h:.01,d:.01,s:0,r:.05,p:1,q:1,k:0};function n(t){for(e=0;e<t.length;++e)for(i in a)t[e].hasOwnProperty(i)&&void 0!==t[e][i]||(t[e][i]=a[i]);return t}t&&35<=e&&e<=81&&(this.drummap[e-35].p=n(s)),0==t&&0<=e&&e<=127&&(this.program[e].p=n(s))},_pruneNote:function(t){for(var e=t.o.length-1;0<=e;--e){if(t.o[e].frequency)try{this.chmod[t.ch].disconnect(t.o[e].detune)}catch(t){}t.o[e].disconnect(),t.o[e].frequency?t.o[e].frequency.cancelScheduledValues(0):t.o[e].playbackRate.cancelScheduledValues(0),t.o[e].stop(0)}for(e=t.g.length-1;0<=e;--e)t.g[e].disconnect(),t.g[e].gain.cancelScheduledValues(0)},_limitVoices:function(t,e){this.notetab.sort(function(t,e){return t.f!=e.f?t.f-e.f:t.e!=e.e?e.e-t.e:e.t-t.t});for(var s=this.notetab.length-1;0<=s;--s){var a=this.notetab[s];(this.actx.currentTime>a.e||s>=this.voices-1)&&(this._pruneNote(a),this.notetab.splice(s,1))}},_note:function(t,e,s,a,n){var i,r,o,h,v=[],w=[],d=[],l=[],u=[],c=440*Math.pow(2,(s-69)/12);for(this._limitVoices(e,s),i=0;i<n.length;++i){var g=t+(h=n[i]).a+h.h;switch(0==h.g?(r=this.chvol[e],o=a*a/16384,l[i]=c*h.t+h.f):10<h.g?(r=w[h.g-11].gain,o=1,l[i]=l[h.g-11]*h.t+h.f):(o=v[h.g-1].frequency?(r=v[h.g-1].frequency,l[h.g-1]):(r=v[h.g-1].playbackRate,l[h.g-1]/440),l[i]=l[h.g-1]*h.t+h.f),h.w[0]){case"n":v[i]=this.actx.createBufferSource(),v[i].buffer=this.noiseBuf[h.w],v[i].loop=!0,v[i].playbackRate.value=l[i]/440,1!=h.p&&this._setParamTarget(v[i].playbackRate,l[i]/440*h.p,t,h.q);break;default:v[i]=this.actx.createOscillator(),v[i].frequency.value=l[i],1!=h.p&&this._setParamTarget(v[i].frequency,l[i]*h.p,t,h.q),"w"==h.w[0]?v[i].setPeriodicWave(this.wave[h.w]):v[i].type=h.w,this.chmod[e].connect(v[i].detune),v[i].detune.value=this.bend[e]}w[i]=this.actx.createGain(),u[i]=h.r,v[i].connect(w[i]),w[i].connect(r),d[i]=o*h.v,h.k&&(d[i]*=Math.pow(2,(s-60)/12*h.k)),h.a?(w[i].gain.value=0,w[i].gain.setValueAtTime(0,t),w[i].gain.linearRampToValueAtTime(d[i],t+h.a)):w[i].gain.setValueAtTime(d[i],t),this._setParamTarget(w[i].gain,h.s*d[i],g,h.d),v[i].start(t),this.rhythm[e]&&v[i].stop(t+n[0].d*this.releaseRatio)}this.rhythm[e]||this.notetab.push({t:t,e:99999,ch:e,n:s,o:v,g:w,t2:t+h.a,v:d,r:u,f:0})},_setParamTarget:function(t,e,s,a){0!=a?t.setTargetAtTime(e,s,a):t.setValueAtTime(e,s)},_releaseNote:function(t,e){if(9!=t.ch)for(var s=t.g.length-1;0<=s;--s)t.g[s].gain.cancelScheduledValues(e),e==t.t2?t.g[s].gain.setValueAtTime(t.v[s],e):e<t.t2&&t.g[s].gain.setValueAtTime(t.v[s]*(e-t.t)/(t.t2-t.t),e),this._setParamTarget(t.g[s].gain,0,e,t.r[s]);t.e=e+t.r[0]*this.releaseRatio,t.f=1},setModulation:function(t,e,s){this.chmod[t].gain.setValueAtTime(100*e/127,this._tsConv(s))},setChVol:function(t,e,s){this.vol[t]=3*e*e/16129,this.chvol[t].gain.setValueAtTime(this.vol[t]*this.ex[t],this._tsConv(s))},setPan:function(t,e,s){this.chpan[t]&&this.chpan[t].pan.setValueAtTime((e-64)/64,this._tsConv(s))},setExpression:function(t,e,s){this.ex[t]=e*e/16129,this.chvol[t].gain.setValueAtTime(this.vol[t]*this.ex[t],this._tsConv(s))},setSustain:function(t,e,s){if(this.sustain[t]=e,s=this._tsConv(s),e<64)for(var a=this.notetab.length-1;0<=a;--a){var n=this.notetab[a];s>=n.t&&n.ch==t&&1==n.f&&this._releaseNote(n,s)}},allSoundOff:function(t){for(var e=this.notetab.length-1;0<=e;--e){var s=this.notetab[e];s.ch==t&&(this._pruneNote(s),this.notetab.splice(e,1))}},resetAllControllers:function(t){this.bend[t]=0,this.ex[t]=1,this.rpnidx[t]=16383,this.sustain[t]=0,this.chvol[t]&&(this.chvol[t].gain.value=this.vol[t]*this.ex[t],this.chmod[t].gain.value=0)},setBendRange:function(t,e){this.brange[t]=e},setProgram:function(t,e){this.debug&&console.log("Pg("+t+")="+e),this.pg[t]=e},setBend:function(t,e,s){s=this._tsConv(s);var a=100*this.brange[t]/127;this.bend[t]=(e-8192)*a/8192;for(var n=this.notetab.length-1;0<=n;--n){var i=this.notetab[n];if(i.ch==t)for(var r=i.o.length-1;0<=r;--r)i.o[r].frequency&&i.o[r].detune.setValueAtTime(this.bend[t],s)}},noteOn:function(t,e,s,a){0!=s?(a=this._tsConv(a),this.rhythm[t]?35<=e&&e<=81&&this._note(a,t,e,s,this.drummap[e-35].p):this._note(a,t,e,s,this.program[this.pg[t]].p)):this.noteOff(t,e,a)},noteOff:function(t,e,s){if(!this.rhythm[t]){s=this._tsConv(s);for(var a=this.notetab.length-1;0<=a;--a){var n=this.notetab[a];s>=n.t&&n.ch==t&&n.n==e&&0==n.f&&(n.f=1,this.sustain[t]<64&&this._releaseNote(n,s))}}},_tsConv:function(t){return null==t||t<=0?(t=0,this.actx&&(t=this.actx.currentTime)):this.tsmode&&(t=.001*t-this.tsdiff),t},setTsMode:function(t){this.tsmode=t},send:function(t,e){var s=15&t[0],a=-16&t[0];if(!(a<128||256<=a))switch("suspended"==this.audioContext.state&&this.audioContext.resume(),a){case 176:switch(t[1]){case 1:this.setModulation(s,t[2],e);break;case 7:this.setChVol(s,t[2],e);break;case 10:this.setPan(s,t[2],e);break;case 11:this.setExpression(s,t[2],e);break;case 64:this.setSustain(s,t[2],e);break;case 98:case 98:this.rpnidx[s]=16383;break;case 100:this.rpnidx[s]=896&this.rpnidx[s]|t[2];break;case 101:this.rpnidx[s]=127&this.rpnidx[s]|t[2]<<7;break;case 6:0==this.rpnidx[s]&&(this.brange[s]=(t[2]<<7)+(127&this.brange[s]));break;case 38:0==this.rpnidx[s]&&(this.brange[s]=896&this.brange[s]|t[2]);break;case 120:case 123:case 124:case 125:case 126:case 127:this.allSoundOff(s);break;case 121:this.resetAllControllers(s)}break;case 192:this.setProgram(s,t[1]);break;case 224:this.setBend(s,t[1]+(t[2]<<7),e);break;case 144:this.noteOn(s,t[1],t[2],e);break;case 128:this.noteOff(s,t[1],e);break;case 240:if(254!=t[0]&&this.debug){for(var n=[],i=0;i<t.length;++i)n.push(t[i].toString(16));console.log(n)}if(65==t[1]&&16==t[2]&&66==t[3]&&18==t[4]&&64==t[5]&&16==(240&t[6])&&21==t[7]){s=[9,0,1,2,3,4,5,6,7,8,10,11,12,13,14,15][15&t[6]];this.rhythm[s]=t[8]}}},_createWave:function(t){for(var e=new Float32Array(t.length),s=new Float32Array(t.length),a=1;a<t.length;++a)e[a]=t[a];return this.actx.createPeriodicWave(s,e)},getAudioContext:function(){return this.actx},setAudioContext:function(t,e){this.audioContext=this.actx=t,(this.dest=e)||(this.dest=t.destination),this.tsdiff=.001*performance.now()-this.actx.currentTime,console.log("TSDiff:"+this.tsdiff),this.out=this.actx.createGain(),this.comp=this.actx.createDynamicsCompressor();var s=.5*this.actx.sampleRate|0;this.convBuf=this.actx.createBuffer(2,s,this.actx.sampleRate),this.noiseBuf={},this.noiseBuf.n0=this.actx.createBuffer(1,s,this.actx.sampleRate),this.noiseBuf.n1=this.actx.createBuffer(1,s,this.actx.sampleRate);for(var a=this.convBuf.getChannelData(0),n=this.convBuf.getChannelData(1),i=this.noiseBuf.n0.getChannelData(0),r=this.noiseBuf.n1.getChannelData(0),o=0;o<s;++o)o/s<Math.random()&&(a[o]=Math.exp(-3*o/s)*(Math.random()-.5)*.5,n[o]=Math.exp(-3*o/s)*(Math.random()-.5)*.5),i[o]=2*Math.random()-1;for(var h=0;h<64;++h){var v=10*Math.random()+1,w=10*Math.random()+1;for(o=0;o<s;++o){var d=Math.sin(o/s*2*Math.PI*440*v)*Math.sin(o/s*2*Math.PI*440*w);r[o]+=d/8}}for(this.useReverb&&(this.conv=this.actx.createConvolver(),this.conv.buffer=this.convBuf,this.rev=this.actx.createGain(),this.rev.gain.value=this.reverbLev,this.out.connect(this.conv),this.conv.connect(this.rev),this.rev.connect(this.comp)),this.setMasterVol(),this.out.connect(this.comp),this.comp.connect(this.dest),this.chvol=[],this.chmod=[],this.chpan=[],this.wave={w9999:this._createWave("w9999")},this.lfo=this.actx.createOscillator(),this.lfo.frequency.value=5,this.lfo.start(0),o=0;o<16;++o)this.chvol[o]=this.actx.createGain(),this.actx.createStereoPanner?(this.chpan[o]=this.actx.createStereoPanner(),this.chvol[o].connect(this.chpan[o]),this.chpan[o].connect(this.out)):(this.chpan[o]=null,this.chvol[o].connect(this.out)),this.chmod[o]=this.actx.createGain(),this.lfo.connect(this.chmod[o]),this.pg[o]=0,this.resetAllControllers(o);this.setReverbLev(),this.reset(),this.send([144,60,1]),this.send([144,60,0])}},this.sy.properties)this[i]=this.sy.properties[i].value;this.setQuality(1),t&&(null!=t.useReverb&&(this.useReverb=t.useReverb),null!=t.quality&&this.setQuality(t.quality),null!=t.voices&&this.setVoices(t.voices)),this.ready()}});