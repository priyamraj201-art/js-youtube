//ARRAY arrays in javascript can take any type of data type entry


// const newArr= [2,57,87,"hero"]
// const hilo = new Array(1,3,4);

// // console.log(newArr[3]);
// // console.log(hilo[2]);

// ////////////////////////////////////

// //array methods

// // newArr.push(4);
// // newArr.push("hihi4");
// // console.log(newArr);
// // console.log(newArr.indexOf(57));


// // const newarr2 = newArr.join();

// // console.log(newarr2);
// // console.log(typeof newarr2);

// // console.log("A",newArr);
// // const mna = newArr.slice(1,3);
// // console.log(mna);


// // console.log("B",newArr);
// // const mna2= newArr.splice(1,3)
// // console.log(mna2);

// // console.log("C",newArr);



// /////////////////////////////////////////////////

// //ARRAY2

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros) //array ke andar array ban gaya
// // console.log(marvel_heros);
// // console.log(marvel_heros [3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allNewHeros = [...dc_heros,...marvel_heros]//do same work but is short and more used;
// console.log(allNewHeros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat (Infinity)// arr ke andar arr ko normal arr me convert
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) //tells if its an arrayt or not 
// console.log(Array.from("Hitesh"))// converted it to an array
// console.log(Array.from({name: "hitesh"})) // interesting
// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));

