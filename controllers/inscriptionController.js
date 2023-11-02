const User = require("../models/userModel");

const inscription = async (req, res) => {
  try {
    const { nom, prenom, email, motDePasse } = req.body;

    const user = await User.create({
      nom,
      prenom,
      email,
      motDePasse,
    });

    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'inscription" });
  }
};

module.exports = {
  inscription,
};
