// Use this presets array inside your presetHandler
const presets = require('./presets');

const getPreset = (index) => {
  return presets[index] || null;
}

const createOrUpdateObject = (index, array) => {
  if (!presets[index]) {
    return;
  }
  presets[index] = array;
  return presets[index];
}

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
  
  if (method === 'GET') {
    const preset = getPreset(index);
    if (preset) {
      return [200, preset];
    } else {
      return [404];
    }
  } else if (method === 'PUT') {
    const newPreset = createOrUpdateObject(index, newPresetArray)
    if (newPreset) {
      return [200, newPreset]
    } else {
      return [404]
    }
  } else {
    return [400];
  }

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
