const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];


const countWords = fruits.reduce((acc, fruit) => {
    return { ...acc, [fruit]: (acc[fruit] || 0) + 1 }
}, {})

// console.log(countWords);


const obj = { apple: 3, banana: 3, cherry: 1 }

// const count = {}

// for (let fruit of fruits) {
//     if (count[fruit]) {
//         count[fruit] += 1
//     }
//     else {
//         count[fruit] = 1
//     }
// }

// console.log(count);