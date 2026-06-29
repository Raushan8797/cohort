const main = document.querySelector("main")
const btn = document.querySelector("button")
const timer = document.querySelector("#timer")
const Scoree = document.querySelector("#Score")
const box =  document.createElement("div")
box.classList.add("box")

const overlay = document.querySelector("#overlay")
let score = 0
let time = 0
let interval;
const randomcolor = ()=>{
    let r = Math.floor(Math.random()* 256) 
    let g = Math.floor(Math.random()* 256) 
    let b = Math.floor(Math.random()* 256) 
    console.log(r,g,b);
    
    return `rgb(${r},${g},${b})`
}
const randombox = () =>{
    box.style.backgroundColor = randomcolor()

    main.append(box)
    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;
   
        const rY =  Math.random() *mainH
        const rX = Math.random() *mainW

    box.style.top = `${rY}px`
    box.style.left = `${rX}px`
}

btn.addEventListener("click", () =>{
    
clearInterval(interval)

    interval= setInterval(() => {
        randombox()
        time +=1
        timer.textContent = time
        
    }, 1000); 

    setTimeout(() => {
      clearInterval(interval)
      overlay.style.display = "flex";
    }, 10000);
})

box.addEventListener("click", () =>{
    score +=1
    Scoree.textContent = score

    setTimeout(() => {
        overlay.style.display = "none";
        Scoree.textContent = 0
        timer.textContent = 0 
    }, 13000);
})

