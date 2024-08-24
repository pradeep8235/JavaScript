// ===================================================================
// Control Structures

// 1)   Conditional Statements: (if, else if, else:)

// if , elseif, else

// let x = 18;
// if (x >= 18) {
//   console.log("Eligible For Voting Dude!");
// } else {
//   console.log("Not Eligible for voting bro sorry!");
// }

// ======================================================================

// 2)Loops   (for,while, do-while)

// for

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//while

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do while

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// ======================================================================

// switch

// let i = "Pradeep";
// switch (i) {
//   case "pradeep":
//     console.log("pradeep");
//     break;
//   case "Pradeep":
//     console.log("Pradeep", i);
//     break;
//   default: {
//     console.log("Default");
//   }
// }

// ======================================================================

// Day 2: Functions and Scope

//1) Function Declaration:

// function Greet(x) {
//   console.log(`Hi ${x} Welcome`);
// }

// Greet("Pradeep");

//2) Function Function Expression:                              //Functions can also be assigned to variables.:

// const Dtaa = function Greet(x) {
//   return `${x} bro`;
// };

// const iuiu = Dtaa("Pradeep");
// console.log(iuiu);

// 3)Arrow Functions (ES6):

// const Greet = () => {
//   console.log("Pradeep");
// };

// Greet();

// 4) Parameters and Return Values:

// function add(a, b) {
//   console.log(a, b);
// }

// add(1, 8);

// 5) default Function values

// function add(a = 3, b = 8) {
//   console.log(a, b);
// }

// add();

// ======================================================================

// rest operator
// function Demo(...num) {
//   console.log(
//     "----------->",
//     num.reduce((a, b) => a + b)
//   );
// }

// Demo(1, 2, 3, 4, 5);

// ======================================================================

// closure  concept

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return console.log(counter);
//   };
// })();

// add();
// add();
// add();

// Higher Order Function

function higherOrderFunction(callback, iiohoi) {
  console.log("Before callback");
  callback(); // Executing the callback function
  iiohoi();
  console.log("After callback");
}

function greet() {
  console.log("Hello from the callback function!");
}

function jpj() {
  console.log("jpj from the callback function!");
}

higherOrderFunction(greet, jpj);
