// Reference and Primitive Types

// numbers, string, boolean are Primitive types - Whenever you re-assign or store a variable in another variable it will copy the variable
const number = 1;
const num2 = number;
console.log(num2);

// Objects are reference types 
const person = {
  name: "Gilwell"
};
const secondPerson = person;
person.name = "King"
console.log(secondPerson);

// To maintain the Object Property and Create a New Property
const thirdPerson = {
  ...secondPerson
}

console.log("This is a copy of the secondPerson:", thirdPerson);


