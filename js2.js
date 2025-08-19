// Type conversion:
//     Converting from one datatype to another datatype
//     Implicit conversion, Explicit conversion
//Implicit conversion
let no1 = '5'+2
console.log(no1)

let no2 = 5+true
console.log(no2)

let result3 = '5' * 2;
console.log(result3);

console.log(5 == '5');

//Explicit conversion
let num = Number("123");
console.log(num);
let str = String(123);
console.log(str);
let boolNum = Number(true);
console.log(boolNum);
let intVal = parseInt("123.45");
console.log(intVal);
let floatVal = parseFloat("123.45");
console.log(floatVal);

// Types of Control Statements in JavaScript
// Conditional Statements (Decision Making)
//if statement
//if..else statement
//if..else..if statement
//switch statement
let day = 2;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
//Looping statements
    //while  loop
let k = 1;
while (k <= 5) {
  console.log("Number:", k);
  k++;
}
    //do-while loop
let i = 1;
do {
  console.log("Value:", i);
  i++;
} while (i <= 5);
    //for loop
for (let j = 1; j <= 5; j++) {
  console.log("Count:", j);
}
// for...in loop (iterate over object properties)
let students = {name:"chandana",age:25}
for(let key in students) {
    console.log(key+":"+students[key])
}
// for...of loop (iterate over arrays/iterables)
let colors = ["red","green","blue"]
for(let color of colors) {
    console.log(color)
}

//Jumping Statements
// break → exits loop/switch immediately
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // prints 1, 2
}

// continue → skips current iteration and moves to next
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // prints 1, 2, 4, 5
}
