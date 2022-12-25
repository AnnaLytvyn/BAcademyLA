/*
  MINIMUM
 */
const myName = "Anna";
const lastName = "Lytvyn";
// const prof = "Javascript developer";
const multi = `My name is ${myName} ${lastName} and i am ${lastName}`;
console.log(multi);

// single-line comments

/*
This is a multiline comment
that can span as many lines
as you needed.
below you will find  wrong naming which we can not use in JS
Myname, MYname, my-name
*/

// the most recommended way to declare JavaScript variables is with CamelCase variable names

/*
  NORMAL
 */

//name
const name = prompt("What is your name?");
name && alert("Hello " + name);

//year
const birthYear = prompt("What is your birth year?");
const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(birthYear, 10);
birthYear && alert("Age is " + age);

//square
const length = prompt("What is square's length?");
length && alert("square length is " + length * 4);

/*
  MAXIMUM
 */

//radius
const radius = prompt("What is radius?");
radius && alert("" + radius * radius * Math.PI);

//speed
const distance = prompt("What is distance?");
const timing = distance && prompt("What is timing?");
const minSpeed = timing && distance / timing;
minSpeed && alert("Speed " + minSpeed);

//currency
const usd = prompt("What is $ amount?");
const usdInEur = 0.95;
const eur = usd * usdInEur;
eur && alert("Eur " + eur);
