'use strict';

// const createBooking = function (flightNum = 1, numPassengers = 1, price = 1) {
//   const booking = {
//     flightNum, // je hoeft niet de waarde op te geven, key is zelfde als property
//     numPassengers,
//     price,
//   };

//   console.log(booking);
// };

// createBooking(2, undefined, undefined); //{flightNum: 2, numPassengers: 1, price: 1}

// // alle keys zijn 1 behalve flightNum die ik zelf gedefineerd heb bij het aanroepen van de functie

// let flights = 'LH234';
// const rachid = {
//   name: 'Rachid el Ouali',
//   passpoort: 23748394820,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH456';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passpoort === 23748394820) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passpoort');
//   }
// };

// console.log(flights);
// console.log(rachid);

// const newPasspoort = function (personNumber) {
//   personNumber.passpoort = Math.trunc(Math.random() * 1000000000);
// };

// newPasspoort(rachid);
// checkIn(flights, rachid);

// const OneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher order functions (it takes in a function as paramter)
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', OneWord);
// transformer('Javascript is the best', upperFirstWord);

// const greet = greeting => name => console.log(`${greeting}, ${name}`);
// // const HelloStranger = greet('rachid');
// // HelloStranger('hello');

// greet('Rachid')('Hello');

// const lufthanse = {
//   airline: 'LuftHanse',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a flight on ${this.airline} flight ${this.iataCode} ${flightNum} `
//     );
//     this.bookings.push({
//       flight: `${this.iataCode} ${flightNum}`,
//       name,
//     });
//     console.log(this.bookings);
//   },
// };

// lufthanse.book(1234, 'Rachid');
// lufthanse.book(456, 'Jonas');

// const eurowings = {
//   airline: 'Eurowing',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// const book = lufthanse.book;

// // Call function method

// book.call(eurowings, 1234, 'RachidCall');
// // bookCall.call(lufthanse, 2345, 'Jon Jones');
// // bookCall.call(swiss, 345, 'Rachid');

// // apply function method
// const bookArr = [5678, 'RachidApply'];

// book.apply(lufthanse, bookArr);]

// bind function method

// const bookEW = book.bind(eurowings, 23, 'Steve Williams');
// bookEW();

// Methods with event listeners
// lufthanse.planes = 300;
// lufthanse.buyNewPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthanse.buyNewPlane.bind(lufthanse));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(200));

// const AddTaxLogic = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addTax = AddTaxLogic(0.1);
// console.log(addTax(200));
// console.log(addTax(300));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   addScores(answer) {
//     if (typeof answer === 'number') {
//       this.answers[answer]++;
//     } else {
//       console.log('We only accept numbers');
//     }
//   },
//   answers: new Array(4).fill(0), // This generates [0, 0, 0, 0]. More in the next section 😃
//   registerNewAnswer() {
//     const promptAnswer = Number(
//       window.prompt(`${this.question} \n ${this.options.join('\n')}`)
//     );
//     this.addScores(promptAnswer);
//     this.displayResults('string');
//     // console.log(this.answers);
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(
//         // `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]} `
//         `Poll resuls are ${String(this.answers)}`
//       );
//     }
//   },
// };

// poll.registerNewAnswer();

// const testOb1 = {
//   answers: [5, 2, 3],
// };
// const testOb2 = {
//   answers: [1, 5, 3, 9, 6, 1],
// };
// // test 1 as cbind method string output
// const testOb1Run = poll.displayResults.bind(testOb1, 'string');
// testOb1Run();

// // test 2 as call method array output
// poll.displayResults.call(testOb2, 'array');

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log('This function will only run once');
// };

// runOnce();

// (function () {
//   console.log('This function will only run once');
// })();

// (() => {
//   console.log('This function will only run once');
// })();

// const secureBooking = function () {
//   let passengerCount = 0;
//   let passengerCountTwiceBitch = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();

// console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 77;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // re-assing f cuntion
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassenger = function (n, wait) {
//   // const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassenger(12, 3);
// const perGroup = 1000;

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀

*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const body = document.querySelector('body');

  body.addEventListener('click', function () {
    body.style.background = 'blue';
  });
})();
