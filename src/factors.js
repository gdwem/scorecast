// Factors used to translate weather data to values readable by slider controls

// temperature, equal to delay speed

const tempRange = 25;

const delayMax = parseFloat(document.getElementById('delaySpeedSample').max);
export const delayMin = parseFloat(document.getElementById('delaySpeedSample').min);


// rain, equal to wet amount of reverb

const rainRange = 25;

const reverbWetMax = parseFloat(document.getElementById('reverbWetSample').max);
export const reverbWetMin = parseFloat(document.getElementById('reverbWetSample').min);


// wind, equal to playback speed of pattern

const windRange = 40;

const playSpeedMax = parseFloat(document.getElementById('playbackSpeedSample').max);
export const playSpeedMin = parseFloat(document.getElementById('playbackSpeedSample').min);


export const tempFactor = (delayMax - delayMin) / tempRange;
export const rainFactor = (reverbWetMax - reverbWetMin) / rainRange;
export const windFactor = (playSpeedMax - playSpeedMin) / windRange;
