// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// find amplitude
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [3, -1, 50, -1, 'error', 2, 1, 3, 10, 14, 9, 5];

// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1. Probleem begrijpen
// Amplitude is het verschil tussen hoogste en laagste temperatuur
// Deze kun je berekenen door de laagste temperatuur af te trekken van de hoogste temperatuur.
// Een error komt soms voor, deze gaan we negeren en niet meenemen

// 2. Subproblemen
// hoogste punt van array vinden a.d.v een for loop
// laagste punt van array vinden a.d.v een for loop
// return de amplitude door de 2 waardes van elkaar af te trekken

// const calcTempAmplitude = function (temperatures, moreTemparatures) {
//   const newTemperatures = temperatures.concat(moreTemparatures);
//   // declareer lege min en max om hier de min en max waarde in te stoppen (de standaard is omdat er vanaf hier al de conditie moet werken)
//   let min = newTemperatures[0];
//   let max = newTemperatures[0];

//   // loop door de arry
//   for (let i = 0; i < newTemperatures.length; i++) {
//     // huidige temperatuur opgeven binnen de loop

//     const currentTemp = newTemperatures[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) {
//       max = currentTemp;
//     }
//     if (currentTemp < min) {
//       min = currentTemp;
//     }
//   }
//   let amplitude = max - min;
//   return amplitude;
// };

// console.log(calcTempAmplitude(temperatures, temperatures2));

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Probleem
// elke array item krijgt een string
// elke array item is een dag en deze gaat na elke array naar de volgende dag ([dag 1] [dag 2] etc..)
// het moet een functie zijn die de argument 'arr' heeft en de strings logged

// Stappen
// Een loop maken die door de gehele array loopt
// In de loop de de array item 2 waardes ophalen:
// let temperature, let whatDay
//  een string toevoegen met in ${hoeveelheid graden} ${hoeveelheiddagen} en string "..."
// Resultaat (returnen en) loggen

// const testData1 = [17, 21, 23];
// const testData2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let whatDay = 0; whatDay < arr.length; whatDay++) {
//     let temperature = arr[whatDay];
//     str = str + `${temperature} in ${whatDay + 1} days ... `; // str is in eerste instantie een leege string die nu in elke iteratie bij mekaar wordt opgesteld
//   }
//   return str;
// };

// console.log(printForecast(testData2));
