//REDUCE

const myNums =[1,2,3,4,5,6]

const initialVal = 0

// let SumofNumbers = myNums.reduce((acc,currentVal)=>{
//    return acc+currentVal},0)
// console.log(SumofNumbers);

let SumofNumbers = myNums.reduce((acc,curr)=>{
    // console.log(`acc:${acc} and currentval:${curr}`);
    return acc+curr},1) 
// 
/* OUTPUT
acc:1 and currentval:1
acc:2 and currentval:2
acc:4 and currentval:3
acc:7 and currentval:4
acc:11 and currentval:5
acc:16 and currentval:6
22
*/


const shoppingCart = [
    {
        itemName:'js course',
        price:3999
    },
    {
        itemName:'react course',
        price:4999
    },
    {
        itemName:'data science course',
        price:6999
    },
    {
        itemName:'java course',
        price:3500
    }
]

const total = shoppingCart.reduce((acc,item)=>{
    console.log(`acc:${acc} and item:${item.price}`);
    return acc + item.price
},0) 
console.log(total);

/*OUTPUT
acc:0 and item:3999
acc:3999 and item:4999
acc:8998 and item:6999
acc:15997 and item:3500
19497

*/
