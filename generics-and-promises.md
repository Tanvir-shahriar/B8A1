Asynchronous operations are fundamental of the modern Javascript and TypeScript. When fetching API data or json files, the syntax allows us to return a `Promise` that helps when handling error. Generics allow developers to create reusable, type-safe template which can be used to extend if needed or used as it is.

Generics works like the type variable. Without duplicating a specific type into a function or class, a generic placeholder which we write as `<T>`—allows the developers to use the type dynamically when needed.

#example
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numbers = wrapInArray(42);       // number[]
const strings = wrapInArray("hello");  // string[]