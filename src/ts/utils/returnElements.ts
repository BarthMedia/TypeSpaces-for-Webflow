// + Imports +
import * as config from '../config';

// + Exports +
export default function () {
  // Elments
  const body = document.querySelector(config.BODY_SELECTOR);

  // - Define return object -
  const obj = {
    body: body,
  };

  // Log
  // console.log(obj);

  // Return
  return obj;
}
