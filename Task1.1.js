//Task 1.1: Creating and Accessing Arrays

//Createing and Accessing Arrays
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Initial fruits:", fruits);

// Print the first and last item in the array.
console.log("First item: "+fruits[0]);
console.log("Last item: "+fruits[4]);

// Add new fruit at the end
fruits.push("Strawberry");
console.log("After adding new fruit:", fruits);

// Remove the second fruit (index 1)
fruits.splice(1, 1);
console.log("After removing second fruit:", fruits);

// Find the length of the array
console.log("Array length:", fruits.length);