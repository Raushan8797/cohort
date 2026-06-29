const create_btn = document.querySelector("#create",)
const formdiv = document.querySelector(".form")
const cross = document.querySelector("#close")
const form = document.querySelector("form")
const producdiv = document.querySelector(".products")


const productArr = JSON.parse(localStorage.getItem("products")) || [];

let updateIndex = null;

let ui = () =>{
    producdiv.innerHTML= ""
    productArr.forEach((elem, index) => {
    producdiv.innerHTML += `
    <div class="product-card">
            <div class="img">
                <img src="${elem.image}" alt="image">
            </div>
            <div class="text">
                <h3>${elem.productName}</h3>
                <p>${elem.description}</p>
                <p>${elem.price}</p>
            </div>
            <div class="btn">
                <button onclick="updateproduct('${elem.productName}')"  id="Update">Update</button>
                <button onclick="deleteproduct(${index})" id="Delete">Delete</button>

            </div>
        </div>
    `

        
    });
}

ui()

create_btn.addEventListener('click', () => {
    formdiv.style.display = "flex"

} )
cross.addEventListener("click", ()=>{
    formdiv.style.display = "none"
})
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let productName = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let image = event.target[3].value;
    if(productName.trim( ) ==="" || description.trim() === "" || price === "" || image === ""){
        alert("please fill all the field")
        return
    }

    let obj = {
        productName,
        description,
        price,
        image,
    }
    if (updateIndex !== null )  {
        productArr[updateIndex] = obj
        updateIndex = null
        localStorage.setItem("products", JSON.stringify(productArr))
        
    } else{
        productArr.push(obj)
        localStorage.setItem("products", JSON.stringify(productArr))

    }

    
    ui()
    form.reset();
    formdiv.style.display = "none"
    
})
const updateproduct = (name) =>{
    formdiv.style.display = "flex"
    let product = productArr.find((elem) => elem.productName === name);
    updateIndex  = productArr.findIndex((elem) => elem.productName === name)

    form[0].value = product.productName;
    form[1].value = product.description;
    form[2].value = product.price;
    form[3].value = product.image;

}
const deleteproduct = (index) =>{
    productArr.splice(index,1);
    localStorage.setItem("products", JSON.stringify(productArr))
    ui()
}