const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingelNoteById,
  updateNoteController,
  deleteNoteController,
  UpdateByPatch,
} = require("../controllers/notes.controler");
const NotesModel = require("../models/notes.model");

const router = express.Router();

// create
router.post("/create", createNotesController);

// Read
router.get("/allNotes", getAllNotesController);

// read one
router.get("/:id", getSingelNoteById);

// Update vis put
router.put("/:id", updateNoteController);

// delete
router.delete("/:id", deleteNoteController);

// Update vis patch
router.patch("/:id/single", UpdateByPatch);

module.exports = router;
