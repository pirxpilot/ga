var dataset = require('dataset');

module.exports = analytics;

function loadScript(scriptUrl, async) {
  var js, fjs;

  js = document.createElement('script');
  js.src = scriptUrl;
  if (async) {
    js.async = true;
  }
  fjs = document.getElementsByTagName('script')[0];
  fjs.parentNode.insertBefore(js, fjs);
}

function gaScriptUrl() {
  return ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
    '.google-analytics.com/ga.js';
}

function analytics(propertyId) {
  if (!propertyId) {
    propertyId = dataset(document.body, 'gaPropertyId');
    if (!propertyId) {
      return;
    }
  }

  var gaq = window._gaq = window._gaq || [];
  gaq.push(['_setAccount', propertyId]);
  gaq.push(['_trackPageview']);

  loadScript(gaScriptUrl(), true);
}
