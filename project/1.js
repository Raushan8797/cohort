const add_btn = document.querySelector("#add")
const add_transition = document.querySelector(".page2")
const close_btn = document.querySelector("#close")

add_btn.addEventListener("click", () =>{
    add_transition.style.display = "flex"
})
close_btn.addEventListener("click", () =>{
    add_transition.style.display = "none"
})