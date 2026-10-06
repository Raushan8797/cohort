const express = require("express");

const app = express();

// middleware for accepting json data
app.use(express.json());
let port = 3000;

let users = [];

// create

app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send(users);
});

// get -- read
app.get("/", (req, res) => {
  res.send(users);
});

// delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((val) => val.id !== id);
  users = userData;
  res.send("user deleted succesfully");
});

// Update
app.put("update/:id", (req, res) => {
  let { id } = req.params;

  let updatedUser = users.map((val) =>
    val.id === id ? { is, name: "changed ", age: 90 } : val,
  );
  res.send(updatedUser)
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
