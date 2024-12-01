let score:number | string | boolean =33

score = 44
 score ="15"

 type User = {
    name:string;
    id:number
 }

 type Admin ={
    username:string;
    id:number
 }

 let moni: User | Admin= {
    name:"moni",id:334
 }

 moni ={username:"chaurasiya",id:8}

 function getDbId(id:number | string){
    console.log(`DB id is :${id}`);
 }

 getDbId(3)
 getDbId(9)

 
 function getDbid(id:number | string){
    // id.toLowerCase( )
    if(typeof id == "string"){
        id.toLowerCase();
    }
    else{
        id = id+2;
    }
 }

 const date :number[]=[1,2,3]
 const data2:string[]= ["1","2","3"]
 const data3:string[] | number[]= ["1","2","3"] // it can be either all string and all number but not mixed 
 const data4:(string | number | boolean)[]= ["1","2",3,true] // it can be either all string and all number but not mixed 

 let seatAllotment:"lower"|"middle"|"window";
 seatAllotment="lower"
// seatAllotment="crew"

export{}