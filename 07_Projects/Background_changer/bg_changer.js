//generate a random color

const randomColor = function(){
  const hex= '0123456789ABCDEF';
  let color ='#';
  for(let i=0;i<6;i++){
color +=hex[Math.floor(Math.random()*16)]  }
return color
}

//start setInterval
let interval;
const startChangingColor= function(){
if(!interval){
interval = setInterval(()=>{
  document.body.style.backgroundColor=randomColor()
},1000)
}
}



//stop interval
const stopChanging= function(){
  clearInterval(interval)
  interval=null
}



document.querySelector('#start').addEventListener('click',startChangingColor)

document.getElementById('stop').addEventListener('click',stopChanging)
