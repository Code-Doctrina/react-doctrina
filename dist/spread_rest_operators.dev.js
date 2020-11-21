"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Spead Operator - Used to split up array elements or Object Properties
var numbers = [1, 2, 3, 4, 5, 6, 23, 45, 67, 100];
var add_to_numbers = [].concat(numbers, [6, 7, 8, 9, 10]);
var person = {
  name: "Max"
};

var newPerson = _objectSpread({}, person, {
  age: 28
});

console.log(newPerson);
console.log(numbers);
console.log(add_to_numbers); // Rest Operator - Used to Merge a list of function arguments into an array

var filter = function filter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (el) {
    return el === 1;
  });
};

console.log(filter(1, 1, 2, 3, 4, 5, 6, 10, 10));