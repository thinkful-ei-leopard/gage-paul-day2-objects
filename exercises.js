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


// * FACTORY FUNCTIONS WITH LOTR

// function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
//     return {
//         name,
//         nickname,
//         race,
//         origin,
//         attack,
//         defense,
//         weapon,
//         describe() {
//             return `${name} is a(n) ${race} from ${origin} and uses ${weapon}`
//         },
//         evaluateFight(char) {
//             if (this.attack - char.defense < 0 && char.attack - this.defense < 0) {
//                 return `${char.nickname} takes 0 damage and ${this.nickname} receives 0 damage.`;
//             } else if (this.attack - char.defense < 0) {
//                 return `${char.nickname} takes 0 damage and ${this.nickname} receive ${char.attack - this.defense} damage.`;
//             } else if (char.attack - this.defense < 0) {
//                 return `${char.nickname} takes ${this.attack - char.defense} damage and ${this.nickname} receive 0 damage.`;
//             } else {
//                 return `${char.nickname} takes ${this.attack - char.defense} damage and ${this.nickname} receive ${char.attack - this.defense} damage.`;
//             }
//         }
//     }
// }

// let characters = [
//     createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow'),
//     createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a Wooden Staff'),
//     createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
//     createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2), 'the String and Barrow Blade',
//     createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
//     createCharacter('Arwen Undomiel', 'Arry', 'Half-Elf', 'Rivendell', 6, 4, 'Hadhafang')
// ]

// console.log(characters.find(item => item.nickname === 'aragorn').describe());
// let theHobbitses = characters.filter(item => item.race === 'Hobbit');
// let strongAttackers = characters.filter(item => item.attack > 5);
