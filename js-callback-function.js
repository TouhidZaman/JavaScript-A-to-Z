/*  ekta function k jodi parameter hisebe pathanu 
    hoy and setar vitore joi sei function ta call
    hoy abar tahole eita k bole callback function 
*/
const goodMorning = (name) => {
    console.log("Good Morning ! ", name)
}
const goodEvening = (name) => {
    console.log("Good Evening ! ", name)
}
const welcomeMessage = (handler, name) => {
    handler(name);
}
welcomeMessage(goodMorning, "Touhid");
welcomeMessage(goodEvening, "Touhid");