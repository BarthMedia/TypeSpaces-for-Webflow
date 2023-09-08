// + Imports +

// Base
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Custom
import * as utils from './helper/controller/utils';
import * as model from './model';
import view from './view';

// + Declare +
declare global {
  var $: any;
  var ls: any;
  var gsap: any;
}

// + Functions +

// Main
const main = async function () {
  // Initialize model
  await model.init();

  // Initialize view
  view(model.state);
};

// + Initialize +
utils.load(
  main,
  {
    type: typeof gsap,
    src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js',
  },
  {
    type: typeof ls,
    src: 'https://cdn.jsdelivr.net/npm/localstorage-slim',
  }
);
