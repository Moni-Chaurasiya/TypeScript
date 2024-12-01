"use strict";
// Typescript is not about reinventing Javascript
// Don't use typescript, unless... Type Safety
/*
 2+"2" give output '22' in javascript
 typescript is used to stop this behaviour

 javascript is subpart of typescript

 What typescript does : Static Checking
 TypeScript just analyze the code as we type . That's it

 it is a development tool. Our project still run JS

*/
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "Moni", age: 10 };
console.log("Moni");
console.log(user.name);
// Types:
/*
 Number
 String
 Boolean
 Null
 Undefined
 Void
 Object
 Array
 Tuples
 Never
 Unknown
*/
// Situations
/**
 * A function accepts 2 numbers
 * A function returns a string
 */
//syntax
//let myNum= 8;
//String
var myNum = "8";
myNum.toLowerCase();
var names = "Moni";
console.log(names);
//Number
var myId = 15;
myId.toString;
console.log(myId);
var userId = 15.5; // better way to declare number
userId.toFixed();
// boolean
var isMe = true;
console.log(isMe);
isMe = false; // avoid
console.log(isMe);
//any 
var greet;
function greeting() {
    return "Hello Moni";
}
greet = greeting();
console.log(greet);
