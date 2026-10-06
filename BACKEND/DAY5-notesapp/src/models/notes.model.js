const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    minlength: [10, "minimum 20 character are required"],
  },
});

const NotesModel = mongoose.model("notes", notesSchema)

module.exports = NotesModel;