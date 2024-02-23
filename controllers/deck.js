const express = require("express")
const Deck = require("../models/deck")

const router = express.Router()


router.get("/", async (req, res) => {
    try {
        res.json(await Deck.find({}))

    } catch(err) {
        res.status(400).json(err)
    }
})

router.post("/", async (req, res) => {
    try {
        res.json(await Deck.create(req.body))
    } catch(err) {
        res.status(400).json(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        res.json(await Deck.findByIdAndDelete(req.params.id))
    } catch(err) {
        res.status(400).json(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        res.json(await Deck.findById(req.params.id))
    } catch(err) {
        res.status(400).json(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        res.json(await Deck.findByIdAndUpdate(req.params.id, req.body))
    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router