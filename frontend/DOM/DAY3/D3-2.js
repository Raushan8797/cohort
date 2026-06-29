// **Old API (still runs everywhere):**
//
// - `appendChild()` / `insertBefore()` / `removeChild()`

// **Modern API (know both):**
//
// - `append()` → multiple nodes + strings in one call
// - `prepend()` / `before()` / `after()` / `replaceWith()

// insertBefore------

const main = document.querySelector("main");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box1.style.backgroundColor = "red";
box2.classList.add("box");
box2.style.backgroundColor = "yellow";
box3.classList.add("box");
box3.style.backgroundColor = "blue";

// main.append(box1, box2, box3);

// main.insertBefore(box2 , box1)

// main.removeChild(box3)

box1.replaceWith(box3)
main.replaceChild(box1,box3)

