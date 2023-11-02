const User = require("../models/userModel");


const creerUtilisateur = async (req, res) => {
  try {
    const { nom, prenom, email, motDePasse, role } = req.body;
    const utilisateur = await User.create({
      nom,
      prenom,
      email,
      motDePasse,
      role,
    });
    res.status(201).json(utilisateur);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

const recupererUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await User.findAll();
    res.json(utilisateurs);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

const recupererUtilisateur = (req, res) => {
  res.json(req.utilisateur);
};

const mettreAJourUtilisateur = async (req, res) => {
  const { nom, prenom, email, motDePasse, role } = req.body;
  const utilisateur = req.utilisateur;
  utilisateur.nom = nom;
  utilisateur.prenom = prenom;
  utilisateur.email = email;
  utilisateur.motDePasse = motDePasse;
  utilisateur.role = role;

  try {
    await utilisateur.save();
    res.json(utilisateur);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};

const supprimerUtilisateur = async (req, res) => {
  try {
    await req.utilisateur.destroy();
    res.json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
};

module.exports = {
  creerUtilisateur,
  recupererUtilisateurs,
  recupererUtilisateur,
  mettreAJourUtilisateur,
  supprimerUtilisateur,
};
