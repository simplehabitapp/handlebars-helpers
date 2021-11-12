// from https://github.com/jonschlinkert/create-frame

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

loadUtil('define-property', 'define');
loadUtil('extend-shallow', 'extend');
loadUtil('isobject', 'isObject');

module.exports = function createFrame(data) {
  if (!utils.isObject(data)) {
    throw new TypeError('createFrame expects data to be an object');
  }

  var extend = utils.extend;
  var frame = extend({}, data);
  frame._parent = data;

  utils.define(frame, 'extend', function(data) {
    extend(this, data);
  });

  if (arguments.length > 1) {
    var args = [].slice.call(arguments, 1);
    var len = args.length, i = -1;
    while (++i < len) {
      frame.extend(args[i] || {});
    }
  }
  return frame;
};
