//String to Number
let score = "22";
let scoreNumber = Number(score);

// console.table([typeof scoreNumber, scoreNumber]);


//Number to String
let scoreString = String(scoreNumber);

// console.table([typeof scoreString, scoreString]);


//Number to Boolean
let isLoggedIn = 1;
let isLoggedInBoolean = Boolean(isLoggedIn);

// console.table([typeof isLoggedInBoolean, isLoggedInBoolean]);


//Number to Boolean
isLoggedInBoolean = true;
let isLoggedInNumber = Number(isLoggedInBoolean);

// console.table([typeof isLoggedInNumber, isLoggedInNumber]);
/*
1 => true; 0 => false
"" => false; "Rajesh" => true;
*/


// ***********************[ Operations ]******************************

// Positive to Negative value
let posValue = 10;
let negValue = -posValue;

// console.log(negValue);


// Negative to Positive value
posValue = Math.abs(negValue);

// console.log(posValue);


// console.log(2+2); // 2+2 = 4
// console.log(2-2); // 2-2 = 0
// console.log(2*2); // 2*2 = 4
// console.log(2**3); // 2*2*2 = 8
// console.log(2/2); // 2/2 = 1
// console.log(2%5); 
// console.log(2%4); 
// console.log(2%3); 
console.log(75%6); 
