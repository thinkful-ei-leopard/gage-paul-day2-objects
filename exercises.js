'use strict';

// * Object initializers and methods

// let loaf = {
//     flour: 300,
//     water: 210,
//     hydration() {
//         return this.water / this.flour * 100
//     }
// }

// console.log(loaf.hydration());

// * ITERATING OVER AN OBJECT'S PROPERTIES

// let myObject = {
//   foo: 'prop1',
//   bar: 'prop2',
//   fum: 'prop3',
//   quux: 'prop4',
//   spam: 'prop5'
// };

// for(const key in myObject) {
//   console.log(`${key}: ${myObject[key]}`);
// }

// * ARRAYS IN OBJECTS

// let meals = ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'];

// console.log(meals[3]);

// * ARRAYS OF OBJECTS & PROPERTIES THAT ARENT THERE

// let benObject = {
//   name: 'Ben',
//   jobTitle: 'teacher',
// };

// let leeObject = {
//   name: 'Lee',
//   jobTitle: 'producer',
//   boss: false
// };

// let nickObject = {
//   name: 'Nick',
//   jobTitle: 'ranger',
//   boss: false
// };

// let peopleArray = [benObject, leeObject, nickObject];

// peopleArray.forEach(person => {if (person.boss === false) {
//     console.log(`${person.jobTitle} ${person.name} reports to ${benObject.name}`);
// } else {
//     console.log(`${person.jobTitle} ${person.name} reports to nobody`);
//     }
// }
// );

// * CRACKING THE CODE !!!!!!!!!!!!111111

function decode(word) {
  let wordObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  if (word[0] !== 'a' && word[0] !== 'b' && word[0] !== 'c' && word[0] !== 'd') {
    return ' ';
  } else {
    return word[wordObject[word[0]]];
  }
} 

function decodeWords(sentence) {
  let splitSentence = sentence.split(' ');
  let newArray = [];
  splitSentence.forEach(word => newArray.push(decode(word)));
  let finalArray = newArray.join('');
  return finalArray;
}

let test = decodeWords('craft block argon meter bells brown croon droop');
console.log(test);
