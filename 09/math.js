const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);




const NewObj= {
name:"newObj",
pass:"1224",
isavailable:true

}
console.log(Object.getOwnPropertyDescriptor(NewObj,"name"));

//nobody can change the name property
Object.defineProperty(NewObj,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(NewObj,"name"))

