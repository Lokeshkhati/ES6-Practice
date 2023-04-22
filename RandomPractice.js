// const games = [
//     { title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG" },
//     { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
//     { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
//     { title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure" }
// ];
// Your code here


// const filteredGames = (games, genre) => games.filter((game) => game.genre === genre)

// const filteredGames = (games, genre) => {
//     let results = []
//     for (let i = 0; i < games.length; i++) {
//         if (games[i].genre === genre) {
//             results.push(games[i])
//         }
//     }
//     return results
// }

// console.log(filteredGames(games, "RPG"));

// const numbers = [10, 5, 8, 3, 6,9];


// const getMinimumNumber = numbers => numbers.reduce((acc, curr) => {
//     console.log(acc, curr);
//     // 10<5
//     // 5<8
//     // 5<3
//     // 3<6
//     // 3<9
//     if (acc < curr) {
//         return acc
//     }
//     else {
//         return curr
//     }
// })

// const getMinimumNumber = numbers => numbers.reduce((acc, curr) => acc < curr ? acc : console.log('curr', curr))

// const getMinimumNumber = (numbers) => {
//     let minNumber = numbers[0]
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < minNumber) {
//             minNumber = numbers[i]
//         }
//     }
//     return minNumber
// }
// getMinimumNumber(numbers)
// console.log(getMinimumNumber(numbers));
// Output: 3


// const students = [
//   { name: 'John', score: 80 },
//   { name: 'Jane', score: 90 },
//   { name: 'Bob', score: 75 },
//   { name: 'Alice', score: 85 },
// ];


// const getAverageScore = students => students.reduce((totalScore, currScore) => totalScore + currScore.score, 0) / students.length

// const getAverageScore = students => {
//     let average = sum = 0
//     const length = students.length

//     for (let i = 0; i < length; i++) {
//         sum += students[i].score
//     }
//     average = sum / length

//     return average
// }

// console.log(getAverageScore(students));


// Output: 82.5


// const numbers = [12, 23, 4, 2, 11, 21]
// Your code here

// const sumOfEvenNumbers = numbers => numbers.reduce((sum, number) => number % 2 === 0 ? sum + number : sum)


// const sumOfEvenNumbers = numbers => {
//   let sum = 0
//   for (let number of numbers) if (number % 2 === 0) sum += number

//   return sum
// }

// console.log(sumOfEvenNumbers(numbers))
// Output: 18

// 

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

const countStrings = fruits => fruits.reduce((acc, fruit) => ({ ...acc, [fruit]: (acc[fruit] || 0) + 1 }), {})

// const countStrings = fruits => fruits.reduce((acc, fruit) => {
//   return { ...acc, [fruit]: (acc[fruit] || 0) + 1 }
// }, {})


// const countStrings = fruits => {
//   const count = {}
//   for (let fruit of fruits) {
//     if (count[fruit]) {
//       count[fruit] += 1
//     }
//     else {
//       count[fruit] = 1
//     }
//   }
//   return count
// }


console.log(countStrings(fruits));








