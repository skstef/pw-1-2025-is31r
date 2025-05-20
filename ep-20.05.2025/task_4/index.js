function countOccurrences(arr, value) {
  return arr.filter((item) => item === value).length;
}

// Usage examples
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); // Output: 3
console.log(countOccurrences(["a", "b", "a", "c"], "a")); // Output: 2
