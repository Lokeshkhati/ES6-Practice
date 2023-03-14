// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

const concatStrings = strings=>strings.reduce((acc,str)=>acc+str)



console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'