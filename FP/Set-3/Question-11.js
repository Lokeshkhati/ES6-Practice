// Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21]

const sumOfEvenNumbers = numbers => numbers.filter((number) => number % 2 === 0).reduce((sum,number)=>sum+number,0)
console.log(sumOfEvenNumbers(numbers))
// Output: 18