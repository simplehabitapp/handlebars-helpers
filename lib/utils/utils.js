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

// Array utils
utils['sortBy'] = require('array-sort');
utils['flatten'] = require('arr-flatten');

// JavaScript language utils
utils['typeOf'] = require('kind-of');

// Number utils
utils[camelcase('is-even')] = require('is-even');
utils[camelcase('is-number')] = require('is-number');

// Object utils
utils['createFrame'] = require('./createFrame.js');
utils[camelcase('get-object')] = require('get-object');
utils['get'] = require('get-value');
utils[camelcase('for-own')] = require('for-own');

/**
 * Expose `utils`
 */

module.exports = utils;
