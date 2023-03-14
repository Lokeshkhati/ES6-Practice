// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 3, 6];

const getMinimumNumber = numbers => numbers.reduce((min, number) => min < number ? min : number)



console.log(getMinimumNumber(numbers));
// Output: 3