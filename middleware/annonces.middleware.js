const Annonce = require("../models/annoncesModel");

const verifierAnnonceExiste = async (req, res, next) => {
  const annonce = await Annonce.findByPk(req.params.id);
  if (!annonce) {
    return res.status(404).json({ message: "Annonce non trouvée" });
  }
  req.annonce = annonce;
  next();
};

module.exports = {
  verifierAnnonceExiste,
};
