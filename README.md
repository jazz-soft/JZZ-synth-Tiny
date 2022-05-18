# JZZ-synth-Tiny

[![npm](https://img.shields.io/npm/v/jzz-synth-tiny.svg)](https://www.npmjs.com/package/jzz-synth-tiny)
[![npm](https://img.shields.io/npm/dt/jzz-synth-tiny.svg)](https://www.npmjs.com/package/jzz-synth-tiny)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/jzz-synth-tiny/badge)](https://www.jsdelivr.com/package/npm/jzz-synth-tiny)
[![build](https://github.com/jazz-soft/JZZ-synth-Tiny/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/JZZ-synth-Tiny/actions)
[![Coverage Status](https://coveralls.io/repos/github/jazz-soft/JZZ-synth-Tiny/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-synth-Tiny?branch=master)
[![Try jzz-synth-tiny on RunKit](https://badge.runkitcdn.com/jzz-synth-tiny.svg)](https://npm.runkit.com/jzz-synth-tiny)

Tiny Web-Audio GM Synthesizer 
([g200kg/webaudio-tinysynth](https://github.com/g200kg/webaudio-tinysynth))
wrapped for [JZZ.js](https://github.com/jazz-soft/JZZ)

Includes all General MIDI instruments, plus, you can load your own sounds. 

Please check the [demo](https://jazz-soft.github.io/modules/tiny/index.html)...

## Install

`npm install jzz-synth-tiny`  
or `yarn add jzz-synth-tiny`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-synth-Tiny)

## Usage

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.synth.Tiny.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-synth-tiny"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-synth-tiny"></script>
//...
```

##### CommonJS

```js
var JZZ = require('jzz');
require('jzz-synth-tiny')(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.synth.Tiny'], function(JZZ, dummy) {
  // ...
});
```

## API

##### Play directly

```js
JZZ.synth.Tiny().noteOn(0, 'C5', 127)
   .wait(500).noteOn(0, 'E5', 127)
   .wait(500).noteOn(0, 'G5', 127)
   .wait(500).noteOff(0, 'C5').noteOff(0, 'E5').noteOff(0, 'G5');
```

##### Register as MIDI port

```js
JZZ.synth.Tiny.register('Web Audio');

JZZ().openMidiOut('Web Audio').noteOn(0, 'C5', 127)
   .wait(500).noteOn(0, 'E5', 127)
   .wait(500).noteOn(0, 'G5', 127)
   .wait(500).noteOff(0, 'C5').noteOff(0, 'E5').noteOff(0, 'G5');
```
To make vitual port visible by Web MIDI API, please check the instructions at https://github.com/jazz-soft/JZZ#virtual-midi-ports

##### Get/Set sound

```js
var synth = JZZ.synth.Tiny();
var tuba = synth.getSynth(58); // tuba
var drum = synth.getSynth(36, true); // bass drum
synth.setSynth(0, tuba); // set tuba to program 0 (it was piano originally);
synth.setSynth(35, drum, true); // set bass drum to percussion instrument 35;
```

See more details at https://github.com/g200kg/webaudio-tinysynth#timbre-object-structure

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
