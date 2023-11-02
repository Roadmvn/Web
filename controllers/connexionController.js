const User = require("../models/userModel");

const connexionController = async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        connexionReussie: false,
        message: "Adresse e-mail incorrecte",
      });
    }

    if (user.motDePasse !== motDePasse) {
      return res
        .status(401)
        .json({ connexionReussie: false, message: "Mot de passe incorrect" });
    }

    res.status(200).json({ connexionReussie: true, utilisateur: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      connexionReussie: false,
      message: "Erreur lors de l'authentification",
    });
  }
};

module.exports = connexionController;
