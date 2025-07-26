// //const userEmail = "tamanna@gmail.com"//true
// // const userEmail = "" //false
// const userEmail =[]//true
// // const userEmail= {}
// if(userEmail){
// console.log(`useremail is ${userEmail}`);

// }else {
//     console.log("donot have email");
    
// }


// // falsy value(assume to be false value)
// // false , 0 , "" ,-0, bigInt 0n, null , undefined, NaN

// //truthy value
// // true, [], {}, "string" ,"0" ,"false", "  " , function(){}

// // use to check array is empty or not
// if (userEmail.length ===0) {
//     console.log(" empty");
    
// } else {
//     console.log("not empty");
    
// }

// //object is empty
// const userEmail = {}
// if (Object.keys(userEmail).length===0) {
//     console.log(" empty");
    
// } else {
//     console.log("not empty");
    
// }


// //check not empty
// const userEmail = [2,3,4]
// if (!userEmail.length ===0) {
//     console.log("not empty");
    
// } else {
//     console.log("empty");
    
// }



// nullish coalescing operator (??): null undefined
    //

    // let val1;
    // val1 = 5 ?? 10 //5
    // val1 = null ?? 10  //10
    // val1 = undefined ?? 15  //15
    // val1 = null ?? undefined ?? 20 //20

    // console.log(val1);