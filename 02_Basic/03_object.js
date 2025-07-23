const user = new Object() //singeton (constructor)
// const user1 ={}//object literal //non singleton
// ************ Object  ******************//

user.id= "1234abc"
user.name=  "Arman"
user.email= "arman@gmail.com"
user.isLoggedIn= true

const user1 ={
    email:"tamanna@gmail.com",
    fullName:{
        userName:{
        firstName:"Tamanna",
        lastName:"karthol"
        }
    }
}

// console.log(user1.fullName);//{ userName: { firstName: 'Tamanna', lastName: 'karthol' } }
// console.log(user1.fullName.userName.firstName);//Tamanna
// console.log(user1.fullName.userName.lastName);//karthol


const obj1 = {1 :"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
//
// const obj3 =Object.assign({},obj1,obj2)//assigns the properties of obj1 and obj2 to a new object
// console.log(obj3);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// const obj3 = {...obj1,...obj2}//spread operator to merge objectss
console.log(obj3);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(Object.keys(obj3)) // ['1', '2', '3', '4', '5', '6'] //returns an array of keys
// console.log(Object.values(obj3)) // ['a', 'b', 'c', 'd', 'e', 'f'] //returns an array of values
// console.log(Object.entries(obj3)) // [['1', 'a'], ['2', 'b'], ['3', 'c'], ['4', 'd'], ['5', 'e'], ['6', 'f']]


const obj4 = {    name: "tamanna",
    age: 20,
    info:[
       {
        key: "isLoggedIn",
        value: true
       }
    ],
    address: {
        city: "delhi",
        state: "delhi"
    },
     //computed property names
}
console.log(obj4.info[0].value) // true


console.log(obj4.hasOwnProperty("name")) // true;
