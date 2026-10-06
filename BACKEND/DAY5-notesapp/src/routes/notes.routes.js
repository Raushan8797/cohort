const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingelNoteById,
  updateNoteController,
  deleteNoteController,
} = require("../controllers/notes.controler");
const NotesModel = require("../models/notes.model");

const router = express.Router();

router.post("/create", createNotesController);

router.get("/allNotes", getAllNotesController);

router.get("/:id", getSingelNoteById);

router.put("/:id" , updateNoteController  )

router.delete("/:id", deleteNoteController)

module.exports = router;
