Package.describe({
  name: 'ped:math',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// Package.onUse(function(api) {
//   api.versionsFrom('1.2.1');
//   api.use('ecmascript');
//   api.addFiles('math.js');
// });

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('ped:math');
//   api.addFiles('math-tests.js');
// });



Package.on_use(function(api) {
  // api.versionsFrom('1.2.1');
  // api.use('ecmascript');
  api.add_files("mathfunction.js", "client");
  api.export("racine", "client");
  api.export("puissance", "client");
  api.export("factorielle", "client");
});