/*  kono ekta object a jodi kono mathod thake tahole 
    normally console.log(this) korle sei object ta kei dekhabe.
    mane "this" diye amra parent object tar property gula access korte pari.
    kintu jodi amra sei method ta k call korar somoy  onno r ekta object k 
    bind kore dei tahole "this" notun object ta k access korbe
*/

const touhidObject = {
    name: "Touhid",
    balance: 5000,
    email: 'touhid4bd@gmail.com',
    phone: '01765472894',
    treatDay: function (expense, tax) {
        console.log("accessing object: ", this);
        console.log(this.name, "er treat deyar por balance");
        return this.balance = this.balance -  expense - tax;
    }
}

const topuObject = {
    name: "Topu",
    balance: 5000,
}

//Calling touhidObject's Method
console.log("\nCalling touhidObject's Method");
const touhidTreatDay = touhidObject.treatDay(500, 100);
console.log(touhidTreatDay);

//Borrowing touhidObject's Method using "bind"
console.log("\nBorrowing touhidObject's Method Using bind");
const topuTreatDayUsingBind = touhidObject.treatDay.bind(topuObject);
console.log(topuTreatDayUsingBind(200, 50));

//Borrowing touhidObject's Method using "call"
console.log("\nBorrowing touhidObject's Method Using call");
const topuTreatDayUsingCall = touhidObject.treatDay.call(topuObject, 150, 30);
console.log(topuTreatDayUsingCall);

//Borrowing touhidObject's Method using "apply"
console.log("\nBorrowing touhidObject's Method Using call");
const topuTreatDayUsingApply = touhidObject.treatDay.apply(topuObject, [100, 20]);
console.log(topuTreatDayUsingApply);