// //singleton
// // Object.create

// // object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Priyam",
//     "full name": "priyam raj",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "ranchi",
//     email: "hi@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // types of output in js

// // console.log(JsUser.email)                 //normally used
// // console.log(JsUser["email"])               
// // console.log(JsUser["full name"])          
// // console.log(JsUser[mySym])                //when something is defined 

// JsUser.email = "priyam@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "priyam@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//    // console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


/*---------------------------------------------- */


// const tinderUser1=new Object()// this is singleton 
const tinderUser = {}  // this is non singleton
// both are ways of declaration for an object
tinderUser.id="123ifoi"
tinderUser.name="priyam"
tinderUser.sex="nahi_kia"


// console.log(tinderUser);

const regularUser = {
    email:"priyam.raj.201",
    fullname:{
        userfullname : "priyamRaj",
        userId : "priyam33",
    }
}

console.log(regularUser.fullname.userfullname);

console.log(regularUser)




// for adding one object to another

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }                  this willnot work like array problm
// const obj3 = Object.assign({}, obj1, obj2, obj4)         work but heavy
const obj3 = {...obj1, ...obj2} 
console.log(obj3); 

// original data arrays ke andar multiple obj k form me aati h...
const users = [
  {
    id: "1",
    email: "h@gmail.com"
  }
];


console.log(tinderUser);

console.log(Object.keys(tinderUser));// converts objects into arrays so that operations can be performed easily
console.log(Object.values(tinderUser));// same but gives only values 
console.log(Object.entries(tinderUser));// array ke andar array uske andar both keys and values

console.log(tinderUser.hasOwnProperty('sexy')); // gives true or false 

//const obj1 = {1: "a", 2: "b"}   copy paste this in console and tun obj1 to further properties






/*----------------------------------------------------------- */


//DESTRUCTURING OF OBJECT
const course = {
    name : "js hindi",
    price : "999",
    courseInstrusctor: "priyam",
}

// course.courseInstrusctor       too log to use repetadely so we destructure the object
const {courseInstrusctor: instructor} = course;
console.log(instructor);

