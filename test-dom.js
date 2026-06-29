const { JSDOM } = require('jsdom');
JSDOM.fromURL('http://localhost:4200', {
  runScripts: "dangerously",
  resources: "usable"
}).then(dom => {
  setTimeout(() => {
    console.log("DOM body:", dom.window.document.body.innerHTML.substring(0, 500));
    console.log("Errors:", dom.window._errors);
  }, 2000);
});
