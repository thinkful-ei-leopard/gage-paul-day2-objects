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

let myObject = {
  foo: 'prop1',
  bar: 'prop2',
  fum: 'prop3',
  quux: 'prop4',
  spam: 'prop5'
};

for(const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}