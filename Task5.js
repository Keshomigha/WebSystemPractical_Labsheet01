//Task 5: Challenge Activity

const products = [
    {name: "Keyboard", price: 2500, qty: 2},
    {name: "Mouse", price: 1500, qty: 3},
    {name: "Monitor", price: 22000, qty: 1}
];

// Calculate total value using reduce
const totalValue = products.reduce((total, product) => {
    return total + (product.price * product.qty);
}, 0);

console.log("Products:", products);
console.log("Total value of all products: Rs.", totalValue);
