// + Imports +

// Base
import { async } from 'regenerator-runtime';

// Custom
import * as config from './config';
import * as utils from './helper/model/utils';

// + Objects +

// State
export const state: any = {};

// + Functions +

// Initialize
export const init = async function () {
  try {
    // Await test data
    state.data = await utils.getJson(config.API_URL);
  } catch (err) {
    throw 'model.ts -> init: ' + err;
  }
};
