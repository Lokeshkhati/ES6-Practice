// Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21]

const sumOfEvenNumbers = numbers => numbers.reduce((sum, number) => number % 2 === 0 ? sum + number : sum)
console.log(sumOfEvenNumbers(numbers))
// Output: 18