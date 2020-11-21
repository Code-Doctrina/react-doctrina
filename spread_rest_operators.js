// Spead Operator - Used to split up array elements or Object Properties
const numbers =[1,2,3,4,5,6,23,45,67,100];
const add_to_numbers = [...numbers, 6,7,8,9,10];
const person = {
  name: "Max",
}

const newPerson = {
  ...person,
  age:28
}

console.log(newPerson)
console.log(numbers);
console.log(add_to_numbers);

// Rest Operator - Used to Merge a list of function arguments into an array
const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(1,1,2,3,4,5,6,10,10))

