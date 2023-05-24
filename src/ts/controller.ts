// + Imports +

// Base
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Custom
import loader from './utils/loader';
import * as model from './model';
import view from './views/view';

// // + Declare +
// declare var $: any;
// declare var gsap: any;

// + Functions +

// Main
const main = function () {
  // Initialize model
  model.init();

  // Initialize view
  view.init(model.state);

  // Test
  controlTest();
};

// Control test
const controlTest = async function () {
  try {
    // 1st view test
    view.consoleLog('loading...');

    // Model test
    await model.testData();

    // Log test data
    console.log(model.state.data);

    // 2nd view test
    view.consoleLog();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// + Initialize +
const init = function () {
  main();
};
loader(init);
