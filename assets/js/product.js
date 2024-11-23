// Task 1
function calcTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "PC", price: 1.2 },
    { name: "IPhone", price: 0.8 },
    { name: "Laptops", price: 1.5 },
];
var totalPrice = calcTotalPrice(products);
console.log("Total Price: $".concat(totalPrice.toFixed(2)));
// Task 2
function isValid(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
var email = "test@example.com";
console.log("".concat(email, " is valid: ").concat(isValid(email)));
// TypeScript Explanation
/*
TypeScript is a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript, and that every JavaScript program is a syntactically legal TypeScript program. Also, the runtime behavior of TypeScript and JavaScript is identical.

how it runs ?
you can do it by using the typeScript Compiler tsc

first you need to install the typeScript using a package manager (npm, yarn)
Compile your TypeScript code to JavaScript throught this command (npx tsc yourfile.ts)

*/
