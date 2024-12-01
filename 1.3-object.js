"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "moni",
    email: "moni@gmail.com",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    // function body
}
var newUser = { name: "moni", isPaid: false, email: "moni@gamil.com" };
// Option 1: Exclude the extra email property
createUser({ name: "moni", isPaid: false });
// Option 2: Use type assertion to allow extra properties
createUser(newUser);
function createCourse() {
    return { name: "C++", price: 150 };
}
createCourse();
function createUsers(user) {
    return { name: "", email: "", isActive: true };
}
createUsers({ name: "", email: "", isActive: true });
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var myUsers = {
    _id: "8",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUsers.email = "moni@gmial.com";
