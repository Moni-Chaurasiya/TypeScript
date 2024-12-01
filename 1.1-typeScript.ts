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

var user ={name:"Moni", age:10}

console.log("Moni")
console.log(user.name)

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
let myNum= "8"

myNum.toLowerCase()

var names : string = "Moni"
console.log(names);

//Number

// number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
let myId :number = 15;
myId.toString
console.log(myId);

let userId = 15.5;  // better way to declare number
userId.toFixed()

// boolean
let isMe :boolean= true;
console.log(isMe);
isMe=false;  // avoid
console.log(isMe)

//any 
let greet:string;
function greeting(){
    return "Hello Moni"
}
greet = greeting();
console.log(greet)


export {}