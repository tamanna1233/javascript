// ******************  Function ********************//



// JavaScript, a function is a reusable block of code designed to perform a specific task. 
//You can define a function using the function keyword or as an arrow function

/*        console.log("T");
    console.log("A");
        console.log("M");
    console.log("A");
    console.log("N");
    console.log("N");
    console.log("A");    */

    // if we want to write this this code again and again it is defficult to write or time consuming

     //just  make a function a function and use it anywhere

function sayMyName() {
    //scope
    console.log("T");
    console.log("A");
        console.log("M");
    console.log("A");
    console.log("N");
    console.log("N");
    console.log("A");
}
//  sayMyName // reference
// sayMyName() //execution



//  add two numbers 

// function addTwoNumbers(a,b) {  // (a,b) are parameters
//     console.log(a+b)
    
// }
// addTwoNumbers(2,4) //(2,4) is arguments

//  2=   >

// function addTwoNumbers(a,b){
//     let result = a + b
//     console.log(result) // 6;
//     return result

//     // console.log("This will not execute because of return statement")
// }
//  let result = addTwoNumbers(2,4) // 2,4 are arguments
//     console.log(result) // 6

    // function addTwoNumbers(a+b){
    //     return a + b
    // }
    // let result = addTwoNumbers(3,4)
    // console.log(result)


    function logInMessage(username){
return `${username} Just Logged In`  // string interpulation ``
}

// const message = logInMessage(tamanna) // // This will throw an error because tamanna is not defined
// const message = logInMessage("tamanna");
// console.log(message)

// ? ***********  if  statement ***********

function logInMessage(username) {
    if(username)//true
        { return `${username} Just logged in `}
  
        return `please provide a username`
    
}
const message = logInMessage()
// console.log(message)



//

function calculateCardPrice(...num1) { // ... rest operator
    return  num1
}
let price = calculateCardPrice(200 , 300 ,400)
// console.log(price); //[200 ,300,400]


//  pass an object in function 

const user = {
    name :"tamanna",
    age :"20"
}

// 1=>


//  function userInfo(object) {
//     console.log(`userName is ${object.name} and user age is ${object.age}`);
//     }
//     userInfo(user)

// 2=>


//  function userInfo(object) {
//     console.log(`userName is ${object.name} and user age is ${object.age}`);
//     }
//     userInfo({
//          name :"tamanna",
//     age :"20"
//     })


// pass an array

 const myNewArr = [100 ,200, 300 ,400]
//  1=>

//  function returnSecondValue(anyArray) { 

//     return anyArray[2]
    
//  }   
//  console.log(returnSecondValue(myNewArr)); //300

// 2=>

    function returnSecondValue(anyArray){
        return anyArray[2]
    }
//  console.log(returnSecondValue([200, 300 ,400 ,500 ,600])); //400
 
