"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Reference and Primitive Types
// numbers, string, boolean are Primitive types - Whenever you re-assign or store a variable in another variable it will copy the variable
var number = 1;
var num2 = number;
console.log(num2); // Objects are reference types 

var person = {
  name: "Gilwell"
};
var secondPerson = person;
person.name = "King";
console.log(secondPerson); // To maintain the Object Property and Create a New Property

var thirdPerson = _objectSpread({}, secondPerson);

console.log("This is a copy of the secondPerson:", thirdPerson);