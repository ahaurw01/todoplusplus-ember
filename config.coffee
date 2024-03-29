exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/
      order:
        after: ['vendor/*']
    stylesheets:
      joinTo: 'stylesheets/app.css'
    templates:
      precompile: true
      root: 'templates/'
      defaultExtension: 'hbs'
      joinTo: 
        'javascripts/app.js': /^app/
