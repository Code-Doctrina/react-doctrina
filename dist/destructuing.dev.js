"use strict";

var _ref;

// Easily extract array elements or object properties and store them in variables
// Array Destructuring - Order defines the destructuring
var greetings = (_ref = ["Hello", "Max"], a = _ref[0], b = _ref[1], _ref);
console.log(a);
console.log(b);
var numbers = [1, 2, 3];
num1 = numbers[0];
num2 = numbers[1];
num3 = numbers[2];
console.log("This is For Num 1 and Num 2:", num1, num2);
console.log("This is For Num 1 and Num 3:", num1, num3); // Object Destructuring - Name/identifier defines the destructuring

var _name$age = {
  name: "Gilwell",
  age: "1/0"
},
    name = _name$age.name;
console.log(name);
console.log(26); // undefined