(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['vaccine-spotter-mn'] = factory(typeof this['vaccine-spotter-mn'] === 'undefined' ? {} : this['vaccine-spotter-mn']);
}(this, function (_) {
  'use strict';
  function main() {
  }
  main();
  return _;
}));
