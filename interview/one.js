/* question  
ek aaray le or uski original properties pe look lgaye
*/
const arr = [1,2,3,4,5,6,7]
Array.prototype.myarr=  console.log("myarr");
    //hum sirf original properties pe loop lgana chahte hai myarr nhi chahiye toh
for (const key in arr) {
    if(arr.hasOwnProperty(key)) {//hasOwnProperty means its original properties
   console.log(key);
    }
}