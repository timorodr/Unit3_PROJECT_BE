const mongoose = require("./connection"); // configuring to our connection mongoose

const CardSchema = new mongoose.Schema(
  {
    username: String,
    question: String,
    answer: String,
    deckId: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
