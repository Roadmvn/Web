const User = require("../models/userModel");


const verifierUtilisateurExiste = async (req, res, next) => {
  const utilisateur = await User.findByPk(req.params.id);
  if (!utilisateur) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  req.utilisateur = utilisateur;
  next();
};

module.exports = {
  verifierUtilisateurExiste,
};
