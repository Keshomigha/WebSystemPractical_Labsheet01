//Task 2.1: Transforming Arrays

const numbers = [2, 5, 8, 10, 12];

// Use .map() to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Use .filter() to keep only numbers greater than 6
const filteredNumbers = numbers.filter(num => num > 6);
console.log("Numbers greater than 6:", filteredNumbers);

// Use .reduce() to find the sum of all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers:", sum);



//Task 2.2: Searching and Sorting

// Check if 8 is in the array
console.log("Is 8 in the array?", numbers.includes(8));

// Find the index of 10
console.log("Index of 10:", numbers.indexOf(10));

// Sort the array in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted numbers in array:", sortedNumbers);