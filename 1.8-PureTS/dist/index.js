"use strict";
console.log("typescript is here");
// class User{
//    public  email:string
//     name:string
//    // private readonly city:string="Gorakhpur"   // cannot access
//     city:string=""
//     constructor(email:string,name:string){
//         this.email= email;
//         this.name=name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.courseCounts = 1; // It can access in any class
        this.city = "Gorakhpur";
        //  this.email= email;
        //  this.name=name
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this.courseCounts;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1 ");
        }
        this.courseCounts = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCounts = 4;
    }
}
const moni = new User("m@m.com", "moni");
console.log(moni);
