TypeScript provides type safety while running on javascript compiler as browsers and Node.js engines only execute JavaScript. TypeScript compiler (`tsc`) helps javascript by adding types to almost everything, which produces a configuration rules defined in the `tsconfig.json` file. we can change this file according to any project environment. 

When `tsc` is ran, the compiler helps by:

Running tsc --watch in the terminal helps developer by checking for type errors, run time error etc. Showing directly in the terminal log. Typescript shows all types, interfaces, and annotations are perfectly written or not (by showing the error). Tsc helps in compiling modern typescript syntax by transforming it to executable JavaScript.

#Example
// Input TypeScript
interface Product {
  name: string;
  price: number;
}
const item: Product = { name: "Pen", price: 10 };

// Output JavaScript (tsc erases the interface entirely)
const item = { name: "Pen", price: 10 };