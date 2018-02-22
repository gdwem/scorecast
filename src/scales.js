//Contains scales object - used in patterns

export const scales = {

  ionian: ["C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5"],
  dorian: ["D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5"],
  phrygian: ["E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5"],
  lydian: ["F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5"],
  mixolydian: ["G4", "A5", "B5", "C5", "D5", "E5", "F5", "G5"],
  aeolian: ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "A6"],
  locrian: ["B5", "C5", "D5", "E5", "F5", "G5", "A6", "B6"],

  getSampleScale() {
    for (var key in scales) {
      const sampleScale = document.getElementById('scaleSelectSample');
      const currentSampleScale = sampleScale.options[scaleSelectSample.selectedIndex].value;
      if (key ===  currentSampleScale) {
        return scales[key];
      }
    }
  },

  getSynthOneScale() {
    for (var key in scales) {
      const synthOneScale = document.getElementById('scaleSelectSynthOne');
      const currentSynthOneScale = synthOneScale.options[scaleSelectSynthOne.selectedIndex].value;
      if (key ===  currentSynthOneScale) {
        return scales[key];
      }
    }
  },

  getSynthTwoScale() {
    for (var key in scales) {
      const synthTwoScale = document.getElementById('scaleSelectSynthTwo');
      const currentSynthTwoScale = synthTwoScale.options[scaleSelectSynthTwo.selectedIndex].value;
      if (key ===  currentSynthTwoScale) {
        return scales[key];
      }
    }
  }

};
