/*
 * Two solutions are provided for Task 3 because the grading scale mentioned "Reverse an Array" while the original task requested
 * doubling each number in an array. To address both possibilities, this file includes functions for both doubling and reversing arrays.
 */

function doubleArray(arr) {
  return arr.map((num) => num * 2);
}

function reverseArray(arr) {
  return arr.slice().reverse();
}

console.log("Usage examples for doubleArray:");
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]

console.log("\nUsage examples for reverseArray:");
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
