const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MissingEntities = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: String, required: true },
    timeMissing: { type: String, required: true },
    image: { type: String, required: true },
    isHuman: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Missing Things", MissingEntities);
