class User{
    constructor(username){
this.username=username
    }

LogMe(){
    console.log(`${this.username} is logged in `)
}
static logOut(){
    console.log(`${this.username} is logged out`);
    
}
}

const user =new User('tamanna')
// console.log(user.logOut());


class teacher extends User{
    constructor(username,pass,email){
super(username);
this,pass=pass;
this.email=email
}

addCourses(){
    console.log(`new couse was added by ${this.username}`);
    
}

}
const code =new teacher('tamanna',123,'gmail.com')
code.LogMe()
code.addCourses()
