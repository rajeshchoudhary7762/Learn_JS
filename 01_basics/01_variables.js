const accoutId = 1454545;
let accoutEmail = "rajesh@gmail.com";
var accoutPwd = "12345";
accoutCity = "Dhanbad";
let accoutState;

// accoutId = 2; // not allowed
accoutEmail = "ram@gmail.com";
accoutPwd = "54321";
accoutCity = "Ranchi";


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accoutId);

console.table([accoutId, accoutEmail, accoutPwd, accoutCity, accoutState]);