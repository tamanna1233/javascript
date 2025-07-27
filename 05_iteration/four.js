//loop on array
const coding =["js","ruby","python","c++","java"]

//foreach
//higher order function
coding.forEach( function (item){
    // console.log(item);
    
});


coding.forEach((val)=>{
// console.log(val);

})

function printMe(){
    // console.log("print me is executed");
    
}

// coding.forEach(printMe)

coding.forEach((key,val,arr)=>{
    // console.log(key);
    // console.log(val);
    // console.log(arr);
    })

    const arr1 = [
        {name:"tamanna",
            course:"js"
        },
        {
            name:"riya",
            course:"java"
        },
        {
            name:"priya",
            course:"c++"
        }
    ]

    arr1.forEach((item)=>{
console.log(item.course);

    })