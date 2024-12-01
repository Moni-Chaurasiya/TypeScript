const user:(string | number)[]=["Moni","chaurasiya",8]

let use:[string,number,boolean]
use=["moni",8,true]
console.log(use);

let rgb:[number,number,number]=[255,123,345];

type User=[number,string,boolean]
const newUser:User=[108,"example@google.com",false]
newUser[1]="moniC.com"
newUser.push(true);

const AISLE=0
const middle=1
const window=2
let seat =0
if(seat===0){
    middle
}

enum SeatChoice{
    AISLE="aisle",
    MIDDLE="middle",
    WINDOW=3,
    FOURTH
}
const MoniSeat= SeatChoice.AISLE
export{}