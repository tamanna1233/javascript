// ********** String *************

// we cam declare a string in '' or ""
let name = "tamanna"
let city = 'pathankot'

//to concatinate the string we use + operator

// console.log(name+" "+ city) // tamanna pathankot //dont use + operator for string concatination
// to concatinate the string we use template literals

// console.log(`hello my name is ${name} and i live in ${city}`) // hello my name is tamanna and i live in pathankot

const gameName = new String("Free Fire")
// console.log(gameName[0]) // F


// to find the length of the string we use .length property
// console.log(name.length) // 7
// console.log(city.length) // 9
// to find the index of a character in the string we use .indexOf() method
// console.log(name.indexOf('a')) // 1
// console.log(city.indexOf('a')) // 2
// to find the last index of a character in the string we use .lastIndexOf()
// console.log(name.lastIndexOf('a')) // 4
// console.log(city.lastIndexOf('a')) // 2


// console.log(name.toUpperCase())// TAMANNA
// console.log(name.toLowerCase())// tamanna

//charAt() method to get the character at a specific index
console.log(name.charAt(0)) // t
console.log(city.charAt(0)) // p



const newName = name.substring(0, 4) // tamanna => tama
// console.log(newName) // tama

console.log(name)//
const anotherName = name.slice(-6,3)
console.log(anotherName)//am


const string1 ="    tamanna   "
console.log(string1)
console.log(string1.trim()) // tamanna // to remove the spaces from the start and end of the string
console.log(string1.trimStart()) // tamanna     



const url = "https://www.google.com"
url.replace('.','-')
console.log(url.replace('.','-')) //https://www-google.com

//split() method to split the string into an array
const str = "hello world"
const arr = str.split(' ') // split the string by space
console.log(arr) // ['hello', 'world']



