const num = 20;
// console.log(num)//20
 const num2 = new Number(20);
// console.log(num2)//[Number: 20]
// console.log(num === num2) // false
// console.log(num == num2) // true

// console.log(num2.toString().typeof) // string
// console.log(num2.toFixed(4)) // 20.0000

const num3 = 20.923456789;
// console.log(num3.toPrecision(2))//21

const num4 = 100000000
// console.log(num4.toLocaleString()) // 100,000,000
// console.log(num4.toLocaleString('en-IN')) // 10,00,00,000




// ******************   Maths ***************************

// console.log(Math)
// // console.log(Math.PI) // 3.141592653589793
// console.log(Math.abs(20)) // 20
// console.log(Math.abs(-20)) // 20
// console.log(Math.round(30.89565623)) // 31
// console.log(Math.ceil(30.11)) //
// console.log(Math.floor(30.99)) // 30
// console.log(Math.min(20, 30, 10, 50)) // 10
// console.log(Math.max(20, 30, 10, 50)) // 50
// 
console.log((Math.random(0,1)*10)+1)// 1 to 10

console.log(Math.round((Math.random(0,1)*6)+1))// 1 to 6


/*##important *********************************


const min = 10
const max = 20
const formula = Math.random()* (max-min +1) + min 
console.log(formula)//15.258340149778022
console.log(Math.floor(formula)) 

************************************************************/
