const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Note = sequelize.define("Note", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: "notes",
  timestamps: false,
});

module.exports = Note;
