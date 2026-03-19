const noteModel = require("../models/noteModel");

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteModel.findAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve notes" });
  }
};

const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await noteModel.findNoteById(id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve note" });
  }
};

const createNote = async (req, res) => {
  const { judul, isi } = req.body;
  try {
    const newNote = await noteModel.createNote({ judul, isi });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to create note" });
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { judul, isi } = req.body;
  try {
    const note = await noteModel.findNoteById(id);

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    const updatedNote = await noteModel.updateNoteById(id, { judul, isi });
    res
      .status(200)
      .json({ message: "Note updated successfully", data: updatedNote });
  } catch (error) {
    res.status(500).json({ error: "Failed to update note" });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params; 
  try {
    const note = await noteModel.findNoteById(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    await noteModel.deleteNoteById(id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
