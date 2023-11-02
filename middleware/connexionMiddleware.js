const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/connexion", async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect." });
    }

    const isMatch = user.motDePasse === motDePasse;

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect." });
    }

    res.status(200).json({ message: "Connexion réussie", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});

module.exports = router;
