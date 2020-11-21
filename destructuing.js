// Easily extract array elements or object properties and store them in variables

// Array Destructuring - Order defines the destructuring
const greetings = [a, b] = ["Hello", "Max"];
console.log(a);
console.log(b);

const numbers = [1,2,3];
[num1, num2, num3] = numbers;
console.log("This is For Num 1 and Num 2:" , num1, num2);
console.log("This is For Num 1 and Num 3:" , num1, num3);
 
// Object Destructuring - Name/identifier defines the destructuring

const {name} = {name: "Gilwell", age: "1/0"}
console.log(name);
console.log(26); // undefined



