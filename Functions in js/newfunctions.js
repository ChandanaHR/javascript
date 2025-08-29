//Basics of functions
// Functions are reusable blocks of code.
//function declaration
// function greet() {
//     console.log("Good night")
// }
// greet();
// //function with parameters
// function sum(a,b) {
//     return a+b;
// }
// let res = sum(2,3)
// console.log(res)
// // Function with Default Parameters
// function greet1(name="chandu") {
//     console.log(`Hello ${name}`)
// }
// greet1()


// /* Intermediate functions*/
// //Function expression
// const multiply = function(a,b) {
//     return a*b
// }
// multiply(2,3)

// //Arrow functions
// const square = (n) => {
//     return n*n
// }
// let res1 = square(5)
// console.log(res1)
// //Instead of writing like above
// const square1 = (n) => n+n
// console.log(square1(5))

// //Higher order functions
// function higher(fn, x) {
//     return fn(x)
// }
// const double = (n) => n*n
// console.log(higher(double, 6))

//Advanced functions
//Immediately invoked functions
// (function() {
//   console.log("IIFE runs immediately!");
// })();
// //Closures
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count
//     }
// }
// const counter = outer()
// console.log(counter())
// console.log(counter())
// //Recursion
// function factorial(n) {
//     if(n==0) return 1;
//     return n*factorial(n-1)
// }
// console.log(factorial(5))
// //Function Currying: Currying is the process of transforming a function with multiple arguments 
// // into a sequence of functions that each take one argument.
// function multiply(a,b) {
//     console.log(a*b)
// }
// multiply(2,3)
// //Curried version
// function multiply1(a) {
//    return function(b) {
//        return a*b
//      }
//  }
// let res2 = multiply1(2)(3)
// console.log(res2)
//Function composition
const main = (f,g) => (x)=> f(g(x))
const doublenum = (x) => x*2
const addthree = (x) => x+3
console.log(main(doublenum, addthree)(5))

//Generator functions
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGen();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
//Function as constructor
function Person(name) {
  this.name1 = name;
}
const p1 = new Person("John");
console.log(p1.name1); // John
