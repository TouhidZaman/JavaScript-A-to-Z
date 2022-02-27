/*  JS Closure: jodi amra ekta function theke r ekta function k return kori tahole returned
    function ta tar vitorer variable gulu k niye ekta nijosho encaptulation
    er moto toiri kore fele . sei varibale gulu baire theke access kora jay na kintu
    reference er maddhome use kora jay eita ke closure bole
*/
function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

//function tar instance create hocche
const stopWatch1 = stopWatch(); 
/*  returned function tar modde counter use hoice ty eitar value track rakbe
    mane mane encapsulation / closure er moto tuiri hoice oi variable ta niye
*/
console.log(stopWatch1()); //counter 0 --> 1
console.log(stopWatch1()); //counter 1 --> 2 
console.log(stopWatch1()); //counter 2 --> 3 

//abar notun kore function tar instance create hocche
const stopWatch2 = stopWatch();
console.log(stopWatch2()); //counter 0 --> 1 
console.log(stopWatch2()); //counter 1 --> 2 
