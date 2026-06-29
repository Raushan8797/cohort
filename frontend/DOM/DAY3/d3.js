// attributes and properties
// setAttribute, getAttribute, removeAttribute, hasAttribute;
// with data-* name
// input.value (property, current state) vs input.getAttribute("value")

const h3 = document.querySelector("#id1");

let res = h3.getAttribute("class");
console.log(res);


h3.setAttribute("width", "200px");

console.log(h3.getAttribute("width"));

h3.removeAttribute("class");

console.log(h3.hasAttribute("class"))



const userCard = document.querySelector("#user_card")

console.log(userCard.getAttribute("data-user-id"))

userCard.dataset.userId = "678"

console.log(userCard.getAttribute("data-user-id"))



const inp = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log(inp.value);
});



// creating inserting and removing elements from DOM
// 1. createElement

// **Old API (still runs everywhere):**
//
// - `appendChild()` / `insertBefore()` / `removeChild()`

// **Modern API (know both):**
//
// - `append()` → multiple nodes + strings in one call
// - `prepend()` / `before()` / `after()` / `replaceWith()`

const main = document.querySelector("main");

let footer = document.createElement("footer");
const span = document.createElement("span");

span.innerHTML = "hey i m <i>dynamic...</i>";

main.append(footer, span);

// main.removeChild(span)

main.insertBefore()