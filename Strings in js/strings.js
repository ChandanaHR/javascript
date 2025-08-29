// A string in JavaScript is a sequence of characters enclosed in single quotes ('), double quotes ("), or backticks (``).
// Strings are immutable (once created, they cannot be changed directly).
//Using string literals
let str1 = "hello"
console.log(str1)
//Using string constructor
let str2 = new String("world")
console.log(str2)

let str3 = "Chandana"
//String methods
//Character access
console.log(str3.charAt(5))
console.log(str3.charCodeAt(0))
//search methods
let str4 = "I love Javascript and Java"
console.log(str4.indexOf("Java")) //First Java starts at index 7
console.log(str4.indexOf("Java",10)) //First 10th index it starts searchine for the string
console.log(str4.indexOf("Python")) //Bcz python is not found

console.log(str4.lastIndexOf("Java"))
console.log(str4.lastIndexOf("Java",15))
//includes => checks whether a substring is present in a string
console.log(str4.includes("Python"))
console.log(str4.includes("I",8)) //search starts at index 1
//startsWith => checks whether a string starts with a particular string
console.log(str4.startsWith("Java"))
console.log(str4.startsWith("I"))
console.log(str4.startsWith("Java",7)) //starts search at index 7
console.log(str4.endsWith("Java"))
console.log(str4.endsWith("Java",10))
//match(regexp)
console.log(str4.match(/Java/))
console.log(str4.match(/Java/g))
//Extracting parts of string
//slice(start,end)
console.log(str4.slice(0,4))
console.log(str4.substring(0,4))

//String modification methods
let str5 = "      I like Java. Java is great!       "
//str.replace("os","string to be replaced")
console.log(str5.replace("Java","JS")) //Only first Java is replaced
console.log(str5.replace(/Java/g, "JS"))
console.log(str5)
//str.replaceAll("os","string to be replaced")
console.log(str5.replaceAll("Java","JS"))
//toUpperCase
console.log(str5.toUpperCase())
//toLowerCase
console.log(str5.toLowerCase())
//trim  Removes whitespace from both ends
console.log(str5.trim())
// trimStart() / trimEnd() - Removes whitespace from one side
console.log(str5.trimStart())
console.log(str5.trimEnd())
// padStart(targetLength, padString) - Pads a string 
// from the start until it reaches given length.
let num = "907"
console.log(num.padStart(6,"0"))
// padEnd(targetLength, padString) - Pads a string from the end.
console.log(num.padEnd(4,"*"))
//repeat(count) - Repeats the string given number of times.
let num1 = "ab"
console.log(num1.repeat(5))
//split(separator,limit)
console.log("applebanana,watermelon".split(","))
//Iteration of string
let s = "hello"
for(let ch of s){
    console.log(ch)
}
//concat method
let text1 = "hello"
let text2 = "world"
let text3 = text1.concat("@"+ text2)
console.log(text3)

let str6 = "Naveen abhinesh dhanush tamil"
console.log(str6.slice(-8,-1))
console.log(str6.substring(-1,-8))
