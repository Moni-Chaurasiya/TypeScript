"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["Moni", "chaurasiya", 8];
var use;
use = ["moni", 8, true];
console.log(use);
var rgb = [255, 123, 345];
var newUser = [108, "example@google.com", false];
newUser[1] = "moniC.com";
newUser.push(true);
var AISLE = 0;
var middle = 1;
var window = 2;
var seat = 0;
if (seat === 0) {
    middle;
}
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 4] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var MoniSeat = SeatChoice.AISLE;
