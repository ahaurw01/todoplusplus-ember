var App = require('application');
window.App = App;

// Register templates on the Ember.TEMPLATES hash
window.require.list().forEach(function (name) {
  if (/^templates\//.test(name)) {
    require(name);
  }
});

require('models');
// require('controllers');
// require('views');
// require('components');
require('routes');