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
    res.json(deck);
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
    res.json(await Card.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
