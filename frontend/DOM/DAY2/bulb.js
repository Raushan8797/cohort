const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")
let flag = true

// btn.addEventListener('click', () => {
//   bulb.style.backgroundColor = "yellow"
//   btn.textContent = "off"
// })

// by using if else we can make it better 

// btn.addEventListener('click', () => {
//   if (flag){
//   bulb.style.backgroundColor = "yellow"
//   btn.textContent = "off"
//   flag = false
//   }
//   else{
//   bulb.style.backgroundColor = "transparent"
//   btn.textContent = "on"
//   flag= true
//   }
 
// })

// we can also do it very easily useing class
btn.addEventListener('click', () => {
 if(bulb.classList.toggle("lightUp")){
  btn.textContent = "OFF"
 }
else{
  btn.textContent = "ON"
}
 
})