// class User {
//     constructor(email,pass){
//         this.email=email,
//         this.pass=pass
//     }
//     get pass(){
//         return this._pass.toUpperCase()

//     }
//     set pass(value){
// this._pass=value.toUpperCase()
//     }
// }
// const tamanna= new User("tamanna","123ad")
// console.log(tamanna);


//

function User1(mail,pass){
this._mail=mail,
this._pass=pass

Object.defineProperty(this,'mail',{
    get:function(){
        return this._mail.toUpperCase()
},
set:function(value){
    this._mail=value
}})
}

const user2=new User1("user@mail.com","1234")
console.log(user2.mail);

//object base


const  user3={
    _email:'tamanna@gmail.com',
    pass:'1233',


    get email(){
return this._email.toUpperCase()
    },
    set email(value){
this._email=value
    }
}
// new//constructor function

const tam = Object.create(user3)
console.log(tam.email);
