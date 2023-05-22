// + Imports +

import { async } from 'regenerator-runtime';

// + Declare +
declare var Flip: any;
declare var gsap: any;

// + Load helper +

// Allows for loading other scripts
function scriptLoader(externalScript = 'foo.js', callback: () => void) {
  const scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    document.head.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = externalScript;
  });

  scriptPromise.then(callback);
}

// + Exports +

// Loader
export default function (handler: () => void) {
  'undefined' === typeof gsap
    ? scriptLoader(
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js',
        load2ndScript
      )
    : load2ndScript();

  function load2ndScript() {
    'undefined' === typeof Flip
      ? scriptLoader(
          'https://cdn.jsdelivr.net/gh/BarthMedia/js@main/Flip.min.js',
          register
        )
      : register();
  }

  function register() {
    // - Register -
    gsap.registerPlugin(Flip);

    // Fire callback
    handler();
  }
}
