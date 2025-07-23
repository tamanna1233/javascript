// ************ Object  ******************//
 //singleton (constructor)
//  Object.create()




 //object literals
    const mysym = Symbol("mySymbol")


let object = {
    name:"tamanna",
age:20,
isloggedIn:true,
key1 : mysym,
address:{
    city:"delhi",
    state:"delhi"},
    courses:["javascript","python","java"],
}


//how to access object 
//1=> 
    // console.log(object.name)
//2=>
        // console.log(object[name]) //undefined because name is not a variable 

    // console.log(object["name"])
    // console.log(typeof(object.key1))//string
    // console.log(object["key1"])

    
// change value of object

object.name =" tanu"
// console.log(object["name"])

//to lock the object
// Object.freeze(object)
// object.name = "tanu2" //will not change because object is frozen
// console.log(object.name) //tanu


object.greeting = function(){
    console.log("hello"+" "+ object.name)
}
console.log(object.greeting)//[Function (anonymous)]
console.log(object.greeting())

object.greeting2 = function(){
    console.log(`hello ${this.name}`)
}
console.log(object.greeting2)//[Function (anonymous)]
console.log(object.greeting2())//hello tanu