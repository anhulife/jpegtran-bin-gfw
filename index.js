var osFilterObj = require('os-filter-obj');
var path = require('path');

var binPath = osFilterObj([
  {path: 'osx/jpegtran', os: 'darwin'},
  {path: 'linux/x86/jpegtran', os: 'linux', arch: 'x86'},
  {path: 'linux/x64/jpegtran', os: 'linux', arch: 'x64'},
  {path: 'freebsd/x86/jpegtran', os: 'freebsd', arch: 'x86'},
  {path: 'freebsd/x64/jpegtran', os: 'freebsd', arch: 'x64'},
  {path: 'sunos/x86/jpegtran', os: 'sunos', arch: 'x86'},
  {path: 'sunos/x64/jpegtran', os: 'sunos', arch: 'x64'},
  {path: 'win/x86/jpegtran.exe', os: 'win32', arch: 'x86'},
  {path: 'win/x64/jpegtran.exe', os: 'win32', arch: 'x64'}
]);

module.exports = path.join(__dirname, 'vendor', binPath[0].path);
