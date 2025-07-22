// conversion of values or datatype

let score = 44
//  console.log(typeof(score))
//  console.log(typeof score)

 let newscore = "33"
//  console.log(typeof newscore)
//  type of newscore is string 


  const number = Number(newscore)
  // console.log(typeof number)
//   type of number is number here

/* 
when we change a value = "22abc" into  Number
js change its type 
Number(value)
 but when we console its type like
 console.log(value) it shows NaN(not a number)
*/

//  "33" => 33
//  "abc33" => nan
// true => 1
// false => 0 
//null => 0  
let name
// console.log(Number(name))

//0 => true ; 1 => false
// "" => false ; "tamanna" => true


// ***************************  OPRERATIONS *******************************
let value = 3
let negValue = -value
// console.log(negValue) // -3

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2/3)
// console.log(2%3) // remainder
// console.log(2**3) // 2^3 = 8
// console.log(2**1) // 2^1 = 2

let firstName = "tamanna"
let lastName ="karthol"
// console.log(firstName+ " " +lastName)

// console.log(1 + "2")
// console.log(1 + 2 + "3") // 33
// console.log(1 + "2" + 3) // 123
// console.log(1 + 2 + 3 + "4") // 6 + "4" = 64
// console.log("1" + 2 + 3 + 4) // "1" + 2 = "12" + 3 = "123" + 4 = "1234"

// console.log(+true)//1
// console.log(+ "")//0
let num1 = num2 = num3 =20
// console.log(num1, num2, num3) // 20 20 20

const counter = 10
// console.log(++counter) // 11 // pre-increment (pre-increment means it will increase the value before using it)
// console.log(counter++) // 10// post-increment (post-increment means it will increase the value after using it)
// console.log(counter) // 11 // now counter is 11 
// console.log(--counter) // 10 // pre-decrement
// console.log(counter--) // 11 // post-decrement
// console.log(counter) // 10 // now counter is 10

