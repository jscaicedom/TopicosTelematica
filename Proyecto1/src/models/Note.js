const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
    {
      temp: {
        type: float,
        required: true
      },
      humedad: {
        type: float,
        required: true
      },
      gps: {
        type: String,
        required: true
      },
      user: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );

  module.exports = model("Note", NoteSchema);