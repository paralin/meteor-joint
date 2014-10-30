Package.describe({
  summary: "Library for visualization and interaction with diagrams and graphs.",
  version: "0.9.2",
  name: "kidovate:joint",
  git: "https://github.com/paralin/meteor-joint"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.3.1');
  api.use('backbone', 'client');
  api.use('stevezhu:lodash@1.0.2', 'client');
  api.add_files(['joint.js', 'joint.css'], 'client');
});

Package.onTest(function (api) {
});
