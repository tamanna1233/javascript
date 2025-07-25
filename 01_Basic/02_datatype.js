"use strict"; //treat all js code as a newest version

// alert("hello ")  //we are using nodejs , not browser

let name = "tamanna"

let age= 20

let isloggedIn = false

  

//js is dynamic typed language// we can change the type of variable at any time
// like we can change string to number

// how to store data in memory and how to access it  
// there are two type of datatype in js 
//       Primitive and non primitive(reference) datatype

//primitive data type (call by value )//copy and change
// 7types:=> string, number, boolean, null, undefined, symbol, bigint

// string => "" 
//  //let name =""
// number => 2 to power 53  
//  //let age = 20
// boolean => true/false 
//  // let isloggedIn = false
// null => stand alone value  (empty) ,(typeof =  oject)
// let user = null  
// undefined =>  typr(undefined)
// let userName
    //symbol => unique
    // let sym = Symbol("123")
    // bigint => 2n
// let big = 1234567890123456789012345678901234567890n
// console.log(typeof big) // bigint
// let big = BigInt("1234567890123456789012345678901234567890")//not allowed





//non primitive datatype(reference datatype) //call by reference
// 3 types: => object, array, function
// object => {}
    let user= {
        name: "tamanna",
        age:20,
        isloggedIn:false
    }

    //array => []

        // const account =["username", "password"]


        //function => function(){}
        const add = function(a,b){
        console.log(a+b)
        }


        // to check its type typeof() is used





        // ********** Stack (primitive datatype (copychange)) and Heap(non primitive or reference (original change) ) *****************

let myName ="tamanna" //stack memory
let Name = myName
// console.log(myName) // tamanna
Name = "Tamanna Karthol" //change value of Name
console.log(Name)
console.log(myName) // tamanna
// myName is not changed because it is stored in stack memory
// Name is a copy of myName, so it is changed independently


let user1 ={
    name:"tamanna",
    age:"20",
    isloggedIn:false,
}

let user2 = user1
console.log(user2) // { name: 'tamanna', age: '20', isloggedIn: false }
user2.name ="tamanna karthol"
console.log(user2) // { name: 'tamanna karthol', age: '20', isloggedIn: false }
console.log(user1) // { name: 'tamanna karthol', age: '20', isloggedIn: false }
// user1 is changed because it is stored in heap memory
// user2 is a reference of user1, so it is changed independently
// if we want to change user2 without changing user1, we can use spread operator


//*****************             spread operator     ************************
let user3 = {...user1} 
user3.name = "tamanna "
console.log(user3) // { name: 'tamanna ', age: '20', isloggedIn: false }
console.log(user1) // { name: 'tamanna karthol', age: '20', isloggedIn: false }
console.log(user2) // { name: 'tamanna karthol', age: '20', isloggedIn: false }
// user1 is not changed because we used spread operator to create a new object
// user3 is a new object, so it is changed independently
// this is how stack and heap memory works in js





