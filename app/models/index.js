var App = require('application');

// Register all of our models with the application
App.register('model:product', require('./product'), {singleton: false});
App.register('model:wishlist', require('./wishlist'), {singleton: false});
App.register('model:customer', require('./customer'), {singleton: false});
