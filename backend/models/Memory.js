const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: string,
    require: true,
  },
  text: {
    type: string,
    required: true,
  },
});

const MemorySchema({
  {
    title: {
      type: string,
      require: true,
    },
    src: {
      type: string,
      required: true,
    }
    description: {
      type: string,
      require: true,
    }
    favorite: {
      type:Boolean,
    },
    comments: [commentSchema]
  },
{ timetamps: true }
})

module.exports = mongoose.model("memory", MemorySchema)