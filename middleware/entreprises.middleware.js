const Entreprise = require("./entreprises.model");

const verifierEntrepriseExiste = async (req, res, next) => {
  const entreprise = await Entreprise.findByPk(req.params.id);
  if (!entreprise) {
    return res.status(404).json({ message: "Entreprise non trouvée" });
  }
  req.entreprise = entreprise;
  next();
};

module.exports = {
  verifierEntrepriseExiste,
};
