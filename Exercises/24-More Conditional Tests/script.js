
//Excerise No. 24. 



var city = "Islamabad"; //equality and inequality with strings

console.log(city == "Islamabad");
console.log(city != "Islamabad");

var firstName = "NASEER"; //Tests using the lower case function

console.log(firstName.toLowerCase() == "naseer");
console.log(firstName.toLowerCase() !== "naseer");

var a = 10; //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(a == 10);
console.log(a != 10);
console.log(a > 5);
console.log(!a > 5);
console.log(a < 20);
console.log(a <! 20);
console.log(a >= 10);
console.log(!a >= 10);
console.log(a <= 11);
console.log(a <=! 11);

var b = 15; //Tests using "and" and "or" operators
var c = 20;

console.log(b == 15 && c == 20);
console.log(b == 15 && c == 25);
console.log(b == 10 || c == 20);
console.log(b == 10 || c == 25);

var d = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]; //Test whether an item is in a array, Test whether an item is not in a array

console.log(d.includes (5) ); 
console.log(d.includes (55) );