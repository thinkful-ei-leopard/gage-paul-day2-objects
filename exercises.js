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

// * ARRAYS OF OBJECTS

let benObject = {
  name: 'Ben',
  jobTitle: 'teacher'
};

let leeObject = {
  name: 'Lee',
  jobTitle: 'producer'
};

let nickObject = {
  name: 'Nick',
  jobTitle: 'ranger'
};

let peopleArray = [benObject, leeObject, nickObject];

peopleArray.forEach(person => console.log(`${person.name}: ${person.jobTitle}`));

