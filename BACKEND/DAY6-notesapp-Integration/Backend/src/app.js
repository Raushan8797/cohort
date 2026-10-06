  const express = require("express");
  const cors = require("cors")
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controler");
const notesRoute = require("./routes/notes.routes");
const NotesModel = require("./models/notes.model");

const app = express();

connectDb();

app.use(express.json());

app.use(cors({
  origin:"http://localhost:5173"
}))

app.get("/", (req, res) => {
  res.send("ok got it ");
});

app.use("/notes", notesRoute)

// app.post("/create", createNotesController);  
module.exports = app;
