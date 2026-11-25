// Show an alert with an external script

// alert("I'm JavaScript!");

// Variables

// let admin, name;
// name = "John";
// admin = name;
// alert(admin);

// Data Types

// let name = "Ilya";

// alert(`hello ${1}`); // hello 1
// alert(`hello ${"name"}`); //hello name
// alert(`hello ${name}`); //hello Ilya

// Interaction

// let name = prompt("Enter your name", "Eg: Karthiga");
// alert(`The entered name is ${name}`);

// basic operators

// postfix and prefix forms

// let a = 1,
//   b = 1;

// let c = ++a; // 2
// let d = b++; // 1

// alert(a);
// alert(b);
// alert(c);
// alert(d);

// assignment result

// let a = 2;

// let x = 1 + (a *= 2);

// alert(a);
// alert(x);

// type conversions

// "" + 1 + 0; // 10
// "" - 1 + 0; // -1
// true + false; // 1
// 6 / "3"; // 2
// "2" * "3"; // 6
// 4 + 5 + "px"; // 9px
// "$" + 4 + 5; // $45
// "4" - 2; // 2
// "4px" - 2; // Nan
// "  -9  " + 5; // -9 5
// "  -9  " - 5; // -14
// null + 1; // 1
// undefined + 1; // Nan
// " \t \n" - 2; // -2

// comparisons

// 5 > 4; // true
// "apple" > "pineapple"; // false
// "2" > "12"; // false
// undefined == null; // true
// undefined === null; // false
// null == "\n0\n"; // false
// null === +"\n0\n"; // false

// conditional branching

// if (a string with zero)

// if ("0") {
//   alert("Hello");
// }

// the name of js

// let name = prompt("What is the official name of js?", "");

// if (name == "ECMAScript") {
//   alert("Right");
// } else {
//   alert("You don't know? “ECMAScript”!");
// }

// show the sign

// let num = prompt("Enter a number", "");
// num > 0 ? alert(1) : num < 0 ? alert(-1) : alert(0);

// rewrite if into ?

// let result = a + b < 4 ? "Below" : "Over";

// rewrite 'if..else' into '?'

// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//       ? "Greetings"
//       : login == ""
//         ? "No login"
//         : "";

// Logical operators

// Check the range between

// if (age >= 14 && age <= 90) {
// }

// Check the range outside

// if (!(age >= 14 && age <= 90)) {
// }

// if (age < 14 || age > 90) {
// }

// Check the login

// let username = prompt("Enter Username", "");
// let password;

// if (username === "Admin") {
//   password = prompt("Enter Password", "");
//   if (password === "TheMaster") {
//     alert("Welcome!");
//   } else if (password === null || password === "") {
//     alert("Cancelled");
//   } else {
//     alert("Wrong Password");
//   }
// } else if (username === null || username === "") {
//   alert("Cancelled");
// } else {
//   alert("I don't know you.");
// }

// loops

// Output even numbers in the loop

// for (let i = 2; i <= 10; i += 2) {
//   alert(i);
// }

// Replace "for" with "while"

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Repeat until the input is correct

// let num;

// do {
//   num = +prompt("Enter a number", 0);
// } while (num <= 100 && num);

// Output prime numbers

// let isprime = true;
// let n = prompt("Enter a number", 0);

// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isprime = false;
//       break;
//     }
//   }
//   if (isprime) alert(i);
//   isprime = true;
// }

// Find whether a given number is prime or not.

// let n = +prompt("Enter a number to check if it is a prime or not", 0);
// let isprime = true;

// if (n <= 1) {
//   alert(`${n} is not a prime number`);
// } else {
//   for (i = 2; i <= n ** 0.5; i++) {
//     if (n % i === 0) {
//       isprime = false;
//       break;
//     }
//   }
//   if (isprime) {
//     alert(`${n} is a prime number`);
//   } else {
//     alert(`${n} is not a prime number`);
//   }
// }

// Count how many prime numbers exist between 1 and 100.

// let count = 0,
//   isprime = true;
// for (let i = 2; i <= 100; i++) {
//   for (let j = 2; j <= i ** 0.5; j++) {
//     if (i % j === 0) {
//       isprime = false;
//       break;
//     }
//   }
//   if (isprime) {
//     count += 1;
//   }
//   isprime = true;
// }
// alert(count);
