function multiplyTwo(num:number){
   // num.toUpperCase()  
    return console.log(num * 2);
}

function multiply(num:number):number{
    // num.toUpperCase()  
    // return console.log(num * 2);
     if(num >5){
        return 5;
     }
      return num*2;

  // return "moni" --> not allowed it should only return number
 }
 
 const getHello =(s:string):string=>{
  return ""
 }

 //const heross = ["moni","spiderman","ironman"]
 const heros= [1,2,3]
heros.map(hero=>{
    return `hero is ${hero}`
})


function getUpper(val:string){
    return console.log(val.toUpperCase())
}
function signUpUser(name:string,email:string,isPaid:boolean){}


let loginInUser=(name:string,email:string,isPaid:boolean=false)=>{}

signUpUser("moni","moni@gmail.com",false);

loginInUser("moni","moni@gmail.com"); // Third parameter is optional


multiplyTwo(7)
console.log(multiply(7));
getUpper("moni");

function consoleError(errmsg:string): void{
    console.log(errmsg);
}

// never will throw error and stop execution of code or it terminate the code. 
function handleError(errmsg:string): never{
    throw new Error(errmsg);
}
export {}