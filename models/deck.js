const mongoose = require('./connection') // configuring to our connection mongoose 

const DeckSchema = new mongoose.Schema({
    name: String,
    isPrivate: true,
    username: String,
    description: String
},
{ timestamps: true }
)

const Deck = mongoose.model("Deck", DeckSchema)

module.exports = Deck