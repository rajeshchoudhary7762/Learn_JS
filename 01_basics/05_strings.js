const name = "Rajesh";
const age = 23;

// console.log(name + age);

// console.log(`Hello my name is ${name} and i'm ${age} year's old.`);

const gameName = new String('rajesh');

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));  

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-5, 6); //we can use neg value only in slice
// console.log(anotherString);

const newStrOne = "   Rajesh   ";
// console.log(newStrOne);
// console.log(newStrOne.trim());


const url = "https://rajesh.com/rajesh%20choudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('rajesh'));