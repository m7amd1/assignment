// Task 1

interface Product {
  name: string;
  price: number;
}

function calcTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
  { name: "PC", price: 1.2 },
  { name: "IPhone", price: 0.8 },
  { name: "Laptops", price: 1.5 },
];

const totalPrice = calcTotalPrice(products);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);



// Task 2

function isValid(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const email = "test@example.com";
console.log(`${email} is valid: ${isValid(email)}`)


// TypeScript Explanation

/* 
TypeScript is a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript, and that every JavaScript program is a syntactically legal TypeScript program. Also, the runtime behavior of TypeScript and JavaScript is identical.

how it runs ?
you can do it by using the typeScript Compiler tsc

first you need to install the typeScript using a package manager (npm, yarn)
Compile your TypeScript code to JavaScript throught this command (npx tsc yourfile.ts)

*/
