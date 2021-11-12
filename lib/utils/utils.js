'use strict';

function camelcase(str) {
  if (str.length === 1) {
    return str.toLowerCase();
  }
  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  return str.replace(/[\W_]+(\w|$)/g, function(_, ch) {
    return ch.toUpperCase();
  });
}

var utils = {};

function loadUtil(name, alias) {
  if(!alias) {
    alias = camelcase(name)
  }
  utils[alias] = require(name);
}

// Array utils
loadUtil('array-sort', 'sortBy');
loadUtil('arr-flatten', 'flatten');

// JavaScript language utils
loadUtil('kind-of', 'typeOf');

// Number utils
loadUtil('is-even');
loadUtil('is-number');

// Object utils
loadUtil('./createFrame.js', 'createFrame');
loadUtil('get-object');
loadUtil('get-value', 'get');
loadUtil('for-own');

// Path utils
loadUtil('relative');

/**
 * Expose `utils`
 */

module.exports = utils;
