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
  elements: object;
  styles: object;
  handlers: { getData: async };
  data: any;
})();
state.handlers = { getData: () => {} };

// + Functions +

// Initialize
export const init = function () {
  // - Set -

  // Standard
  state.elements = returnElements();
  state.styles = returnStyles(state.elements);

  // Custom

  // - Handlers -

  // Get data
  state.handlers.getData = async function () {
    try {
      // Do something

      // Return
      return true;

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
