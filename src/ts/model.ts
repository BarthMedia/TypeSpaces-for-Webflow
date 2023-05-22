// + Imports +

// Base
import { async } from 'regenerator-runtime';

// Custom
import * as config from './config';
import returnElements from './utils/returnElements';
import returnStyles from './utils/returnStyles';
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
  stateData['elements'] = returnElements();
  stateData['styles'] = returnStyles(stateData['elements']);
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