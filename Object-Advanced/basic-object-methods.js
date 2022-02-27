const myObject = {
    name: "Touhid",
    age: 25,
    email: 'touhid4bd@gmail.com',
    phone: '01765472894'
}

//Object.keys() : return only keys as array from object
const keys = Object.keys(myObject)
console.log('Keys:', keys);

//Object.values() : return only values as array from object
const values = Object.values(myObject)
console.log('Values:', values);

//Object.entries() : return pair of arrays in an array from object
const entries = Object.entries(myObject)
console.log('Entries:', entries);
console.log('Entries:', entries[0]);
console.log('Entries:', entries[1]);

//values : deletes an item from object
delete myObject.email
console.log('Delete:', myObject);

//Object.seal() : allows only modifications but add or delete is not allowed
Object.seal(myObject); //seal will prevent from deleting or adding an item
delete myObject.email; //delete not allowed
myObject.address = 'Kishoreganj'; //add not allowed
myObject.name = 'Zaman'; //Modifications is allowed
console.log('Seal:', myObject);

//Object.freeze() : add, delete and modifications are not allowed
Object.freeze(myObject); //seal will prevent all changes
delete myObject.email; //delete not allowed
myObject.address = 'Kishoreganj'; //add not allowed
myObject.name = 'Topu'; //Modifications not allowed
console.log('Freeze:', myObject);