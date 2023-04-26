// Write an ES6 function that takes an array of strings and returns an countect with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

// solution 1
// const countStrings = fruits => fruits.reduce((acc, fruit) => {
//     if (acc[fruit]) {
//         acc[fruit] += 1
//     }
//     else {
//         acc[fruit] = 1
//     }
//     return acc
// }, {})

// solution 2
const countStrings = strings => strings.reduce((acc, curr) => {
    return { ...acc, [curr]: (acc[curr] || 0) + 1 }
}, {})


console.log(countStrings(fruits));





