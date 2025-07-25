// // if statement
 
// if(true){

// }

// //  <,>,<=,>=,==,===,!= ,!==
// // const temprature =40
// if(temprature<50){
// // console.log(`temprature is less than 50 .temprature is ${temprature}`);
// }

// //if else


//     if(temprature<40){
//         // console.log(`temprature is less than 40`);
        
//     }else{
//         // console.log(`tempratur is greater than 40`);
        
//     }

    //nested if
    // const temp= 30
    // if(temp<10){
    //     console.log("less than 10");
    //     }
    //     else if(temp<20){
    //                 console.log("less than 20");

    //     }
    
    //      else if(temp<30){
    //                 console.log("less than 30");

    //     }
    //      else if(temp<40){
    //                 console.log("less than 40");

    //     }
    // else{
    //     console.log("i dont know");
        
    // }

const userLoggedIn = true;
const debitCard = true
const loggedInfromGoogle =false
const loggedInfrommail = true


    if(userLoggedIn && debitCard){ // && both will true
// console.log("allowed");
}

if(loggedInfrommail|| loggedInfromGoogle){ //anyone of the given is true
    // console.log("allowed");
    }