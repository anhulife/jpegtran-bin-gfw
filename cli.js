#!/usr/bin/env node

var spawn = require('child_process').spawn;
var jpegtran = require('./');
var input = process.argv.slice(2);

spawn(jpegtran, input, {stdio: 'inherit'})
  .on('exit', process.exit);
