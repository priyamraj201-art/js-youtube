//STRINGS
const name = "Priyam"
const repo =50

//console.log(name+repo);

console.log(`hello my name is ${repo}`); 
const gameName= new String('Priyam-new-king') // this type of srring declaration
 
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());// original value do not changed due to STACK and HEAP concept

// for more reffer to console and run the string name or yt video at 12:9

const newN = gameName.substring(0,2)
console.log(newN);

const anotherN = gameName.slice(2);
console.log(anotherN);


const anotherString = "      Modi Modi Modi"
console.log(anotherString);
console.log(anotherString.trim());// removes spaces in front and back only 

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))  //%20 got replaced by -
console.log(url.includes('sundar')) // checks if sundar is there or not 

console.log(gameName.split('-')); //this creats an array based on the symbols 

