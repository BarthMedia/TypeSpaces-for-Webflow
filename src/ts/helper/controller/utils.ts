// + Imports +

// Custom
import * as config from '../../config';

// + Functions +

// - Load everything -

// Define
type Args = {
  type: string;
  src: string;
};

// Function
export const load = (callback: () => void, ...args: Args[]) => {
  // Loop
  function argsLoop(i: number) {
    // Guard
    if (i === args.length) {
      awaitDom();
      return;
    }

    // Logic
    if (args[i].type === 'undefined')
      scriptLoader(args[i].src, () => argsLoop(i + 1));
    else argsLoop(i + 1);
  }
  argsLoop(0);

  // Check if DOM is already loaded
  function awaitDom() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }
};

// - Script loader -
export const scriptLoader = (src: string, callback = () => {}) => {
  const promise = new Promise((resolve, reject) => {
    const el = document.createElement('script');
    document.head.appendChild(el);
    el.onload = resolve;
    el.onerror = reject;
    el.async = true;
    el.src = src;
  });

  promise.then(callback);
};
