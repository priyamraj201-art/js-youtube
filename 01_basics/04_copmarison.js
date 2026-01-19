const { Id, anotherId } = require("./dataTypes-sumry");

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(Id === anotherId);

//this is because comparison and equality operator works differently comparison <=,>,< converts mnull into a number soo (1) is false and (3) is true
