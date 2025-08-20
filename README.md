# javascript
code repository  for js

i learned js from #chai or code by hitesh choudhary#
https://github.com/hiteshchoudhary/js-hindi-youtube


# javascript execution context

every expression connverted into global execution contxt (this)

******   js is a single threaded
 
 1=>global execution context

 2=>functional execution context 
 3=>eva execution context (property of global execution )

 our code  execute in 2 phases
 1=> memory phase /memory creation phase  (creation phase)
  it allocate memory to variables .it does not execute  expression ..


 2=> execution phase 



 let var1 = 10;
 let var2 = 20;
 function addNum(num1,num2){
    let total = num1 + num2
    return total
 }

 let result1 = addNum(var1,var2)
 let result2 = addNum(2,4)

 steps 
 1=>
 global execution /envoirnment(this)

 2=>
 creation /memory phase 
 allocate memory like var1= undefined
 var2= umdefined
 addNum = defination {
     let total = num1 + num2
    return total
 }

 result1 = undefined
 result2 = undefined

 cycle2 or step3=>

 execution phase
 val1 = 10
 val2 =20

addNum => [
new variable envoirnment + execution thread
1=>memory phase

val1 = undefined
val2 = undefined
total = undefined


2=> execution phase
all mathematical exoression 
num1 = 10
num2 = 20
total = 30

total returns to a global execution (line no = 12)


* after all these this will delete


]

 result1

