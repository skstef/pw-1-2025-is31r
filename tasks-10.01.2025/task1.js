const array = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

function numbersLessThanFive(arr) {
    return arr.filter(num => num < 5);
}

function findPositionsOfMinMax(arr) {
    const maxPos = arr.indexOf(Math.max(...arr));
    const minPos = arr.indexOf(Math.min(...arr));
    return { maxPos, minPos };
}

function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

function elementsGreaterThanMean(arr) {
    const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return arr.filter(num => num > mean);
}

console.log("Numbers less than 5:", numbersLessThanFive(array));
const { maxPos, minPos } = findPositionsOfMinMax(array);
console.log("Position of max value:", maxPos, ", Position of min value:", minPos);
console.log("Array sorted in descending order:", sortDescending(array));
console.log("Elements greater than mean:", elementsGreaterThanMean(array));
