const Entreprise = require("./entreprises.model");

const creerEntreprise = async (req, res) => {
  try {
    const { nom, adresse } = req.body;
    const entreprise = await Entreprise.create({ nom, adresse });
    res.status(201).json(entreprise);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'entreprise" });
  }
};

const recupererEntreprises = async (req, res) => {
  try {
    const entreprises = await Entreprise.findAll();
    res.json(entreprises);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des entreprises" });
  }
};

const recupererEntreprise = (req, res) => {
  res.json(req.entreprise);
};

const mettreAJourEntreprise = async (req, res) => {
  const { nom, adresse } = req.body;
  const entreprise = req.entreprise;
  entreprise.nom = nom;
  entreprise.adresse = adresse;

  try {
    await entreprise.save();
    res.json(entreprise);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'entreprise" });
  }
};

const supprimerEntreprise = async (req, res) => {
  try {
    await req.entreprise.destroy();
    res.json({ message: "Entreprise supprimée avec succès" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'entreprise" });
  }
};

module.exports = {
  creerEntreprise,
  recupererEntreprises,
  recupererEntreprise,
  mettreAJourEntreprise,
  supprimerEntreprise,
};
