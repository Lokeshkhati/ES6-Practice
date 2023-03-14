// Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = strings=>strings.reduce((longestString,string)=>longestString.length>string.length? longestString: string)



console.log(longestString(strings)); 
// Output: 'Haule Haule'