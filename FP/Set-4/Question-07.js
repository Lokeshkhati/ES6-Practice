// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
    { name: 'Jeena', age: 205 },
    { name: 'Priya', age: 30000 },
    { name: 'Naina', age: 45 }
]

const oldestPersonName = people =>
   people.reduce((oldestPerson, person) => oldestPerson.age > person.age ? oldestPerson : person).name

console.log(oldestPersonName(people));
// Output: 'Naina'
