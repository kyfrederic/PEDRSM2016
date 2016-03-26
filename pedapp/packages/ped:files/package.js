Package.describe({
  name: 'ped:files',
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
//   api.addFiles('files.js');
// });

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('ped:files');
//   api.addFiles('files-tests.js');
// });

Package.on_use(function(api) {
  // api.versionsFrom('1.2.1');
  // api.use('ecmascript');


  api.add_files("filesfunctions.js", "server");
  api.export("creerFichierEJS", "server");
  api.export("creerFichierJS", "server");
  api.export("creerFichierCSS", "server");
  api.export("listeFichiersEJS", "server");
  api.export("listeFichiersJS", "server");
  api.export("listeFichiersCSS", "server");
  api.export("ouvrirFichier", "server");
  api.export("sauvergarderFichier", "server");
});
