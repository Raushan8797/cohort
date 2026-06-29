localStorage.setItem("name", "rahul")
let lsd = localStorage.getItem("name")
console.log("lsd");

JSON.stringify() // convert data to json form
JSON.parse( ) //covert json type data to original form

let data = [
    
  {
    name: "Aarav Sharma",
    age: 24,
    city: "Bhopal"
  },
  {
    name: "Priya Verma",
    age: 29,
    city: "Indore"
  },
  {
    name: "Rahul Singh",
    age: 22,
    city: "Delhi"
  },
  {
    name: "Sneha Patel",
    age: 27,
    city: "Ahmedabad"
  },
  {
    "name": "Vikram Mehta",
    "age": 31,
    "city": "Mumbai"
  }

]  // to store this data in local storage, we have to convert it in json type

localStorage.setItem("user-data", JSON.stringify(data))

let lsd_data = localStorage.getItem("user-data")
let value = JSON.parse(lsd_data)
console.log(value);




