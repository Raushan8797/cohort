const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();

    res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSingelNoteById = async (req, res) => {
  try {
    let noteID = req.param.noteID;
    let note = await NotesModel.findById(noteID);

    res.status(200).json({
      message: "notes fetched succesfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;
    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body);

     res.status(200).json({
      message: "notes updated succesfully",
      data: updatedNote,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteNoteController = async (req, res) =>{

  try {

    let noteID = req.params.id

    await NotesModel.findByIdAndDelete(noteID)
    
 return res.status(200).json({
      message: "notes deleted succesfully",

    });

  } catch (error) {
     return res.status(500).json({
      message:"Internal server error",
    })
    
  }
}

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingelNoteById,
  updateNoteController,
  deleteNoteController
};
