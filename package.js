Package.describe({
  name: 'mhidou:blaze-timers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'setTimeout and setInterval manager for blaze template',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('blaze@2.3.2');
  api.use('templating@1.3.2');
  api.use('underscore');
  api.addFiles('blaze-timers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mhidou:blaze-timers');
  api.mainModule('blaze-timers-tests.js', 'client');
});
