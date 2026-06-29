const inp = document.querySelector("input")
const btn = document.querySelector("#add")
const todobox = document.querySelector(".todo-list");


btn.addEventListener("click", () =>{
    const value = inp.value
    if(value.trim() === "" ) return;
    todobox.innerHTML += `<div class="li">
            <h3>${value}</h3>
            <div>
                <button class="btn edit-btn" id="edit">Edit</button>
                <button class="btn del-btn" id="del">Delete</button>
            </div>
        </div>`
        inp.value= ""
})

todobox.addEventListener("click", (e) => {

    if (e.target.classList.contains("edit-btn")) {
        const h3 = e.target.closest(".li").querySelector("h3");

        const newValue = prompt("Edit Task", h3.innerText);

        if (newValue !== null && newValue.trim() !== "") {
            h3.innerText = newValue;
        }
    }

    if (e.target.classList.contains("del-btn")) {
        e.target.closest(".li").remove();
    }

});