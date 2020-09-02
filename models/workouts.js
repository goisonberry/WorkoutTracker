const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for a workout",
  },
  //   value: {
  //     type: Number,
  //     required: "Enter an amount"
  //   }
});

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;
