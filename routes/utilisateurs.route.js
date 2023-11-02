const express = require("express");
const router = express.Router();
const utilisateursController = require("../controllers/utilisateurs.controller");
const utilisateursMiddleware = require("../middleware/utilisateurs.middleware");

router.post("/", utilisateursController.creerUtilisateur);
router.get("/", utilisateursController.recupererUtilisateurs);
router.get(
  "/:id",
  utilisateursMiddleware.verifierUtilisateurExiste,
  utilisateursController.recupererUtilisateur
);
router.put(
  "/:id",
  utilisateursMiddleware.verifierUtilisateurExiste,
  utilisateursController.mettreAJourUtilisateur
);
router.delete(
  "/:id",
  utilisateursMiddleware.verifierUtilisateurExiste,
  utilisateursController.supprimerUtilisateur
);

module.exports = router;
