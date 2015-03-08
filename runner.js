#!/usr/bin/env node

require('babel/register');
var adventure = require('adventure');
var shop = adventure('static-server');

var problems = [
  'welcome',
  'create-project',
  'npm-init',
  'create-public',
  'configure-package-json',
  'add to git',
  'congrats'
];

problems.forEach(function(problem) {
  shop.add(problem, function() {
    return require(__dirname + '/problems/' + problem);
  });
});

shop.execute(process.argv.slice(2));


