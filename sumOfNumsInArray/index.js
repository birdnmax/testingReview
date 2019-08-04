//write a function that take in an array of numbers and return the sum of those numbers. 

const arrSum = (arr) => {
    return arr.reduce((a, b) => a + b)
}

console.log(arrSum([1, 2, 3, 4, 5, 6, 7]))
console.log(arrSum([1, 2, 3, 4, 5]))
console.log(arrSum([1, 2, 3, 7]))