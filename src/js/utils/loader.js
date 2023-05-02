// + Imports +

// + Load helper +

// Allows for loading other scripts
jQuery.loadScript = function (url, callback) {
  jQuery.ajax({
    url: url,
    dataType: 'script',
    success: callback,
    async: true,
  });
};

// + Exports +

// Loader
export default function (handler) {
  'undefined' === typeof gsap
    ? $.loadScript(
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js',
        function () {
          load2ndScript();
        }
      )
    : load2ndScript();

  function load2ndScript() {
    'undefined' === 'undefined'
      ? $.loadScript(
          'https://cdn.jsdelivr.net/gh/BarthMedia/js@main/ScrollToPlugin.min.js',
          function () {
            register();
          }
        )
      : register();
  }

  function register() {
    // - Register -
    gsap.registerPlugin(ScrollToPlugin);

    // Fire callback
    handler();
  }
}
