const myObject = {
    name: "Touhid",
    age: 25,
    email: 'touhid4bd@gmail.com',
    phone: '01765472894'
}

//Using (for in loop): Example 1
console.log(`Example 1`);
for(const prop in myObject) {
    console.log(`${prop}: ${myObject[prop]}`);
}

//Using keys: Example 2
const keys = Object.keys(myObject);
console.log(`\nExample 2`);
for(const prop of keys) {
    console.log(`${prop}: ${myObject[prop]}`);
}

//Using : Example 3
const entries = Object.entries(myObject);
console.log(`\nExample 3`);
for(const entry of entries) {
    const [key, value] = entry;
    console.log(`${key}: ${value}`);
}