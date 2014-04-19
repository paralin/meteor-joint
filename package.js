Package.describe({
  summary: "Library for visualization and interaction with diagrams and graphs."
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files(['joint.js', 'joint.css'], 'client');
});
