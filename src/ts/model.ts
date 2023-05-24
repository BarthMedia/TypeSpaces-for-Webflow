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
export const state = new (class {
  data: {
    elements: object;
    styles: object;
    handlers: { getIpData: async };
  };
})();
state.data = { elements: {}, styles: {}, handlers: { getData: () => {} } };

// + Functions +

// Initialize
export const init = function () {
  // Values
  const stateData = state.data;

  // - Set -

  // Standard
  stateData.elements = returnElements();
  stateData.styles = returnStyles(stateData.elements);

  // Custom

  // - Handlers -

  // Get data
  stateData.handlers.getData = async function () {
    try {
      // Do something

      // Return
      return true

      // Log
    } catch (err) {
      throw err;
    }
  };
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
