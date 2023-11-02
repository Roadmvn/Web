const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const inscriptionController = require("../controllers/inscriptionController");

router.post("/api/inscription", async (req, res) => {
  try {
    const { nom, prenom, email, motDePasse } = req.body;

    const user = await User.create({
      nom,
      prenom,
      email,
      motDePasse,
    });

    res.status(201).json({ message: "Inscription réussie, rah oue t'es chaud toi" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Erreur lors de l'inscription, reesaye mon gars ça va bien se passer",
    });
  }
});

module.exports = router;
