// + Imports +

// Base

// Custom
import * as config from '../config.js';

// + Classes +

// Base WebflowView
class WebflowView {
  // Initialize
  init(stateData) {
    // Values
    const _this = this;

    // Elements
    this.#elements = stateData.elements;
  }

  // Define
  #elements;

  // Event listeners
  addHandler(handler, events = ['load'], object = window) {
    events.forEach(event => object.addEventListener(event, handler));
  }

  // Values
  string = 'hello, world!';

  // Functions

  // Test
  consoleLog(message = this.string) {
    console.log(this.#elements.body, message);
  }
}

// + Exports +

// WebflowView object
export default new WebflowView();
