// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// const promiseOne =  new Promise(function(resolve,reject){
//     //  do and task
//      //db call,network call
//      setTimeout(function(){console.log('task is completed');
//      resolve()

//      },1000)
// })


//consume promiseOne

// promiseOne.then(function(){
//     console.log('promise consumed');
// })
//2nd promise
// new Promise(function(resolve,reject) {
//     setTimeout(()=>{
//         console.log('promise 2 task ');
//         resolve()
        
//     },2000)
    
// }).then(()=>{
//     console.log('promise consumed');
    
// })


// const promiseThree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// resolve({username:"tamanna",email:"tamannakarthol320@gmail.com"})
//     },1000)
// })
// promiseThree.then((user)=>{
// console.log(user);

// })



// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// // let error = true
// let error= false
// if(!error){
// resolve({username:"tamanna",email:"tamannakarthol320@gmail.com"})
// }else{
//     reject("ERROR something went wrong")
// }

//     },1000)
// })


// promiseFour
// .then((user)=>{
//     console.log(user);

//     return(user.username)
    
// }).then((username)=>{
//     //runs on resolve
//     console.log(username);
    
// }).catch((err)=>{
//     // runs on error
//     console.log(err);
    
// }).finally(()=>{
//     //finally is default always run
//     console.log("task completed");
    
// })


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// let error= true
// if (!error) {
//     resolve({
//         username:"javascript",password:"1234"
//     })
// }else{
//     reject('ERROR');
    
// }
//     },1000)
// })
// async function consumePromiseFive(){
//     //promise is object donot call it like promiseFive()
//     const response = await promiseFive
//     console.log(response);
    
// } 
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const res=await fetch('https://jsonplaceholder.typicode.com/users')  
//  const data=await res.json()
//  console.log(data);
 
//     } catch (error) {
//         console.log("E:",error);
        
        
//     }
  
// }


// getAllUsers()

//  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
//     return res.json()
//  }).then((data)=>{
//     console.log(data);
//      }).catch((error)=>{
//         console.log(error);
        
//      })
