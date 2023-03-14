// Write an ES6 function to multiply and return all the elements of a given array.
const numbers = [1, 2, 3, 4, 5];

const product = numbers=>numbers.reduce((product,number)=>product*number)

console.log(product(numbers));
// Output: 120