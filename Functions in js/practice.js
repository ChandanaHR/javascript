// function basic() {
//     console.log("good morning")
//     console.log("good afternoon")
//     console.log("good night")
// }
// basic()
// basic()
// basic()
// basic()
// basic()
// basic()

// function sum(a,b) {
//     return a+b
// }
// let res = sum(2,3)
// console.log("sum is: " +res)

// function sum(a,b=4) {
//     return a+b
// }
// let res = sum(10)
// console.log(res)

// function greet(name="chandu") {
//     console.log(name)
// }
// greet("naveen")

// const one = function() {
//     console.log("Hello, good afternoon")
// }
// one()
// const two = function(a,b) {
//     console.log("Hello, good afternoon")
//     return a*b
// }
// let res1 = two(2,3)
// console.log(res1)

// const sqaure = () => console.log("Hi, good night")
// sqaure()
// const sum = (n) => n*n*n
// console.log(sum(4))


// const outer = (fn, x) => { //2nd function
//     return fn(x)
// }
// const multiply = (x) => x*x; //1st function
// console.log(outer(multiply,7))

// (function call() {
//     console.log("Invoke")
// })();

// function outer() {
//     let count=0;
//     count++;
//     return function inner() {
//          count++;
//          return count
//     }
// }
// const counter = outer()
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function factorial(n) {
//     if(n==0) {
//         return 1;
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

// function multiply(a,b) {
//     console.log(a*b)
// }
// multiply(2,3)

function multiply(a) {
    return function(b) {
        return a*b
    }
}
let res = multiply(2)(3)
console.log(res)