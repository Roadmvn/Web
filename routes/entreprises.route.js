const express = require("express");
const router = express.Router();
const entreprisesController = require("./entreprises.controller");
const entreprisesMiddleware = require("./entreprises.middleware");

router.post("/", entreprisesController.creerEntreprise);

router.get("/", entreprisesController.recupererEntreprises);

router.get(
  "/:id",
  entreprisesMiddleware.verifierEntrepriseExiste,
  entreprisesController.recupererEntreprise
);

router.put(
  "/:id",
  entreprisesMiddleware.verifierEntrepriseExiste,
  entreprisesController.mettreAJourEntreprise
);

router.delete(
  "/:id",
  entreprisesMiddleware.verifierEntrepriseExiste,
  entreprisesController.supprimerEntreprise
);

module.exports = router;
