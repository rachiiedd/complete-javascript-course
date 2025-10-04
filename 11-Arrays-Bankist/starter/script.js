'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'basic',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'gold',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'platinum',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');

const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const balanceLabel = document.querySelector('.balance__label');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i} withdrawal
          </div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function (acc) {
  currentAccount.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `$${currentAccount.balance}`;
};

const calcDisplaySummary = function (acc) {
  const moneyIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${moneyIn}€`;

  const moneyOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(moneyOut)}€`;

  const interest = acc.movements
    .map((mov, _, arr) => {
      return (mov / 100) * acc.interestRate;
    })
    .filter((int, _, arr) => {
      return int > 1;
    })
    .reduce((acc, int, _, arr) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// PIPILINE
const euroToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov, _, i) => {
    return mov > 0;
  })
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov);

let currentAccount;

const updateUi = function (acc) {
  //Display movements
  displayMovement(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
  containerApp.style.opacity = 1;
};

// Event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    //Display UI and message
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;

    //clear input login input fields
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUi(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(acc => acc === currentAccount);
    accounts.splice(index, 1);

    inputCloseUsername.value = '';
    inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//werk dit ook zonder function te schrijven?
// wrm is updateUI niet nodig

/// LECTURES ////////////////
////////////////
////////////////
////////////////
////////////////
////////////////

// const balance = movements.reduce(function (acc, curr, index, arr) {
//   console.log(`Iteration ${index} : ${acc} `);
//   return acc + curr;
// }, 0);

// const balance = movements.reduce((acc, curr, index) => acc + curr, 0);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// console.log(balance);

// const deposits = movements.filter(function (movement) {
//   return movement < 0;
// });

// const deposits2 = movements.map(function (movements) {
//   return movements < 0;
// });

// const depositsfor = [];

// for (const mov of movements) if (mov < 0) depositsfor.push(mov);

// const withdrawals = movements.filter(mov => mov > 0);

// console.log(movements);
// console.log(deposits);
// console.log(deposits2);
// console.log(depositsfor);
// console.log(withdrawals);

// const user = 'Steven Thomas Williams'; //stw

// const createUsername = function (accounts) {
//   accounts.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUsername(accounts);
// console.log(accounts);
// const euroToUsd = 1.1;

// const movementsConvert = movements.map(mov => mov * euroToUsd);
// console.log(movementsConvert);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const testData1 = [3, 5, 2, 12, 7];
// const testData2 = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctedDogsJulia = dogsJulia.slice(1, 3);
//   const allDogs = correctedDogsJulia.concat(dogsKate);
//   console.log(allDogs);

//   allDogs.forEach(function (age, i) {
//     const adultOrPuppy = age >= 3 ? 'adult' : 'puppy';
//     console.log(
//       `Dog number ${i + 1} is an ${adultOrPuppy}, and is ${age} years old`
//     );
//   });
// };

// checkDogs(testData1, testData2);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   let arrHumanAge = new Set();
//   ages.forEach(function (dogAge) {
//     let humanAge;
//     if (dogAge <= 2) {
//       humanAge = 2 * dogAge;
//     } else if (dogAge > 2) {
//       humanAge = 16 + dogAge * 4;
//     }
//     arrHumanAge.add(humanAge);
//   });
//   arrHumanAge.forEach(function (humanAge) {
//     if (humanAge > 18) {
//       arrHumanAge.delete(humanAge);
//     }
//   });
//   arrHumanAge = [...arrHumanAge];
//   console.log(arrHumanAge);
// };

// calcAverageHumanAge(testData1);
// calcAverageHumanAge(testData2);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(0, 3));

// console.log(arr.slice(2));
// //SPLICE

// // console.log(arr.splice(0, 3));

// //REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// console.log(arr2.reverse());

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// const letters2 = [...arr, ...arr2];
// console.log(letters2);

// // JOIN
// console.log(arr2.join('-'));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]); // 64
// console.log(arr.splice(-1)[0]);
// console.log(arr.at(-1));

// console.log('rachid'.at(-1));

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else if (movement < 0) {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else if (movement < 0) {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// });

// movements.forEach(function (movement, index, arr) {
//   if (movement > 0) {
//     console.log(`${index}: you deposited ${movement} this is array ${arr}`);
//   } else if (movement < 0) {
//     console.log(
//       `${index}: you withdrew ${Math.abs(movement)} this is array ${arr}`
//     );
//   }
// });

// map

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // set
// const currenciesUnique = new Set(['EUR', 'EUR', 'USD', 'USD', 'GBP', 'GBP']);

// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const newMovements = [];

// for (const mov of movements) {
//   newMovements.push(mov * euroToUsd);
// }

// movements.forEach(function (movement, index, arr) {
//   if (movement > 0) {
//     console.log(`${index}: you deposited ${movement} this is array ${arr}`);
//   } else if (movement < 0) {
//     console.log(
//       `${index}: you withdrew ${Math.abs(movement)} this is array ${arr}`
//     );
//   }
// });

// const movementDescriptions = movements.map((mov, i) => {
//   if (mov > 0) {
//     return `${i}: you deposited ${mov} this is array ${arr}`;
//   } else {
//     return `${i}: you withdrew ${Math.abs(mov)} this is array ${arr}`;
//   }
// });

// console.log(movementDescriptions)

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (testData) {
//   // maak een functie waarmee ik de testdata ga callen
//   const humanAge = testData.map(function (arr) {
//     // maak een nieuwe variable voor de return van de map method (humanAge)
//     if (arr <= 2) {
//       return 2 * arr; // return voor elke array item in testData dat kleiner is of gelijk aan 2 deze waarde
//     } else {
//       return 16 + arr * 4; // als de bovenste conditie false is return dit instead voor elke array item
//     }
//   });

//   const adults = humanAge.filter(function (arr) {
//     return arr >= 18;
//   });

//   const average =
//     adults.reduce(function (acc, arr, _, arrLength) {
//       return acc + arr;
//     }, 0) / adults.length;
//   return average; // de bovenste waardes zitten gescoped in the human age variable, deze moeten we returnen zodat deze bestaat in calcAverageHumanAge
// };

// console.log(calcAverageHumanAge(data2)); // roep functie op en niet de varialbe humanAge omdat die gescoped is in de calcAverageHumanAge functie

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = testData =>
//   // maak een functie waarmee ik de testdata ga callen
//   testData
//     .map(arr => (arr <= 2 ? 2 * arr : 16 + arr * 4))
//     .filter(arr => arr >= 18)
//     .reduce((acc, age, _, arr) => {
//       return acc + age / arr.length;
//     }, 0); // de bovenste waardes zitten gescoped in the human age variable, deze moeten we returnen zodat deze bestaat in calcAverageHumanAge

// console.log(calcAverageHumanAge(data2)); // roep functie op en niet de varialbe humanAge omdat die gescoped is in de calcAverageHumanAge functie

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);

// console.log(movements);

// const searchAccount = accounts.find(acc => acc.owner === 'Jonas Schmedtmann');
// console.log(searchAccount);

// let foundSearchAccount2;

// for (const searchAccount2 of accounts) {
//   searchAccount2.owner === 'Jonas Schmedtmann' &&
//     (foundSearchAccount2 = searchAccount2);
// }

// console.log(foundSearchAccount2);

// const archersReady = function (archers) {
//   return archers.find(archer => (archer > 5 ? true : false));
// };

// console.log(archersReady([1, 2, 3, 4]));

// console.log(movements);
// const findlastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(findlastWithdrawal);

// const findLastIndex = movements.findLastIndex(mov => mov < 0);

// console.log(`Your latest large movement was ${findLastIndex} movements ago`);

// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov > 0));

// console.log(account4.movements.every(mov => mov > 0));

// const deposit = mov => mov > 0;

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, [3, 4, 5]], [4, 5, 6], 7, 8];
// console.log(arr.flat(2));

// const accMovements = accounts.map(acc => acc.movements);
// console.log(accMovements);
// const allAccMovements = accMovements.flat();
// console.log(allAccMovements);
// const totalaccMovements = allAccMovements.reduce(
//   (accum, mov) => accum + mov,
//   0
// );
// console.log(totalaccMovements);

// const totalaccMovements = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((accum, mov) => accum + mov, 0);

// const totalaccMovements = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((accum, mov) => accum + mov, 0);

// console.log(totalaccMovements);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// TEST DATA:
// */

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// // 1
// const huskyWeight =
//   breeds.reduce((accum, breed) => accum + breed.averageWeight, 0) /
//   breeds.length;

// // 2
// // const dogBothActivities = breeds.find(
// //   breed => breed.activities[0] === 'running' && breed.activities[1] === 'fetch'
// // );

// const dogBothActivities = breeds.find(
//   breed =>
//     breed.activities.includes('running') && breed.activities.includes('fetch')
// ).breed;

// // 3 goed checken
// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

// // 4
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5
// const swimmingAdjacent = [
//   ...new Set(allActivities.filter(current => current !== 'swimming')),
// ];

// console.log(swimmingAdjacent);

// //6
// console.log(breeds.every(breed => breed.averageWeight >= 10));

// //7
// console.log(breeds.some(breed => breed.activities.length >= 3));

// //8
// const averageWeightOfHeaviestBreed = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.averageWeight);

// console.log(Math.max(...averageWeightOfHeaviestBreed));

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// const owners2 = owners.slice();
// console.log(owners2);

// // movements.sort(
// //   (
// //     a,
// //     b // a is current value en b is next value
// //   ) => {
// //     if (a > b) {
// //       return 1;
// //     } else if (b > a) {
// //       return -1;
// //     }
// //   }
// // );

// movements.sort((a, b) => b - a);
// console.log(movements);

// const groupedMovements = Object.groupBy(movements, mov =>
//   mov > 0 ? 'deposits' : 'withdrawal'
// );

// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;

//   if (movementCount >= 8) {
//     return 'Very active';
//   }
//   if (movementCount >= 4) {
//     return 'Active';
//   }
//   if (movementCount >= 1) {
//     return 'Moderate';
//   }
// });

// console.log(groupedByActivity);

// // const groupedAccounts = Object.groupBy(accounts, account => account.type);

// const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);

// console.log(groupedAccounts);

// const ted = new Array(1, 2, 3, 5, 6, 7, 8);

// ted.fill(1, 0, 5);

// console.log(ted);

// const x = new Array(7);
// console.log(x);

// x.fill(1);
// console.log(x);

// x.fill(3, 5, 7);
// console.log(x);

// // array from
// const y = Array.from({ length: 7 }, (curr, i) => i + 1);
// console.log(y);
// labelBalance.addEventListener('click', function () {
//   const movementsValue = Array.from(
//     document.querySelectorAll('.movements__value'),
//     e => e.textContent.replace('€', '')
//   );
//   console.log(movementsValue);
// });

// console.log(movements);
// console.log(movements.toSpliced(5, 1));
// console.log(movements);

// console.log(movements);
// movements[0] = 1;
// r;
// console.log(movements);
// const newMovements2 = movements.with(0, 10);
// console.log(newMovements2);

// 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((accum, mov) => accum + mov, 0);

console.log(bankDepositSum);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accum, mov) => (mov >= 1000 ? ++accum : accum), 0);
console.log(numDeposits1000);
// 2
let a = 10;
console.log(++a); // 11

//3 create a reduce object with withdrawals and deposits
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (obj, mov) => {
      obj[mov > 0 ? (obj.withdrawals += mov) : (obj.deposits += mov)];
      return obj;
    },
    { withdrawals: 0, deposits: 0 }
  );

console.log(deposits, withdrawals);

const ConvertTitleCase = function (title) {
  const exceptions = ['a', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const stringify = function (sentence) {
    return sentence[0].toUpperCase() + sentence.slice(1);
  };
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return stringify(titleCase);
};

console.log(ConvertTitleCase('this is a nice title'));
console.log(ConvertTitleCase('this is a LONG title but not too long'));
console.log(ConvertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
console.log(dogs.flatMap(dog => dog.curFood).reduce((obj, food) => {
recFood = 


  return obj
}));
