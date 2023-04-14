// Practice Q. By MA - team -1

// Q1. Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

// const oddEven = (numbers) => {
//     const array = []
//     for (number of numbers) {
//         if (number % 2 === 0) array.push(number * 20)
//         else {
//             array.push(number * 30)
//         }
//     }
//     return array
// }

// console.log(oddEven([1, 2, 3, 4, 5, 6, 7, 8, 9,]));


// 2.Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

// const evenOdd = (numbers) => {
//     const array = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (i % 2 === 0) {
//             array.push(numbers[i] - 2)
//         }
//         else {
//             array.push(numbers[i] + 3)
//         }

//     }

//     return array
// }

// console.log(evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9,]));
// 3. Write a program using destructing to find a number in this object which is divisible both by 3 and 5
// const obj = { a: 10, b: 12, arr: [10, 8, 15, 14] }


// const findDivisibleBy3And5 = ({ arr }) => arr.find((item) => item % 3 === 0 && item % 5 === 0)

// console.log(findDivisibleBy3And5(obj));

// 4.Given an array of objects representing students,where each object has a name property and a grades property (an array of numbers), write a function that returns an array of objects representing the students who have an average grade of at least 90.

// const students = [
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [80, 85, 87] },
//     { name: 'Charlie', grades: [92, 88, 94] },
//     { name: 'David', grades: [75, 80, 82] },
// ];

// const atLeast90Avg = (students) => students.map(({ name, grades }) => {
//     let averageGrade = grades.reduce((acc, curr) => acc + curr) / grades.length

//     return { name, averageGrade }


// }).filter(({ name, averageGrade }) => {
//     if (averageGrade >= 90) return { name, averageGrade }
// })
// console.log(atLeast90Avg(students));


// Output: [{ name: 'Alice', averageGrade: 92.33333333333333 }, { name: 'Charlie', averageGrade: 91.33333333333333 }]


//   8.Write a function that takes an array of strings as input and returns a new array with the length of each string, sorted in descending order



// const strings = ['Ram', 'lokeshkhati', 'prince', 'omkar',]

// const newStrings = strings.map((word) => word.length)
// console.log(newStrings.sort((a, b) => b - a));

// 9.Write a function that takes an array of strings as input and returns a new array with only the strings that contain at least one vowel.


// const arr = ["Anuj", "hrsht", "taran"]
// const vowels = ["a", "e", "i", "o", "u"];

// const getVowelStrings = (arr) => arr.filter((str) => vowels.some((vowel) => str.includes(vowel)))

// console.log(getVowelStrings(arr))


// 10. Given an array of strings, use the reduce function to find the total length of all the strings combined.
// const strings = ['hello', 'world', 'how', 'are', 'you'];

// const totalLength = strings.reduce((acc, curr) => acc + curr.length, 0)
// console.log(totalLength);


// 11.Given an array of objects representing students, use the reduce function to find the student with the highest grade.
// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 70 },
//     { name: 'Charlie', grade: 90 },
//     { name: 'Dave', grade: 80 }
// ];
// const student = students.reduce((acc, curr) => acc.grade > curr.grade ? acc : curr)
// console.log(student);

// // 13 . Given an array of voters, objects count how many people voted using reduce
// const voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false }
// ];

// const noOfPeopleVoted = voters.reduce((acc, { voted }) => acc + (voted ? 1 : 0), 0)
// console.log(noOfPeopleVoted);
// Turn an array of numbers into a long string of all those numbers
// const myArray2 = [1, 2, 3];
// const stringifiedArray = myArray2.reduce((a, b) => a + b, '');
// console.log(stringifiedArray);

// Given an array of objects representing books, where each object has a title property and a year property, write a function that returns the titles of all books published before the year 2000.
// const books = [
//     { title: 'The Great Gatsby', year: 1925 },
//     { title: 'To Kill a Mockingbird', year: 1960 },
//     { title: 'One Hundred Years of Solitude', year: 1967 },
//     { title: 'The Catcher in the Rye', year: 1951 },
//     { title: 'Beloved', year: 1987 },
//     { title: 'Brave New World', year: 1932 },
// ];


// const result = books.filter(({ year }) => year < 2000).map(({ title }) => title)
// console.log(result);


// Given an array of objects representing employees, where each object has a name property, a department property, and a salary property, write a function that returns an object representing the total salary of each department. The keys of the object should be the department names, and the values should be the total salaries of all employees in that department.
// const employees = [
//     { name: 'Alice', department: 'Sales', salary: 50000 },
//     { name: 'Bob', department: 'Sales', salary: 60000 },
//     { name: 'Charlie', department: 'Marketing', salary: 55000 },
//     { name: 'David', department: 'Sales', salary: 70000 },
//     { name: 'Eve', department: 'Marketing', salary: 65000 },
// ];
// const result = employees.reduce((acc, { department, salary }) => {

//     if (department === 'Sales') {
//         acc[department] = acc[department] + salary
//     }
//     else {

//         acc[department] = acc[department] + salary
//     }

//     return acc
// }, { Sales: 0, Marketing: 0 })
// console.log(result);
//   // Output: {Sales: 180000, Marketing: 120000}


// Given an array of strings, write a function that returns an object representing the frequency of each character in the array. The keys of the object should be the characters themselves, and the values should be the number of times the character appears in the array.


// const strings = ['apple', 'banana', 'cherry'];
// // console.log(strings);
// const result = strings.reduce((acc, string) => {
//     return { ...acc, [string[0]]: (acc[string] || 0) + 1 }
// }, {})
// console.log(result);
// Output: { a: 4, p: 2, l: 1, e: 2, b: 1, n: 2, c: 1, h: 1, r: 2, y: 1}

// function occurrencesOfEach(array) {
//     const occurrences = array.reduce((accumulator, value) => {
//       accumulator[value] = ++accumulator[value] || 1;

//       return accumulator;
//     }, {});

//     return occurrences;
//   }


//   const result = occurrencesOfEach(strings);

//   console.log(result); 


// Q. length of string that starts with A
// const strings = ['Apple', 'Arrange', 'Cat', 'Dog']

// const countStrings = (strings) => {
//     let str = ''
//     for (let word of strings) if (word[0] === 'A') str += word
//     return str.length
// }

// console.log(countStrings(strings)); 


// const students = [
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [80, 85, 87] },
//     { name: 'Charlie', grades: [92, 88, 94] },
//     { name: 'David', grades: [75, 80, 82] },
// ];

// const result = students.map(({ name, grades }) => {
//     const average = grades.reduce((acc, curr) => acc + curr)
//         / grades.length

//     return { name, average }
// })
// .filter(({ average }) => average > 90)

// console.log(result);

// const strings = ['hello', 'world', 'how', 'are', 'you'];

// const lengthOfStrings=(strings)=>strings.reduce((acc,curr)=>acc+=curr.length,0)
// console.log(lengthOfStrings(strings))

// Given an array of objects representing students, use the reduce function to find the student name with the highest grade.

// const students = [
//   { name: 'Alice', grade: 85 },
//   { name: 'Bob', grade: 70 },
//   { name: 'Charlie', grade: 90 },
//   { name: 'Dave', grade: 80 }
// ];

