const mongoose = require('./connection') // configuring to our connection mongoose 

const CardSchema = new mongoose.Schema({
    deckId: Schema.Types.ObjectId,
    username: String,
    question: String,
    answers: String
},
{ timestamps: true }
)

const Card = mongoose.model("Card", CardSchema)

module.exports = Card