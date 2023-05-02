// + Imports +

// Base
import { async } from 'regenerator-runtime';

// Custom
import * as config from './config.js';
import returnElements from './utils/returnElements.js';
import { getJson } from './helper';

// + Objects +

// State
export const state = {
  data: {},
};

// + Functions +

// Initialize
export const init = function () {
  // Values
  const stateData = state.data;

  // Set
  stateData.elements = returnElements();
};

// Test data
export const testData = async function () {
  try {
    // Values
    const data = await getJson(config.API_URL);

    // Update
    state.data = data;
  } catch (err) {
    throw err;
  }
};
