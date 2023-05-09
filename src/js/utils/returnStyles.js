// + Imports +
import * as config from '../config.js';

// + Exports +
export default function (elements) {
  // Elments
  const element = elements.body;

  // Values
  const obj = {
    successColor:
      element.getAttribute(config.SUCCESS_COLOR_ATTRIBUTE) ||
      config.SUCCESS_COLOR_DEFAULT,
  };

  // Log
  // console.log(obj);

  // Return
  return obj;
}
