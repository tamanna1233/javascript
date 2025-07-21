// conversion of values or datatype

let score = 44
 console.log(typeof(score))
 console.log(typeof score)

 let newscore = "33"
 console.log(typeof newscore)
//  type of newscore is string 


  const number = Number(newscore)
  console.log(typeof number)
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
console.log(Number(name))

//0 => true ; 1 => false
// "" => false ; "tamanna" => true