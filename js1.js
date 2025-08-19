// var:
// Scope: Function-scoped (visible throughout the function where it’s declared).

// Re-declaration: Allowed.

// Re-assignment: Allowed.

// Hoisting: Hoisted to the top of its scope, initialized with undefined.

// Best for: Legacy code, generally avoid using in modern JavaScript.
var x  = 4;
var x = 5;
console.log(x)
// let:
// Scope: Block-scoped (only accessible inside {} where it’s declared).

// Re-declaration:Not allowed in the same scope.
//Globally it can be accessed
// Re-assignment:Allowed.

// Hoisting: Hoisted but not initialized (Temporal Dead Zone error if used before declaration).

// Best for: Variables that will change.
let y = 10
if(true) {
    let y = 20
    console.log(y)
}
console.log(y)

// const:
// Scope: Block-scoped.

// Re-declaration: Not allowed in the same scope.

// Re-assignment: Not allowed (constant reference).

// Hoisting: Same as let (hoisted but not initialized).

// Best for: Values that should never change.
const z = 50
console.log(z)

//Operators
/*Arithmetic operators
+, -, *, /, %, **, ++, --*/

/*Assignment operators
=, +=, -=, *=, /=, **=*/

/*Comparison operators
==, ===, !=, !==, > , <, >=, <=*/

/* Logical operators
&&, !, ||*/

/* Bitwise operators
&, ^, ~, <<, >>*/

/* Ternary conditional operator
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result)*/

/*Type Operators
Operator	Example	Result
typeof	typeof 123	"number"
instanceof	[] instanceof Array	true*/
// The instanceof operator checks whether an object
//  is an instance of a particular constructor (class or function)
let a = 10
console.log(typeof a)
console.log("123" instanceof String) //doesn't work for primitive values
function Car() {
    console.log("benz")
}
let d = new Car();
let e = new Car();
console.log(d instanceof Car)

//Nullish Coalescing
//returns right-hand value if left value is null or undefined
let name = null
console.log("chandana" ?? name)

/* Datatypes
Primitive datatypes: (Immutable, stored directly in memory, compared by value)
* String → Represents text.
* Number → Represents integers & floating-point numbers.
* BigInt (ES2020) → For very large integers beyond Number.MAX_SAFE_INTEGER.
* Boolean → Logical values: true or false.
* Undefined → A variable declared but not assigned a value.
* Null → Intentional "nothing" value.
* Symbol (ES6) → Unique and immutable identifier, often used as object keys.*/

// Non-primitve datatypes
// Stored as references in memory, compared by reference
// Object → Collection of key-value pairs.
// Array → Ordered collection (special type of object).
// Function → Callable object.