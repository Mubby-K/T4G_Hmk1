// taking input for the user
let userName = prompt("Enter your name");
// alert(userName);


let age = prompt("Enter your age" );

// alert(age);


let email = prompt("Enter your email");
// alert(email);

// Create the message string using template literals
let message = `Hello ${userName}, you are ${age} years old, and we'll keep in touch via your email: ${email} `;
alert(message);

// Assignment 9
let myName = "Mubaarakah";
console.log(userName);

let myAge = "26";
console.log(26);

// Adding numbers
let x = 25;
let y = 44;
let addNumber = x + y;
console.log(x + y);

// Substracting Numbers
let subNumbers = y - x;
console.log(y - x);

// Dividing Numbers
let divNumbers = x / y;
console.log(x / y);

// Multiplying Numbers
let productNumber = x * y;
console.log(x * y);

// finding Modal
x = 15
y = 4
let remainder = x % y;
console.log(x % y);

// boolean value
myName = true;
console.log(true);

// Setting Variable to a Number
console.log(typeof(24));

// Setting Variable to a string
console.log(typeof("Mubaarakah"));


// Assignement 10

// condition 1: less than 12 years
if (age < 12) {
        alert(`Hi ${username}, you are ${age} years old and you are too young to register. Sorry 😔😔`);
      } 
      // Condition 2: Between 12 and 18 years old (12 up to 17)
      else if (age >= 12 && age < 18) {
        alert(`Hi ${username}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email} 👏🏽👏🏽.`);
      } 
      // Condition 3: 18 years old and above
      else if (age >= 18) {
        alert(`Hi ${username}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email} 👏🏽👏🏽.`);
      };




