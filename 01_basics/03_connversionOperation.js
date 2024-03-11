//String to Number
let score = "22";
let scoreNumber = Number(score);

console.table([typeof scoreNumber, scoreNumber]);


//Number to String
let scoreString = String(scoreNumber);

console.table([typeof scoreString, scoreString]);


//Number to Boolean
let isLoggedIn = 1;
let isLoggedInBoolean = Boolean(isLoggedIn);

console.table([typeof isLoggedInBoolean, isLoggedInBoolean]);


//Number to Boolean
isLoggedInBoolean = true;
let isLoggedInNumber = Number(isLoggedInBoolean);

console.table([typeof isLoggedInNumber, isLoggedInNumber]);
/*
1 => true; 0 => false
"" => false; "Rajesh" => true;
*/
