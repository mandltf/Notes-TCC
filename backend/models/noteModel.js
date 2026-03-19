const Note = require("../schema/note");

const findAllNotes = async () => {
  return await Note.findAll({
    attributes: ["id", "judul", "isi", "createdAt"],
  });
};

const findNoteById = async (id) => {
  return await Note.findByPk(id, {
    attributes: ["id", "judul", "isi", "createdAt"],
  });
};

const createNote = async (data) => {
  return await Note.create(data);
};

const updateNoteById = async (id, data) => {
  return await Note.update(data, {
    where: { id: id },
  });
};

const deleteNoteById = async (id) => {
  return await Note.destroy({
    where: { id: id },
  });
};

module.exports = {
  findAllNotes,
  findNoteById,
  createNote,
  updateNoteById,
  deleteNoteById,
};
