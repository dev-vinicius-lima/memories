const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const MemorySchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    src: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    favorite: {
      type: Boolean,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("memory", MemorySchema);
