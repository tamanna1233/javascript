// for of

const arr = [1,2,3,4,5]

for (const arr1 of arr) {
    // console.log(arr1);
    
}
const greeting ="hello everyone"
for (const greet of greeting) {
    console.log(greet);
    
}


//maps javascript datatype like object
//map has a unique key 
const map = new Map()
map.set("ind","india")
map.set("fr","france")
map.set("usa","united state of america")
// console.log(map);
/* output
 {
  'ind' => 'india',
  'fr' => 'france',
  'usa' => 'united state of america'
}

*/
//loop on map
for (const key of map) {
    console.log(key); 
    //output
    //[ 'ind', 'india' ]
//[ 'fr', 'france' ]
//[ 'usa', 'united state of america' ]
    
}
//

for (const [key,value] of map) {
    // console.log(key);
    //output
    /*
    ind
fr
usa
    */
 }
 
 //loop on object 

 const obj = {
    name:'tamanna',
    course:"js",
    price:0
 }
 for (const [key,val] of obj) {
    console.log(val);
    
 }//not iterable
