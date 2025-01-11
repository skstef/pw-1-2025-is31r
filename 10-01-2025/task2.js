function uniqueSorted(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

const arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const result = uniqueSorted(arr);
console.log(result);
