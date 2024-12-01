//interface
interface User {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string,
    // startTrail:()=>string
    startTrail():string
    getCoupon(componname:string,value:number):number
}
const moni :User={
     dbId : 1, 
     email:"m@m.com",
     userId:2211,
     startTrail:()=>{
       return "started trailer"
     },
     getCoupon:(name:"moni01",value:95)=>{
       return 10
     },
     githubToken:"monichaurasiya@abc.#@$#@%^&*"
}
moni.email="m@c.com"

interface User{
    githubToken:string
}
interface Admin extends User{
    role:"admin" | "ta" | "learner"
}

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

 
export{}