'use strict';





// // function declaration
// function fruitProcessor(apples,oranges) {
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
//     }
    

//     console.log(fruitProcessor(5,0)); 



// // function expression 

// const fruitProcessor2 = function (apples,oranges) {
//     console.log(apples,oranges);
//     const juice2 = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice2;
// }

// console.log(fruitProcessor2(1,5));


// // arrow function (ander voorbeeld)




// function cutFruitPieces (fruit) {
// return fruit * 4;
// }


// function fruitProcessor(apples,oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples,oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
//     }
    

//     console.log(fruitProcessor(5,5)); 


// let birthYear = 1998;
// const age2 = birthYear => 2025 - birthYear; // je hoeft geen haakjes bij 1 parameter, ook wordt dit automatisch gereturned

// //  arrow function als je meerdere parameters hebt
// const age3 = (birthYear2, name) => { // wel haakjes bij meerdere parameters en brackets als je code meer dan 1 lijn is

// console.log("randomo");
// return 'testing' // return moet je wel gebruiken als meer dan 1 lijn code hebt
// }

/* Write your code below. Good luck! 🙂 */
// const calcAverage = (firstTime, secondTime, thirdTime) => (firstTime + secondTime + thirdTime) / 3 ;
// let scoreDolphins = calcAverage(85,54,41);
// let scoreKoalas = calcAverage(23,34,27);

// function checkWinner(avgDolphins, avgKoalas){

// if (avgDolphins >= (avgKoalas * 2)) {
// console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
// }

// else if (avgKoalas >= (avgDolphins * 2)) {
// console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
// }

// else {
// console.log(`No team wins...`)
// }
// }

// checkWinner(scoreDolphins, scoreKoalas);




// const years = [2000, 2001, 2001];

// console.log(years[0]);

// console.log(years[0]);

// years = [2003, 2004, 2005];


// const years = [2000, 2003, 2004];

// //toevoegen van elementen
// years.push(2010); // voeg aan einde van array toe
// years.unshift(2009); // voeg aan begin van array toe


// // verwijderen van elementen
// years.pop(); // hier hoeven we niks als parameter op te geven omdat de laatste item in een array wordt verwijderd.
// years.shift(); // hier hoeven we niks als parameter op te geven omdat de eerste item in array verwijderd wordt.

// // loggen van gemuteerde item
// const popped = years.pop(); // save item dat is verwijderd van de array in een variable
// const pushed = years.push(2010); // logs 3

// console.log(years.indexOf(2010));
// console.log(years.includes(2010));

// console.log(popped);
// console.log(pushed);


// if (years.includes(2010)) {

//     console.log("great year 2010");
// }


// const rachid = {
//     firstName: "Rachid",
//     lastName: "Ouali",
//     age: 27,
//     friends: ["Moo", "Appie", "Salmane"]
//     };

//     // console.log(rachid);
//     // const nameKey = 'Name';
//     // console.log(rachid['first' + nameKey]);
//     // console.log(rachid['last' + nameKey]);
    
//     // console.log(rachid.firstName);
//     // console.log(rachid['firstName']);


//     // const interestedIn = prompt('What do you want to know about Rachid?');


//     // if (rachid[interestedIn]) {
//     //     console.log(rachid[interestedIn]);
//     // } else {
//     //     console.log('Wrong! Choose between: firstName, lastName, age and friends');
//     // }

//     // rachid.locatie = "Amsterdam";
//     // rachid['job'] = "Front-end developer";

//     // console.log(rachid);

//     const sentence = `${rachid.firstName} has ${rachid.friends.length} friends, and his best friend is called ${rachid.friends[2]}`;
 
//     console.log(sentence);


// const rachid = {
//     firstName: "Rachid",
//     lastName: "Ouali",
//     birthYear: 1998,
//     // age: 27,
//     friends: ["Moo", "Appie", "Salmane"],
//     hasDriverlicense: true, 
//     // calcAge: function () {
//     //     return 2025 - this.birthYear
//     // }

//     calcAge: function () {
//       this.age =  2025 - this.birthYear;
//       return this.age;
//     },

//     getSummary: function () {
//         return this.hasDriverlicense ?`Jonas is a ${this.calcAge()} old teacher, and he has a driver's license` : "no driver's license";
//     }
//     };

// console.log(rachid.calcAge());
//     console.log(rachid.age);

//     console.log(rachid.getSummary());


    
// // challenge
// /* Write your code below. Good luck! 🙂 */

// /* Write your code below. Good luck! 🙂 */

// /* Write your code below. Good luck! 🙂 */
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height) 
//       return this.bmi;
//     }
//     }
    
//     const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height) 
//       return this.bmi;
//     }
//     }


//     console.log(mark.calcBMI());
//     console.log(john.calcBMI());

//       console.log(mark);
//     console.log(john);
    
//     for (let rep = 0;  rep <= 10; rep++) {
//       console.log(`Rachid is een G #${rep}`);
//     };
    
    
//     const rachid = [
// "Rachid",
//  "Ouali",
// 2037 - 1998,
// 'docent',
//  ["Moo", "Appie", "Salmane"],
//  true,
//  false
//   ];

//   const types = [];

// for (let i = 0; i <= rachid.length -1; i++ ) {
//   //reading the rachid array
//   console.log(rachid[i], typeof rachid[i]);


//   // filling the types array #1 option
//   // types[i] = typeof rachid[i];

//     // filling the types array #2 option

// types.push(typeof rachid[i]);
// };

// console.log(types);





// const years = [1998, 2007, 1996, 2020];
// const ages = [];

// for (let i = 0; i <= years.length -1; i++) {
// ages.push(2025 - years[i]); 
// };

// console.log(ages);



// // continue and break

//     const rachid = [
// "Rachid",
//  "Ouali",
// 2037 - 1998,
// 'docent',
//  ["Moo", "Appie", "Salmane"],
//  true,
//  false
//   ];

//   const types = [];

// // for (let i = 0; i <= rachid.length -1; i++ ) { 
// //   if (typeof rachid[i] !== 'string') continue //continue 
// //   console.log(rachid[i], typeof rachid[i]);
// // };



// for (let i = 0; i <= rachid.length -1; i++ ) { 
//   if (typeof rachid[i] !== 'string') break //break
//   console.log(rachid[i], typeof rachid[i]);
// };



// looping backwards
    const rachid = [
"Rachid",
 "Ouali",
2037 - 1998,
'docent',
 ["Moo", "Appie", "Salmane"],
 true,
 false
  ];

  for (let i = rachid.length -1; i >= 0; i--) {
    console.log(rachid[i]);
  };





