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