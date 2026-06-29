//CHANGE IN HTML CAN BE PERFORMED USING
// textContent--> only change or ubdate text
// innerText --> 
// innerHTML --> html tags can be used with it

// const h1 = document.querySelector('h1')
// console.log(h1);
// h1.textContent = 'I got updated by js (DOM)'
// h1.innerText = 'hey.......<i>its in italic<i>'
// h1.innerHTML = 'hey.......<i>its in italic<i>'

const body = document.body
console.log(body.innerText);
// console.log(body.textContent);



// to make change in css we use style property
// h1.style.color= 'red'
// h1.style.fontSize='50px'

// classes
// classlist.add() --> add class to particular tag
// classlist.remove() --> delete class
// classlist.contain()--> check if it caontain calss or not give true/false
// classlist.toggle()--> is exist ->remove class / is not exist -> add
// classlist.replace()--> it take two value and replace old class with new one
 
const h1 = document.querySelector('#hey')
// (1)to check if tag(h1) have a class="heading"
const isClass = h1.classList.contains('heading')
console.log(isClass); //it will give true or false

//(2) to change or replace class
// h1.classList.replace("heading","newhead")

// (3) toggle classes
h1.classList.toggle('heading') //in this case h1 already have a class so toggel will remove the class

// (4) add class
const div = document.querySelector('#div')
div.classList.add('box') // it will add calss="box" to div 


