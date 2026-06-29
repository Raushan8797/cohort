// EVENT DELEGATION

const main = document.querySelector("main")

main.addEventListener("click", (e) =>{
    console.log(e.target);
    
})

let random = Math.random()
Math.floor(random) // round of the number 1.5 -> 1
// Math.ceil(random) round of the number 1.5 -> 2 it round of ot next number
console.log(random);
