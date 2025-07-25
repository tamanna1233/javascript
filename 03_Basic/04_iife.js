// Immediately Invoked Function Expression  (IIFE)

// ()()

//iife is used to avoid the gobal scope pollution


(function one(){
    console.log(`hey i am iife` );
})();
//semi-colon (;) is important to stop it
// we can use iife in both named iife function and (unknown)arrow function

( ()=>{console.log("hey i am iife in arrow function");
})();


//pass an arguments

(function two(name){
    console.log(  `my name is ${name}`);

})('iife');




((name)=> {
    console.log(`hello ${name}`);
    
})('iife')