const mongoose = require("./connection")
// const express = require("express")
const Deck = require("./deck")
const Card = require("./cards")


mongoose.connection.on("open", async (req, res) => {
    try{
        const startDecks = [
            {
                name: "MackWick",
                isPrivate: false,
                username: "The Mackwicker",
                description: "this is the mackwick deck",
                // cards: [{ type: mongoose.Types.ObjectId, ref: "Card" }],
              },
              {
                name: "Craig David",
                isPrivate: false,
                username: "David Craig",
                description: "Can you fill me in?",
                // cards: [{ type: mongoose.Types.ObjectId, ref: "Card" }],
              },
]

        const startCards = [
            {
                username: "String",
                question: "Not",
                answer: "answer",
                // deckId: mongoose.Types.ObjectId,
              },
              {
                username: "2",
                question: "much",
                answer: "sauce",
                // deckId: mongoose.Types.ObjectId,
              },
        ]

        await Deck.deleteMany({})
        await Card.deleteMany({})
        const data = await Deck.create(startDecks)
        const dataTwo = await Card.create(startCards)
        console.log(data)
        console.log(dataTwo)
        mongoose.connection.close()

    } catch (error) {
        res.status(400).json(error);
    }
})

// AOudG9g5t1EKNJEi7Epp3M8KTOg9bgqmzdlYD9wI
// fetch('https://quizapi.io/api/v1/questions?apiKey=AOudG9g5t1EKNJEi7Epp3M8KTOg9bgqmzdlYD9wI&limit=10');
