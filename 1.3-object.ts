const User = {
    name: "moni",
    email: "moni@gmail.com",
    isActive: true
};

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {
    // function body
}

let newUser = { name: "moni", isPaid: false, email: "moni@gamil.com" };

// Option 1: Exclude the extra email property
createUser({ name: "moni", isPaid: false });

// Option 2: Use type assertion to allow extra properties
createUser(newUser as { name: string; isPaid: boolean });

function createCourse(): { name: string, price: number } {
    return { name: "C++", price: 150 };
}
createCourse();



type users = {

    name: string;
    email: string;
    isActive: boolean;
};

type MyString = string;

function createUsers(user: users): users {
    return {name:"",email:"",isActive:true}
}
createUsers({name:"",email:"",isActive:true})

//A type alias is exactly that - a name for any type. The syntax for a type alias is:
type Point = {
    x: number;
    y: number;
  };
   
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });
 type Users ={
    readonly _id :string
    name:string
    email:string
    isActive:boolean
    debitCard?:number
 }

 let  myUsers:Users ={
    _id :"8",
    name:"h",
    email:"h@h.com",
    isActive:false
 }
 myUsers.email= "moni@gmial.com"
 //myUsers._id="15"  // Cannot modify id because it is read only

type cardNumber= {
    cardnumber:string
}
type cardDate = {
    cardDate:string
} 
type cardDetails = cardNumber & cardDate & {
    cvv:number
}
export{}