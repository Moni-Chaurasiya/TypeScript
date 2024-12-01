var score = 33;
score = 44;
score = "15";
var moni = {
    name: "moni", id: 334
};
moni = { username: "chaurasiya", id: 8 };
function getDbId(id) {
    console.log("DB id is :".concat(id));
}
getDbId(3);
getDbId(9);
function getDbid(id) {
    // id.toLowerCase( )
    if (typeof id == "string") {
        id.toLowerCase();
    }
    else {
        id = id + 2;
    }
}
var date = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"]; // it can be either all string and all number but not mixed 
var data4 = ["1", "2", 3, true]; // it can be either all string and all number but not mixed 
var seatAllotment;
seatAllotment = "lower";
// seatAllotment="crew"
