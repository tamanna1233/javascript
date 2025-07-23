// Array

const arr =[1,2,3,4,5]
//JavaScript arrays are resizable and can contain a mix of different data types.
const arr2 = [1, 'two', true, null, undefined, { key: 'value' }, [1, 2, 3]];

//how to access elements in an array
// console.log(arr[0]) //1

//shallow copy (reference) of an array // original array is modified 



//deep copy (copy value) of an array // original array is not modified


const arr3 = ["one","two","three"];

const arr4 = new Array(1,2,3,4,5); // creates an array with 5 empty slots
// console.log(arr4)


//  Array methods

arr4.push(6) //push add element at the end
// console.log(arr4) // [1, 2, 3, 4, 5, 6]

arr4.pop() //pop remove element at the end
// console.log(arr4)//[1, 2, 3, 4, 5]


arr4.unshift(9)//add elemant at the begining
// console.log(arr4) //[9, 1, 2, 3, 4, 5]

arr4.shift() //remove element at the begining
// console.log(arr4) //[1, 2, 3, 4, 5]

// console.log(arr4.includes(3)) //true
// console.log(arr4.includes(10)) //false

// console.log(arr4.indexOf(9)) //-1 (not found)
// console.log(arr4.indexOf(1)) //0 (found at index 0)



const newArr = arr4.join("-")// joins all elements of the array into a string
// console.log(newArr) // "1-2-3-4-5" (joins elements with a hyphen)

// console.log(typeof newArr) // string





//********************     slice and splice methods

const myArr =[0,1,2,3,4,5,6]
// console.log(myArr) // [0,1,2,3,4,5,6]
    


//slice does not modify the original array
//slice doesnot include the end index
// console.log("A" + myArr.slice(0,3)) // A 0,1,2 
// console.log("A" + myArr)//A0,1,2,3,4,5,6

// splice modifies the original array
// splice includes the end index
// console.log("B" + myArr.splice(0,3))// B 0,1,2
// console.log("B" + myArr)// B 3,4,5,6

const arr5 = [...myArr+[7,8,9]]; // spread operator to copy the array and add new elements
// console.log(arr5)// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(myArr)//// [0, 1, 2, 3, 4, 5, 6] (original array remains unchanged)


const names= ["tamanna","dikshant","sahil","priyanshi"]
const newNames =["preeti","tia","isha"]


//console.log(names) // ["tamanna", "dikshant", "sahil", "priyanshi", ["preeti", "tia", "isha"]]
//it return the length of the array after adding new element as an array/
//array in array


const  allNames = names.concat(newNames) // concatenates newNames array to names array
// console.log(allNames) // ["tamanna", "dikshant", "sahil", "priyanshi", "preeti", "tia", "isha"]


//**********  spread operator   **********//
const allNames2 = [...names,...newNames]
// console.log(allNames2)


//************  flat *********** */
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]]];
// console.log(nestedArray.flat()) // [1, 2, 3, 4, 5, 6, [7, 8]]
// console.log(nestedArray.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(nestedArray.flat(Infinity)) // // [1, 2, 3, 4, 5, 6, 7, 8]


//.isArray   
//.from
//of

console.log(Array.isArray(nestedArray)) //true
console.log(Array.from("TAMANNA")) //["T","A","M","A","N","N","A"] //convert into  array
console.log(Array.from({name:"tamanna"})) //[]

let score =100 
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)) //[100, 200, 300]//creates an array from the arguments passed to it