'use strict';

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,

//   const isMillenial = function () {
// console.log(this.year >= 1981 && this.year <= 1996 );
//   };
//   isMillenial();
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

const family = {
  brother: 'nordin',
  bigbro: 'Moo',
  sisters: ['souad', 'samira'], //ARRAY (Geneste object)
};

const familyCopy = structuredClone(family);

familyCopy.sisters.unshift('Jasmine');
family.sisters.unshift('Nora');

console.log(familyCopy); // logt objecten met alle geneste objecten (of array of wat anders) van family
console.log(family);
