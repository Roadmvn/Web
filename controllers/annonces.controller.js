const Annonce = require("../models/annoncesModel");

const creerAnnonce = async (req, res) => {
  try {
    const {
      titre,
      description,
      entreprise_id,
      date_publication,
      salaire,
      lieu,
      temps_travail,
    } = req.body;
    const annonce = await Annonce.create({
      titre,
      description,
      entreprise_id,
      date_publication,
      salaire,
      lieu,
      temps_travail,
    });
    res.status(201).json(annonce);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'annonce" });
  }
};

const recupererAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.findAll();
    res.json(annonces);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des annonces" });
  }
};

const recupererAnnonce = (req, res) => {
  res.json(req.annonce);
};

const mettreAJourAnnonce = async (req, res) => {
  const {
    titre,
    description,
    entreprise_id,
    date_publication,
    salaire,
    lieu,
    temps_travail,
  } = req.body;
  const annonce = req.annonce;
  annonce.titre = titre;
  annonce.description = description;
  annonce.entreprise_id = entreprise_id;
  annonce.date_publication = date_publication;
  annonce.salaire = salaire;
  annonce.lieu = lieu;
  annonce.temps_travail = temps_travail;

  try {
    await annonce.save();
    res.json(annonce);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'annonce" });
  }
};

const supprimerAnnonce = async (req, res) => {
  try {
    await req.annonce.destroy();
    res.json({ message: "Annonce supprimée avec succès" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'annonce" });
  }
};

module.exports = {
  creerAnnonce,
  recupererAnnonces,
  recupererAnnonce,
  mettreAJourAnnonce,
  supprimerAnnonce,
};
