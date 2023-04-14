// Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];

const peopleLength = people.length

const getAverageAge = people => {
  const averageAge = people.reduce((acc, curr) => acc + curr.age, 0) / peopleLength
  return { averageAge }
}


console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }


 