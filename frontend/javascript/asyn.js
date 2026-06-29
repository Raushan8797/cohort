console.log("start");
 setTimeout(function(){
    console.log('timeout');   // this will delay the exicution for 3 sec
    
 },3000)

 console.log('end');
 
 let int = setInterval(function(){
    console.log('timeout');   // this will  exicute after every 1 sec
    
 },1000)
 setTimeout(function(){  // it will terminate the setInterval after 5 sec
   clearInterval(int)
 })