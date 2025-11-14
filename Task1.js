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


//Task 1.2: Looping Through an Array

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach()
console.log("Using forEach():");
fruits.forEach((fruit) => {
    console.log(fruit);
});

/*
Question: What's the difference between using a normal for loop and forEach()?

Answer:
    for loop: Traditional loop that gives you access to index, allows breaking early with 'break'
    forEach(): Higher-order function that takes a callback, more readable but cannot break early
    forEach() is generally preferred for simple iteration as it's more declarative
*/