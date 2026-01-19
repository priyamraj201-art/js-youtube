// PRIMITIVE
// 7 types:- string,numbr,boolean,null,undefined,symbol,BigInt



// REFERENCE OR NON-PRIMITIVE
//array,objrct,function


const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id===anotherId);


//+++++++++++++++++++++++++++++++++//

// STACK(primitive){gives copy donot changes value} and HEAP( non primitive){changes original value}

// stack eg
let ytname= 'priyamking'
ytdomain=ytname;
console.log(ytdomain);

//heap eg
let detai={
    email:"priyam.raj.201@gmail.com",
    phno : "6997679",
}

let detail2= detai;

detail2.email="ygfyuirgaeui@gmail.com";
detail2.phno="696969";

console.log(detail2);




