/* global Package, Npm */

Package.describe({
  name: 'npvn:tabular',
  summary: 'Temporary fix for aldeed:tabular (See issue #210)',
  version: '1.4.2',
  git: 'https://github.com/npvn/meteor-tabular.git'
});

Npm.depends({
  datatables: '1.10.7'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['check', 'underscore', 'mongo', 'blaze', 'templating', 'reactive-var', 'tracker']);

  // jquery is a weak reference in case you want to use a different package or
  // pull it in another way, but regardless you need to make sure it is loaded
  // before any tabular tables are rendered
  api.use(['jquery'], 'client', {weak: true});

  api.use(['meteorhacks:subs-manager@1.2.0'], ['client', 'server'], {weak: true});

  api.export('Tabular');

  api.addFiles('common.js');
  api.addFiles('server/tabular.js', 'server');
  api.addFiles([
    '.npm/package/node_modules/datatables/media/js/jquery.dataTables.js',
    'client/lib/dataTables.bootstrap.js',
    'client/lib/dataTables.bootstrap.css',
    'client/tabular.html',
    'client/util.js',
    'client/tableRecords.js',
    'client/tableInit.js',
    'client/pubSelector.js',
    'client/tabular.js',
    // images
    'images/sort_asc.png',
    'images/sort_asc_disabled.png',
    'images/sort_both.png',
    'images/sort_desc.png',
    'images/sort_desc_disabled.png'
  ], 'client');
});
