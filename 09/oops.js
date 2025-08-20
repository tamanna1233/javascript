function user(username,loginCount,isloggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn
    return this
}
// const userOne= user("tamanna",32,false)
// console.log(userOne);
// const userTwo = user("karthol",21,true)
// console.log(userOne);
// //username: 'karthol',
 

//to solve this we use new keyword 
//mew keyword generate new object
const userOne= new user("tamanna",32,false)
// console.log(userOne);
const userTwo = new user("karthol",21,true)
console.log(userOne.constructor);
console.log(userTwo);

