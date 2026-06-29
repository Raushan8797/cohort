// how to declair a function
function abc(){
    console.log('fucking......');   
}

abc()   // fuction calling


// function greet(parameter) {
//     console.log('good');
    
    
// }

// greet(argument)

function greet(num) {
    console.log('good' ,num);    
}

greet('bsdk')


function sum(a,b) {
    console.log(a+b);   
}

sum(10,20)

function greet (user,age) {
console.log('Good Morning...',user);
if (age>=18){
console.log('You are welcome in party');
}else{
console.log('Not Allowed');
}
}
greet('Latikesh',17)
greet('Sachin',19)

// types oof function

// function declaration

function a1(){
    console.log(`hello`);
    
}
  
// function expression

var b1 = function () {
    console.log('hello');
    
}

// arrow function

var c1 = ()=> {
    console.log('hello.....2');
    
}

// one line function

var c2 = (a,b)=> console.log('hello.....3',a,b);

var c3 = a => console.log('hello.....3',a);

//IIFE //immidiately invoked function expression
(function() {
console.log("I run immediately!");   // we dont need to call this function
})();

a1()
b1()
c1()
c2('janvi',20)
c3('fuck you')


// default value

function hola(user = 'sir') {    // this will set a default value for user in case we dont give any value during calling the function
    console.log("welcome", user);
    
}

hola('rahu')
hola('man')
hola() // here we dont give any value to user so it will use the default value 'sir'
  
// call back (function inside a function )
function side() {
    console.log('side fun');
    
    
}

function main(p) {
    console.log('this is main');
    c=console.log(p);
    p()  // function inside function
    
}

main(side) // passed side function in main function

//***example***
function footpath (f) {
console.log('I am Footpath and my width is', f);}

function mainRoad (wid,cb) {
console.log('This is Main road, total width of road is', wid);
cb(wid/10)
}
mainRoad (80, footpath)
//****first class function****
