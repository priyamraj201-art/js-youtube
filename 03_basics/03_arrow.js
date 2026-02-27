const user = {
    userName : "Priyam",
    age : 19,

    userInfo : function(){
        console.log(`${this.userName},${this.age}, welcome to website`);   
        console.log(this);
           
    }

}

user.userInfo();
user.age=22; //context changed
user.userInfo();



/*for converting normal function into arrow fun 
  function (){}   \\ this can be written to-      () => {} \\now this is an arrow function
  
  IMP- (this.userame) or (this) neither work in normal fun nor in arrpow fun

*/



// const addTwo = (num1, num2) => {                    THIS IS NORMAL ARROW FUNCTION
// return num1 + num2}

const addTwo = (num1, num2) => num1 + num2           // this is implesit fun (retun in removed bu=ecause its in single line)

console. log(addTwo(3, 4))


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const adTwo = (num1, num2) => ({username: "hitesh"})


console.log(adTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()