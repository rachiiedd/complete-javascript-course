'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  nationality: '',
  spaces: { uranus: true, earth: true, mars: true },
  halal: '',
  delivery: '',
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterMenu, categories, startIndex }) {
    console.log(`${this.starterMenu[startIndex]} from ${categories}`);
  },

  orderPasta: function (Ing1, Ing2, Ing3) {
    console.log(`You need ${Ing1}, ${Ing2} and ${Ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   starterMenu: 'Wings',
//   categories: 'Junkfood',
//   startIndex: 2,
// });

// const arr = [1, 2, 3, 4, 5];

// const newarr = [...arr, 7, 8, 9, 10];

// console.log(newarr);

// const newMenu = [...restaurant.categories, 'Chickenwings'];
// console.log(newMenu);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const prompts = [
//   prompt('Give me ingredient1'),
//   prompt('Give me ingredient2'),
//   prompt('Give me ingredient3'),
// ];
// console.log(prompts);

// restaurant.orderPasta(...prompts);

// Objects
// nieuwe property toevoegen
// const newRestaurant = {
//   ...restaurant,
//   bonusFood: 'Hamburger',
//   elderlyDiscount: true,
// };
// console.log(newRestaurant);
// // object kopieren en een waarde veranderen
// const copyRestaurant = { ...restaurant };
// copyRestaurant.starterMenu = 'Just bread';

// console.log(copyRestaurant.starterMenu);

// 1) Destructering
// rest pattern in arrays
// const thefam = ['rachid', 'nordin', 'moes', 'hassan', 'boujema'];

// const [klein, groot, groter, ...other] = thefam;

// console.log(klein, groot, groter);
// console.log(other);

// // rest pattern in objects

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(sat, weekdays);

// 2) Functions

// const { name, mainMenu, categories } = restaurant;
// console.log(name, mainMenu, categories);

// const { nationality: roots, delivery: takeawawy, halal: kosher } = restaurant;
// console.log(roots, takeawawy, kosher);

// default values
// const {
//   nationality: roots = 'White',
//   delivery: takeaway = 'Some ass for gass',
//   halal: kosher = 'haram',
// } = restaurant;
// console.log(roots, delivery, takeaway);

// Mutating variables

// let a = 1;
// let b = 2;
// let c = 3;

// const alpha = {
//   test1: 'Very',
//   test2: 'fucking',
//   test3: 'sleepy',
// };

// ({ test1: a, test2: b, test3: c } = alpha);
// console.log(a);

// const {
//   spaces: { uranus: planet1 },
//   spaces: { earth: planet2 },
//   spaces: { mars: planet3 },
// } = restaurant;

// console.log(planet1, planet2, planet3);

// const [first, , second] = restaurant.categories;
// // console.log(first, second);

// //receibe 2 return values from a function
// console.log(restaurant.order(0, 2));
// const [starter, main] = restaurant.order(0, 1); // van de returned waarde (een array)
// console.log(starter, main);

// const arr = [1, 2, 3, [4, 5]];

// const [a, b, , c] = arr;
// console.log(arr);

// const arr = [1, 2];
// const [a = 1, b = 1, c = 1] = arr; //als een van de array items leeg is krijg je dus geen defined maar een standaard waarde 1
// console.log(a, b, c);

// // 109 practise assignment

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];
// console.log(books);

// const [firstBook, secondBook, thirdBook] = books;

// console.log(firstBook, secondBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// console.log(rating);
// console.log(ratingsCount);

// console.log(typeof rating);
// console.log(typeof ratingsCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(threeStarRatings);

// restaurant.orderPizza(...restaurant.starterMenu);

// const person = { firstname: 'rachid', lastname: 'Oouali', age: 27 };

// func(person);

// function func(firstname, lastname, age)  { // gebruik maken van de keys die al bestaan
//   console.log(firstname, lastname, age);
// }

// let heeftEenMiljoen;
// const gra = 'Moet poepen';
// const isMiljonair = 'Ja';

// // const isMiljonair = heeftEenMiljoen ? true : false;

// // console.log(isMiljonair);

// console.log(heeftEenMiljoen ?? 'Sok gawih');

// const rest1 = {
//   name: 'Rachid',
//   street: 'Spaarndammerstraat',
// };

// rest1.street &&= '<ANONYMOUS>';

// console.log(rest1.street);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')✅
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players ✅ 
3. Create an array 'allPlayers' containing all players of both teams (22 players) ✅
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' ✅
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') ✅
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = [];
// const players2 = [];

// const [[gk, ...fieldPlayers]] = game.players;

// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...game.players[0], ...game.players[1]];

// console.log(allPlayers);

// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

// console.log(team1);
// console.log(draw);
// console.log(team2);

// const names = ['alice', 'bob', 'charlie', 'danielle'];
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here

// const newNames = names.map(x => x[0].toUpperCase() + x.slice(1));
// console.log(newNames);

// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// //  and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function (arbitNum) {
//   for (let i = 0; i < arbitNum; i++) console.log(allPlayers[i], game.score);
// };

// printGoals(5);
// // voor elke player -> naam, aantal goals, totaal aantal goals van de speler

// //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// game.odds.team1 < game.odds.team2 && console.log('Bayermss wins');
// game.odds.team1 > game.odds.team2 && console.log('Klawi wins ');

// let i;
// let el;
// let menu = ['pizza', 'pasta', 'lasagna'];

// for ([i, el] of menu.entries()) `${i + 1} ${el}`;

// console.log(i, el);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// const allAuthors = [];

// for (const author of books) {
//   typeof author.author === 'string'
//     ? allAuthors.push(author.author)
//     : allAuthors.push(...author.author);
// }

// console.log(allAuthors);

// for (const [num, author] of allAuthors.entries()) {
//   console.log(`${num + 1} ${author} `);
// }

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// console.log(newBook);

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// console.log(newBook2);
// const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];

// const getFirstKeyword = function (book) {
//   console.log(book?.keywords ?? 'Doesnt exist');
//   return book?.keywords ?? 'Doesnt exist';
// };

// getFirstKeyword(books[0]);

// //object
// const obj = { name: 'Rachid', age: '26', country: 'Morocco' };

// // functie
// function doSum({ name, age }) {
//   console.log(name);
//   console.log(age);
// }

// // Pass obj naar functie
// doSum(obj);

// const arr = ['Rachid', '25', 'Morocco'];

// function Dosum([firstName, age, country]) {
//   console.log(firstName, age, country);
// }

// Dosum(arr);

// const entries = [];
// const entries2 = [];

// for (const keys of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([keys]);
// }

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }

// console.log(entries);
// // Voeg aan de hand van de index lengte van entries  een value van goodreads Toe
// // console.log(entries);

// for (const props of Object.entries(books[0].thirdParty.goodreads)) {
//   entries2.push(props);
// }

// console.log(entries2);
// console.log(entries);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const user = {
//   name: 'Alice',
//   age: 30,
//   country: 'Netherlands',
// };

// for (const key in user) {
//   console.log(key); // property name (e.g. "name")
// }

// // Challenge 1
// let goal = 0;
// for (const playerAndGoal of game.scored) {
//   console.log(`Goal: ${(goal += 1)} ${playerAndGoal} `);
// }

// // Challenge 2
// let averageOdds;
// for (averageOdds of Object.values(game.odds)) {
//   console.log((averageOdds += averageOdds));
// }

// console.log(averageOdds / Object.keys(game.odds).length);

// // Challenge 3
// /* 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉*/
// const getOdds = [];
// const getTeams = [];

// // Get Teams
// let count = 0;
// for (const team of Object.values(game)) {
//   if (count < 2) {
//     console.log(team);
//     getTeams.push('victory ' + team);
//     count++;
//   }
// }

// //hardcode draw
// getTeams.splice(1, 0, 'draw');
// console.log(getTeams);

// // Get odds
// for (const [iterator, odd] of Object.values(game.odds).entries()) {
//   getOdds[iterator] = odd;
// }
// console.log(getOdds);

// for (const [iterator, team] of Object.entries(getTeams)) {
//   console.log(`Odd of ${team}: ${getOdds[iterator]}`);
// }

// const getTeams = []
// for (const team)

// console.log(Object.entries(game));
// const teams = [];
// for (let i = 0; i < 1; i++) {
//   teams.push(game[i]);
// }
// console.log(teams);
// const { team1, team2 } = game;
// console.log(team1, team2);

// 12.1

// const allKeywords = [];

// for (const getKeyword of books) {
//   getKeyword.keywords && allKeywords.push(...getKeyword.keywords);
// }

// console.log(allKeywords);

// // 12.2

// const uniqueKeywords = new Set(allKeywords);

// // 12.3
// uniqueKeywords.add('codin22');
// console.log(uniqueKeywords);

// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// // 12.4
// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// //12. 5
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze', 'Italy');

// console.log(rest);

// console.log(Object.entries(game));

// Quiz app

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));

// console.log(answer);

// console.log(answer === 3 ? question.get(true) : question.get(false));

// console.log(Object.entries(game).entries());

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1

// const GameEventsarr = new Set(gameEvents.values());
// console.log(GameEventsarr);

// //2
// gameEvents.delete(64);

// console.log(gameEvents);

// // 3
// console.log(`An event happened, on average, every ${90 / gameEvents.sizer}`);

// // 4\
// let gameHalf;
// for (const [minute, event] of gameEvents) {
//   console.log(minute, event);
//   gameHalf = minute < 92 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${gameHalf} ${minute}: ${event}`);
// }

// console.log(books[0].ISBN);
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// console.log(quote.slice(quote.indexOf('boxing', -1)));

// // isContributor('Julie Sussman (Contributor)');

// const isContributor = function (author) {
//   if (author.lastIndexOf('(Contributor') !== -1) {
//     author = true;
//     return author;
//   } else {
//     author = false;
//     return author;
//   }
// };

// console.log(isContributor('Julie Sussman (Contributor)'));

// console.log(quote.lastIndexOf('boxing'));

// const email = 'r.s.elouali@gmail.com';
// const loginEmail = '  r.s.elouali@gmail.com \n';

// const trimmedEmail = loginEmail.trim();

// console.log(trimmedEmail);

// const priceGB = '$100';
// console.log(priceGB.startsWith('$'));

//16.1

// const normalizeAuthorName = function (name) {
//   let formattedName;
//   formattedName = name.toLowerCase().trim();
//   console.log(formattedName);
//   if (formattedName.includes('(contributor)')) {
//     formattedName = formattedName.replace('(contributor)', '');
//   }
//   const space = formattedName.indexOf(' ');
//   console.log(`space is at ${space}`);

//   const firstName = formattedName.slice(0, space);
//   const lastName = formattedName.slice(
//     space + 1,
//     formattedName.lastIndexOf('')
//   );

//   console.log(firstName);
//   console.log(lastName);
//   console.log(formattedName.lastIndexOf(''));

//   const result =
//     firstName[0].toUpperCase() +
//     firstName.slice(1, firstName.lastIndexOf('')) +
//     ' ' +
//     lastName[0].toUpperCase() +
//     lastName.slice(1, lastName.lastIndexOf(''));
//   console.log(result);
// };
// normalizeAuthorName('JuliE sussMan (Contributor)');

// const plane = 'A320';
// console.log(plane.slice(1));

// console.log(plane.slice(0, 2));

//16.2
// const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);

// //16.3

// const logBookTheme = function (book) {
//   if (book.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (book.includes('algorithms') || book.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   } else {
//     console.log('error');
//   }
// };

// logBookTheme('structures');

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName].join('---');
// console.log(newName);

// const message = 'Go to gate 23';
// console.log(message.padStart(30, '+').padEnd(35, '+'));

// const message2 = 'Weather is bad';

// console.log(message2.repeat(5));

//17.1
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

// const convertBookCategories = function (categories) {
//   const splittedCategories = categories.split(';');

//   for (const splitted of splittedCategories) {
//     console.log(splitted);
//   }
// };
// convertBookCategories(
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics'
// );
//17.2
// const getKeywordsAsString = function (books) {
//   let keywordArr = [];

//   for (const book of books) {
//     keywordArr.push(...book.keywords);
//   }

//   console.log(keywordArr);
//   const keywordArrNoDup = [...new Set(keywordArr)];
//   console.log(keywordArrNoDup);
//   const keywordString = keywordArrNoDup.join(';');
//   console.log(keywordString);
// };

// getKeywordsAsString(books);

//17.3

// const bookChapters = [
//   ['The Basics', 14],
//   ['Sorting', 254],
//   ['Searching', 372],
//   ['Graphs', 526],
//   ['Strings', 706],
// ];

// const logBookChapters = function (bookChapters) {
//   for (const [chapter, page] of bookChapters) {
//     console.log(`${chapter.padEnd(30, '.')}${page}`);
//   }
// };

// logBookChapters(bookChapters);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// const textArea = document.body.append(document.createElement('textarea'));
// const btn = document.createElement('button');
// document.body.append(btn);
// const defaultText = (document.querySelector('textarea').value = `underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure`);

// btn.addEventListener('click', function () {
//   let text = document.querySelector('textarea').value;
//   text = text.toLowerCase().trim();
//   let textArr = text.split('\n');

//   let formattedtext;
//   for (let [i, item] of textArr.entries()) {
//     item = item.trim();
//     item = item.split('_');
//     let item2 = item[1].slice(0, 1).toUpperCase() + item[1].slice(1);
//     let joinedItems = item[0] + item2;
//     console.log(joinedItems.padEnd(20, ' ') + '✅'.repeat(i + 1));
//   }
// });

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// .replaceAll('_', '')
// .replace(';', ' ')
// .replace(';', 'to')
// .replace(';', ' ')
// .replace('93766109', '')
// .replace('2133758440', '')
// .replace('0943384722', '')
// .replace('943384722', '')
// .replace('93766109', '')
// .replace('7439299980', '')
// .replace('93766109', '')
// .replace('93766109', '')
// .replace('2323639855', '')
// .replaceAll('Delayed', 'Delayed ');

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type
    .replace('_', type.startsWith('_Delayed') ? '🔴 ' : '')
    .replace('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`;

  console.log(output.padStart(44));
}
