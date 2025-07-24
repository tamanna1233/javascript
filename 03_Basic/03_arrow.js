const user = {
    userName : "tamanna" ,
    course : " js ",
    welcomeMessage: function () {
        // console.log(`${this.userName} welcome to website`);//this is for current context 
        console.log(this);
        
    }


}
// user.welcomeMessage()
 user.userName = "Arman"
//  user.welcomeMessage()

// console.log(this); //{}

//this is only use in object
// function one(){
//     const username = "tamanna"
//     console.log(this.username);//undefined
    
// }
// // one()

// **************** Arrow function *************

const one = ()=>{
    const username = "tamanna"
    console.log(this.username); //undefined
}

// one()

//explicit
// const addtwo = (a,b)=>{return a+b}
// console.log(addtwo(8,1)); //9



// implicit 
//write a code in one line with return
// const addtwo = (a,b)=> a+b
// console.log(addtwo(8,1)); //9


// if we use {} return is compalsory but when we write it in () there is o need to write return
const addtwo = (a,b)=> (a+b)
// console.log(addtwo(3,3));//6


// return object

// const obj = (num1)=>{
//    return {username:"tamanna"}
//}
const obj = (num1)=>(
    {username:"tamanna"}
)
// console.log(obj(1));
