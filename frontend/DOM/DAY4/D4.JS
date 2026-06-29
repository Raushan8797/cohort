//THERE ARE MULTIPLE TYPES OF EVENT
// mouse event -> dblclick, mouseover, mouceleave
// pointer event -> click
// keyboard event -> keypress , keyup, keydown
// input event -> input 
// submit event -> submit in form

const form = document.querySelector("form")
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")
const users = document.querySelector(".users")
const imageurl = document.querySelector("#image")
let usersData = [{
    "id": 1,
    "name": "Naruto Uzumaki",
    "email": "naruto.uzumaki@example.com",
    "image": "https://cdn.myanimelist.net/images/characters/9/72511.jpg",
    "dob": "1999-10-10"
  },
  {
    "id": 2,
    "name": "Monkey D. Luffy",
    "email": "luffy@example.com",
    "image": "https://cdn.myanimelist.net/images/characters/9/310307.jpg",
    "dob": "1998-05-05"
  },
  {
    "id": 3,
    "name": "Ichigo Kurosaki",
    "email": "ichigo@example.com",
    "image": "https://cdn.myanimelist.net/images/characters/3/289174.jpg",
    "dob": "1997-07-15"
  },
  {
    "id": 4,
    "name": "Levi Ackerman",
    "email": "levi@example.com",
    "image": "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
    "dob": "1995-12-25"
  },
  {
    "id": 5,
    "name": "Gojo Satoru",
    "email": "gojo@example.com",
    "image": "https://cdn.myanimelist.net/images/characters/7/423578.jpg",
    "dob": "1994-03-07"
  }

]
const ui = ( ) =>{ 
    users.innerHTML = ""
    usersData.forEach((elem) =>{
     users.innerHTML += `<div class="user_card">
            <div class="img_box">
                <img src="${elem.image}" alt="image here">
            </div>
            <div class="txt">
                <h3>Name - ${elem.name}</h3>
                <p>Email - ${elem.email}</p>
            </div>
            <div class="action">
    <button id="eedit">Edit</button>
   <button id="del">Delete</button>
</div>
        </div>`


})
}

 ui()

form.addEventListener("submit", (event) =>{
    event.preventDefault() // stop page form reloading while clicking the submit button
    let name = inp1.value
    let email = inp2.value
    let image = imageurl.value
    console.log(name, email);
    // users.innerHTML += `<div class="user_card">
    //         <div class="img_box">
    //             <img src="https://pbs.twimg.com/media/HKMHIFca8AA8nZl.jpg?format=jpg&name=thumb" alt="image here">
    //         </div>
    //         <div class="txt">
    //             <h3>Name - ${name}</h3>
    //             <p>Email - ${email}</p>
    //         </div>

    //     </div>`
    usersData.push({
        name,
        email,
        image
    })
    Ui()

    form.reset() //only work in form it will reset it
    

})