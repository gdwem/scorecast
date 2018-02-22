//import ToneJS modules

import Tone from '../node_modules/tone/Tone/core/Tone.js';
import Pattern from '../node_modules/tone/Tone/event/Pattern.js';
import Sampler from '../node_modules/tone/Tone/instrument/Sampler.js';
import Synth from '../node_modules/tone/Tone/instrument/Synth.js';
import Transport from '../node_modules/tone/Tone/core/Transport.js';
import FeedbackDelay from '../node_modules/tone/Tone/effect/FeedbackDelay.js';
import Freeverb from '../node_modules/tone/Tone/effect/Freeverb.js';

//import custom modules

import {scales} from './scales.js';
import forecast from './forecast.js';
import {truncate} from './truncation.js';
import {tempFactor, windFactor, rainFactor, delayMin, reverbWetMin, playSpeedMin} from './factors.js';

//import samples

import sample1 from './Samples/Ahh.wav';
import sample2 from './Samples/Eeh.wav';
import sample3 from './Samples/Oh.wav';
import sample4 from './Samples/Ooh.wav';


//execute search

document.getElementById('search-location').addEventListener("click", function() {
  forecast.getCurrent();
  //check if values are imported into app.js
  console.log(temp.value);
  console.log(rain.value);
  console.log(wind.value);
});

//Send data to FX controls

document.getElementById('showData').addEventListener("click", function() {
  document.getElementById("delaySpeedSample").value = ((truncate.tempValue(temp.value) * tempFactor) + delayMin).toString();
  document.getElementById("reverbWetSample").value = ((truncate.rainValue(rain.value) * rainFactor) + reverbWetMin).toString();
  document.getElementById("playbackSpeedSample").value = ((truncate.windValue(wind.value) * windFactor) + playSpeedMin).toString();
});

//Start global transport

Tone.Transport.start();

//initialize FX

const feedbackDelay = new Tone.FeedbackDelay("2t", 0.5).toMaster();
const freeverb = new Tone.Freeverb().toMaster();

//Sampler one

//declare samples object with getSample method

const samples = {
  sample1: sample1,
  sample2: sample2,
  sample3: sample3,
  sample4: sample4,

  getSample() {
    for (var key in samples) {
      const sample = document.getElementById('sampleSelect');
      const currentSample = sample.options[sampleSelect.selectedIndex].value;
      if (key ===  currentSample) {
        return samples[key];
      }
    }
  }
};

//initialise sampler

const sampler = new Tone.Sampler({
  "C5" : samples.getSample()
}, {
  "release" : 1
});


// Connect to delay and reverb

sampler.connect(feedbackDelay);
sampler.connect(freeverb);

// Set pattern

const pattern = new Tone.Pattern(function(time, note){
  sampler.triggerAttackRelease(note, 0.50);
}, scales.getSampleScale(), "random");

//Controls for start/stop pattern, scale, pattern playback speed and probability

document.getElementById("scaleSelectSample").addEventListener("change", function(){
  pattern.values = scales.getSampleScale();
});

document.getElementById('sampleSelect').addEventListener("change", function(){
  sampler.add("C5", samples.getSample());
});

document.getElementById("playSample").addEventListener("click", function(){
  pattern.start(0);
});

document.getElementById("stopSample").addEventListener("click", function(){
  pattern.stop();
});

document.getElementById("playbackSpeedSample").addEventListener("change", function(){
  pattern.playbackRate = (playbackSpeedSample.value).toString();
});

document.getElementById("noteProbabilitySample").addEventListener("change", function(){
  pattern.probability = (noteProbabilitySample.value).toString();
});

document.getElementById("volumeSample").addEventListener("change", function(){
  sampler.volume.value = (volumeSample.value).toString();
});


// Synth one

const synthOne = new Tone.Synth().toMaster();
synthOne.oscillator.type = "sine"

// Connect to delay and reverb

synthOne.connect(feedbackDelay);
synthOne.connect(freeverb);

// Set pattern

const patternSynthOne = new Tone.Pattern(function(time, note){
  synthOne.triggerAttackRelease(note, 0.50);
}, scales.getSynthOneScale(), "random");


//Controls for start/stop pattern, scale, osc shape, pattern playback speed and probability

document.getElementById("playSynthOne").addEventListener("click", function(){
  patternSynthOne.start(0);
});

document.getElementById("stopSynthOne").addEventListener("click", function(){
  patternSynthOne.stop();
});

document.getElementById("oscillatorShapeSynthOne").addEventListener("change", function(){
  synthOne.oscillator.type = oscillatorShapeSynthOne.options[oscillatorShapeSynthOne.selectedIndex].value;
});

document.getElementById("scaleSelectSynthOne").addEventListener("change", function(){
  pattern.values = scales.getSynthOneScale();
});

document.getElementById("playbackSpeedSynthOne").addEventListener("change", function(){
  patternSynthOne.playbackRate = (playbackSpeedSynthOne.value).toString();
});

document.getElementById("noteProbabilitySynthOne").addEventListener("change", function(){
  patternSynthOne.probability = (noteProbabilitySynthOne.value).toString();
});

document.getElementById("volumeSynthOne").addEventListener("change", function(){
  synthOne.volume.value = (volumeSynthOne.value).toString();
});


// Synth two

const synthTwo = new Tone.Synth().toMaster();
synthTwo.oscillator.type = "sine"

// Connect to delay and reverb

synthTwo.connect(feedbackDelay);
synthTwo.connect(freeverb);

// Set pattern

const patternSynthTwo = new Tone.Pattern(function(time, note){
  synthTwo.triggerAttackRelease(note, 0.50);
}, scales.getSynthTwoScale(), "random");


//Controls for start/stop pattern, scale, osc shape, pattern playback speed and probability

document.getElementById("playSynthTwo").addEventListener("click", function(){
  patternSynthTwo.start(0);
});

document.getElementById("stopSynthTwo").addEventListener("click", function(){
  patternSynthTwo.stop();
});

document.getElementById("oscillatorShapeSynthTwo").addEventListener("change", function(){
  synthTwo.oscillator.type = oscillatorShapeSynthTwo.options[oscillatorShapeSynthTwo.selectedIndex].value;
});

document.getElementById("scaleSelectSynthTwo").addEventListener("change", function(){
  pattern.values = scales.getSynthTwoScale();
});

document.getElementById("playbackSpeedSynthTwo").addEventListener("change", function(){
  patternSynthTwo.playbackRate = (playbackSpeedSynthTwo.value).toString();
});

document.getElementById("noteProbabilitySynthTwo").addEventListener("change", function(){
  patternSynthTwo.probability = (noteProbabilitySynthTwo.value).toString();
});

document.getElementById("volumeSynthTwo").addEventListener("change", function(){
  synthTwo.volume.value = (volumeSynthTwo.value).toString();
});


// FX section controls

document.getElementById("delaySpeedSample").addEventListener("change", function(){
  feedbackDelay.delayTime.value = delaySpeedSample.value;
});

document.getElementById("reverbSizeSample").addEventListener("change", function(){
  freeverb.roomSize.value = reverbSizeSample.value;
});

document.getElementById("reverbWetSample").addEventListener("change", function(){
  freeverb.wet.value = reverbWetSample.value;
});
