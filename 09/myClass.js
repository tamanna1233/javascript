// class user {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abcd `
//     }

//     changedUserName(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const user1= new user('tamanna','tamannakarthol320@gmail.com',1234)
// console.log(user1.encryptPassword());
// console.log(user1.changedUserName());

function user(username,email,password){
this.username=username;
this.email=email;
this.password=password;
}
user.prototype.encryptPassword=function(){
            return `${this.password}abcd `
}
const user2 = new user('tamanna','t@gmail.com',123)
console.log(user2.encryptPassword());


