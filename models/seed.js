const mongoose = require("./connection");
// const express = require("express")
const Deck = require("./deck");
const Card = require("./cards");

mongoose.connection.on("open", async () => {
  const startDecks = [
    {
      name: "MackWick",
      isPrivate: false,
      username: "seed",
      description: "this is the mackwick deck",
      cards: [],
    },
    {
      name: "Craig David",
      isPrivate: false,
      username: "seed",
      description: "Can you fill me in?",
      cards: [],
    },
  ];

  await Deck.deleteMany({});
  await Card.deleteMany({});

  //create deck data
  const deckData = await Deck.create(startDecks);

  //create card data and pass deck ids
  const startCards = [
    {
      username: "seed",
      question: "Not",
      answer: "answer",
      deckId: deckData[0]._id,
    },
    {
      username: "seed",
      question: "much",
      answer: "sauce",
      deckId: deckData[0]._id,
    },
    {
      username: "seed",
      question: "Not",
      answer: "answer",
      deckId: deckData[1]._id,
    },
    {
      username: "seed",
      question: "much",
      answer: "sauce",
      deckId: deckData[1]._id,
    },
  ];

  //create cards
  const cardData = await Card.create(startCards);

  //update decks with card ids
  deckData[0].cards = cardData.filter((card) => {
    if (card.deckId === deckData[0]._id) return card._id;
  });
  await deckData[0].save();
  deckData[1].cards = cardData.filter((card) => {
    if (card.deckId === deckData[1]._id) return card._id;
  });
  await deckData[1].save();
  mongoose.connection.close();
});

// AOudG9g5t1EKNJEi7Epp3M8KTOg9bgqmzdlYD9wI
// fetch('https://quizapi.io/api/v1/questions?apiKey=AOudG9g5t1EKNJEi7Epp3M8KTOg9bgqmzdlYD9wI&limit=10');
