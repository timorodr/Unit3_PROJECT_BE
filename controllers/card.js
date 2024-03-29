const express = require("express");
const Card = require("../models/cards");
const Deck = require("../models/deck");

const router = express.Router();

router.get("/:deckId", async (req, res) => {
  try {
    const deckId = req.params.deckId;
    res.json(await Card.find({ deckId }));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/:deckId", async (req, res) => {
  try {
    let deckId = req.params.deckId;
    req.body.deckId = deckId;
    let card = await Card.create(req.body);
    let deck = await Deck.findById(deckId);
    deck.cards.push(card._id);
    await deck.save();
    res.json(card);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:deckId/:id", async (req, res) => {
  try {
    const deckId = req.params.deckId;
    req.body.deckId = deckId;
    res.json(await Card.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Card.findById(id);
    const deck = await Deck.findById(card.deckId);
    const cardIndex = deck.cards.indexOf(id);
    deck.cards.splice(cardIndex, 1);
    await deck.save();
    res.json(await Card.findByIdAndDelete(id));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:deckId/:id", async (req, res) => {
  try {
    const deckid = req.params.deckId;
    const id = req.params.id;
    console.log(id);
    res.json(await Card.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
