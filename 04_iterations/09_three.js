// // for of

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const str = "Hello";

// for (const char of str) {
//     console.log(char);
// }




//MAP

const myMap = new Map()
myMap.set("IN", "India")
myMap.set("US", "United States")
myMap.set("FR", "France")

console.log(myMap);
for (const [key, value] of myMap) {
    console.log(key, 'hihi', value);
}

const mySet = new Set([1, 2, 3]);

for (const item of mySet) {
    console.log(item);
}

const myMap1 = new Map([
    ["name", "Alice"],
    ["age", 30],
]);

for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}   

//forin loop

const obj = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in obj) {
    console.log(`${key}: is details of ${obj[key]}`);
}





//forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(function (val) {
//
//console.log(val);
// })
coding.forEach( (item) => {
console.log(item);
})


