// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls , cryptography ,network

//     setTimeout(function(){
//         console.log('async task done');
//         resolve();
//     }, 1000)
// }) // <-- Close the promise here

// // Consume the promise outside
// promiseOne.then(function(){
//     console.log("promise consumed");
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             userName: "Raju", email : "priyam@gmail,com"
//         })
//     },1000)
// })

// promiseThree.then(function (params) {
//     console.log(params)
// })


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({userName:"Priyam", password: "12345"})
        }
        else{
            reject('ERROR:something went wrong')
        }
    },1000)
})


promiseFour.
then((user)=>{
   console.log(user)
   return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch(function(error){
    console.log(error);    
})
.finally(()=>console.log('the promises is either resolved or rejected')
)


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.