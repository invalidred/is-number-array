'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var isArray = require('util').isArray;

/**
 * isWholeNumberArray is a utility function that takes an array
 * it checks if the elements in the array are numbers.
 * returns true if all elements are js numbers or js string  that are numbers
 * returns false otherwise
 */

var isWholeNumberArray = function isWholeNumberArray(array) {
  if (!isArray(array) || !array.length) {
    return false;
  }

  var digitPattern = new RegExp('^\\d+$'),
      len = array.length,
      i = 0;

  for (; i < len; ++i) {
    if (!digitPattern.test(array[i])) {
      return false;
    }
  }

  return true;
};

exports['default'] = isWholeNumberArray;
module.exports = exports['default'];