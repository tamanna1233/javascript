let a = 10 
const b = 20 
var c = 30
// console.log(a)
// console.log(b)
// console.log(c);


//************* scope ***************** */
{
    //block scope
}
//global scope



if(true){
    let a = 10 
const b = 20 
var c = 30
}
// console.log(a)// ReferenceError: a is not defined
// console.log(b)// ReferenceError: b is not defined

// dont use var in block scope
// console.log(c);// 30

//example of global scope and block scope
//global scope 

let globalVar = 10
if(true){
    //block scope
    let globalVar = 20 // this is a block scope variable}\
    // console.log((globalVar));// 20
    
} 
// console.log(globalVar);// 10

function One(){
    const userName = "tamanna"; // function scope
    function Two(){
        const course = "javascript" // accessing function scope variable
        console.log(userName);
        
    }
    // console.log(course); // ReferenceError: course is not defined
    Two()
}
// console.log(userName)
// One()


//// *********************      inportant concept ***************

// Basic function
// console.log( addOne(5)); // it will show result

function addOne(num){
return num+1

}
// console.log( addOne(5));



// expression
// console.log(addtwo(5)); //it will throw an error because addtwo is not defined yet

const addtwo = function(num){
    return num+2
}
// console.log(addtwo(5));








