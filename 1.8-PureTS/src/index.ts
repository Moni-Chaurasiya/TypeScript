console.log("typescript is here")

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
class User{

     protected  courseCounts:number=1 // It can access in any class
     readonly city:string="Gorakhpur" 

     constructor(
        public email:string,
        public name:string,
     ){
        //  this.email= email;
        //  this.name=name
     }

     private deleteToken(){
        
            console.log("Token deleted")
        
     }
     get getAppleEmail():string{
        return `apple${this.email}`
     }
     get courseCount():number{
        return this.courseCounts
     }

     set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1 ")
        }
        this.courseCounts=courseNum
     }
 }

class subUser extends User {
 isFamily :boolean =true
 changeCourseCount(){
    this.courseCounts =4
 }
}





const moni = new User("m@m.com", "moni");

console.log(moni);

