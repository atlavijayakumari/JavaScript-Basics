//for in loop
//for in loop is mainly used to iterate over keys and properties of an object. 
//It is a simpler and more readable way to iterate over the keys of an object compared to traditional for loops or while loops.

//example 1: Using for in loop with an object
let student = {
    name: "John",
    age: 20,
    city: "New York"
};
for(let key in student){
    console.log(key + ": " + student[key]);
}