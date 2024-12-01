"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyTwo(num) {
    // num.toUpperCase()  
    return console.log(num * 2);
}
function multiply(num) {
    // num.toUpperCase()  
    // return console.log(num * 2);
    if (num > 5) {
        return 5;
    }
    return num * 2;
    // return "moni" --> not allowed it should only return number
}
var getHello = function (s) {
    return "";
};
//const heross = ["moni","spiderman","ironman"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function getUpper(val) {
    return console.log(val.toUpperCase());
}
function signUpUser(name, email, isPaid) { }
var loginInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("moni", "moni@gmail.com", false);
loginInUser("moni", "moni@gmail.com"); // Third parameter is optional
multiplyTwo(7);
console.log(multiply(7));
getUpper("moni");
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
