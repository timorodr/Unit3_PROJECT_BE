const express = require("express");
const Deck = require("../models/deck");
const Card = require("../models/cards")

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await Deck.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await Deck.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id
    await Card.deleteMany({deckId: id})
    res.json(await Deck.findByIdAndDelete(id));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let deck = await Deck.findById(id);
    console.log(deck);
    res.json(await deck.populate("cards"));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(await Deck.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
