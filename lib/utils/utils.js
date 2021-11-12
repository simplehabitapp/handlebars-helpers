'use strict';

var utils = require('lazy-cache')(require);

// Array utils
utils('array-sort', 'sortBy');
utils('arr-flatten', 'flatten');

// JavaScript language utils
utils('kind-of', 'typeOf');

// Number utils
utils('is-even');
utils('is-number');

// Object utils
utils('create-frame');
utils('get-object');
utils('get-value', 'get');
utils('for-own');

// Path utils
utils('relative');

/**
 * Expose `utils`
 */

module.exports = utils;
