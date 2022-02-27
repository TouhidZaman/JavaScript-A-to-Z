/* Comparing Two Objects: objects are non premitive in JS. 
   So, we can't compare using "==" or "===" 
*/
const object1 = { name: "Touhid", age: 25 }
const object2 = { age: 25,  name: "Touhid"}

//using for in loop 
const compareTwoObject = (obj1, obj2) => {
    for(const prop in obj1) {
        if(obj1[prop] !== obj2[prop]) {
            return false
        }
    }
    return true;
}
const isObjectsEqual = compareTwoObject(object1, object2);
console.log(isObjectsEqual);


const object3 = { name: "Touhid", address: "Kishoreganj" }
const object4 = { name: "Touhid", address: "Kishoreganj" }
// const object4 = { address: "Kishoreganj", name: "Touhid" }
//using hack but not efficient coz if we change order it will not work
const compareUsingsHacks = (obj1, obj2) => {
    if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return "objects are equal";
    }
    else {
        return "objects are not equal";
    }
}
const isEqual = compareUsingsHacks(object3, object4);
console.log(isEqual);