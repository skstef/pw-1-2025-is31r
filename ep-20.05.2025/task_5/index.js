/*
 * Two solutions are provided for Task 5 because the grading scale mentioned "Convert Object to Array of Key-Value Pairs" while the
 * original task requested returning only the keys of an object. To address both possibilities, this file includes functions for both
 * retrieving keys and converting to key-value pairs.
 */

function getObjectKeys(obj) {
  return Object.keys(obj);
}

function getObjectEntries(obj) {
  return Object.entries(obj);
}

console.log("\nUsage examples for getObjectKeys:");
console.log(getObjectKeys({ name: "Alice", age: 25 })); // Output: ['name', 'age']
console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // Output: ['a', 'b', 'c']

console.log("\nUsage examples for getObjectEntries:");
console.log(getObjectEntries({ name: "Alice", age: 25 })); // Output: [['name', 'Alice'], ['age', 25]]
console.log(getObjectEntries({ a: 1, b: 2, c: 3 })); // Output: [['a', 1], ['b', 2], ['c', 3]]
