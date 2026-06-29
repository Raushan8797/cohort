var age = number(prompt('enter age')) // convert string tp num(int)





if (age>=18 && age<=60) {
    console.log('you will get $1500 per month')


}else{
    console.log('bhag jaaa');
    
}

console.log(10>5?"sahi hai":'nahi hai');

var a = 10
var b= 20 
a>b?console.log('good'):console.log('not good');





// string  can be created using '' OR "" and ``

var name = 'jay'
var gender = `male`
 
console.log("he's name is", name ,' his gender is', gender);

// same line can also be printd like this 

console.log(`he's name is ${name} his gender is ${gender}`);

// Useful String Methods

let user = 'Fuck , you!'

console.log(user.length);
console.log(user.toUpperCase());
console.log(user.indexOf('y'));
console.log(user.toLowerCase());       
console.log(user.indexOf("you"));    
console.log(user.includes("fuck"));   
console.log(user.slice(0, 5));         
console.log(user.substring(2, 7 ));    
console.log(user.replace("you", "JS"));   
console.log(user.split(", "));         
console.log("   hi   ".trim());     
console.log("abc".repeat(3));       
console.log(user.startsWith("Fuck")); 
console.log(user.endsWith("!"));       
console.log(user.charAt(0));           
console.log(user[0]);    

